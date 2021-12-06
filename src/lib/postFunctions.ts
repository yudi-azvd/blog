import path from 'path'
import fs from 'fs'
import assert from 'assert'

import matter from 'gray-matter'
import { marked } from 'marked'

import { remark } from 'remark'
import remarkHtml from 'remark-html'
import rehypeHighlight from 'rehype-highlight'

import Post from '../types/post'
import FrontMatterParser from './FrontMatterParser'

const postsDirectory = path.join(process.cwd(), 'posts')

export function loadPost(filename: string, withContent = false) {
  return 1
}

export async function getSortedPosts(): Promise<Post[]> {
  const filenames = fs.readdirSync(postsDirectory)

  const allPosts = filenames.map(async (filename) => {
    let dateFromFilename = ''
    const dateMatch = filename.match(/^\d{4}-\d{2}-\d{2}/)
    if (dateMatch) dateFromFilename = dateMatch[0]
    const fullpath = path.join(postsDirectory, filename)
    const fileContent = fs.readFileSync(fullpath, 'utf8')

    const postValidator = new FrontMatterParser(fileContent)
    await postValidator.run()
    const matterResult = postValidator.get()

    assert(
      dateFromFilename === matterResult.date,
      `${dateFromFilename} == ${matterResult.date}`,
    )

    const id = filename.replace(/\.md$/, '')
    return {
      id,
      ...matterResult,
      content: '',
    } as Post
  })

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
  const filenames = fs.readdirSync(postsDirectory)

  return filenames.map((filename) => {
    return {
      params: {
        id: filename.replace(/\.md$/, ''),
      },
    }
  })
}

export async function getPostById(id: string): Promise<Post> {
  const fullpath = path.join(postsDirectory, `${id}.md`)
  const filecontent = fs.readFileSync(fullpath, 'utf8')
  const matterResult = matter(filecontent)

  const processedContent = await remark()
    .use(remarkHtml)
    .use(rehypeHighlight)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // const contentHtml = marked(matterResult.content)

  return {
    id,
    content: contentHtml,
    ...matterResult.data,
  } as Post
}
