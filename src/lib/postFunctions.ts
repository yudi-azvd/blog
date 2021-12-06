import path from 'path'
import fs from 'fs'
import assert from 'assert'

import { remark } from 'remark'
import remarkHtml from 'remark-html'
import rehypeHighlight from 'rehype-highlight'

import Post from '../types/post'
import FrontMatterParser from './FrontMatterParser'

const postsDirectory = path.join(process.cwd(), 'posts')
let filenames = fs.readdirSync(postsDirectory)

if (process.env.NODE_ENV !== 'development')
  filenames = filenames.filter((fn) => !fn.startsWith('-'))

export async function getSortedPosts(): Promise<Post[]> {
  const allPosts = filenames.map(async (filename) => loadPost(filename, false))
  const posts = await Promise.all(allPosts)

  return posts.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

export function getAllPostsIds() {
  return filenames.map((fn) => fn.replace(/.md$/, ''))
}

export async function getPostById(id: string): Promise<Post> {
  const filename = `${id}.md`
  const post = await loadPost(filename, true)
  const processedContent = await remark()
    // TODO: fazer o highlight funcionar
    .use(remarkHtml)
    .use(rehypeHighlight)
    .process(post.content)

  post.content = processedContent.toString()

  return post
}

async function loadPost(filename: string, withContent = false) {
  let dateFromFilename = ''
  const dateMatch = filename.match(/^-?(\d{4}-\d{2}-\d{2})/)
  if (dateMatch) dateFromFilename = dateMatch[1]

  const fullpath = path.join(postsDirectory, filename)
  const fileContent = fs.readFileSync(fullpath, 'utf8')

  const frontMatterParser = new FrontMatterParser(fileContent, withContent)
  await frontMatterParser.run()

  const frontMatter = frontMatterParser.getFrontMatter()
  const content = frontMatterParser.getContent()

  assert(
    dateFromFilename === frontMatter.date,
    `${dateFromFilename} === ${frontMatter.date}`,
  )

  const id = filename.replace(/\.md$/, '')
  return {
    id,
    ...frontMatter,
    content,
  } as Post
}
