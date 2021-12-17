import fs from 'fs'
import path from 'path'
import assert from 'assert'

import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import remarkRehype from 'remark-rehype'
import remarkGfm from 'remark-gfm'
import { remark } from 'remark'

import Post from '@/types/post'
import FrontMatterParser from './FrontMatterParser'

const postsDirectory = path.join(process.cwd(), 'posts')
let filenames = fs.readdirSync(postsDirectory)

// convenção temporária: arquivos que contém "@d" (draft) não aparecem em produção
if (process.env.NODE_ENV !== 'development')
  filenames = filenames.filter((fn) => !fn.includes('@d'))
console.log({ env: process.env.NODE_ENV })

interface SearchPostsParams {
  filterTag?: string
}

export async function getSortedPosts(
  searchParams?: SearchPostsParams,
): Promise<Post[]> {
  const allPosts = filenames.map(async (filename) => loadPost(filename, false))
  let posts = await Promise.all(allPosts)

  if (searchParams && searchParams.filterTag)
    posts = posts.filter((post) =>
      post.tags.find((postTag) => postTag === searchParams.filterTag),
    )

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

export function getAllPostsIds(): string[] {
  return filenames.map((fn) => fn.replace(/.md$/, ''))
}

/**
 * Função que deve ser chamada para renderizar um post de fato.
 * @param id ID do post
 * @returns Post com `.content` preenchido
 */
export async function getPostById(id: string): Promise<Post> {
  const filename = `${id}.md`
  const post = await loadPost(filename, true)
  // TODO: Abstrair remark em uma função/classe
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    // Example: syntax highlighting
    // https://www.npmjs.com/package/rehype-sanitize
    .use(rehypeSanitize, {
      ...defaultSchema,
      attributes: {
        ...defaultSchema.attributes,
        code: [
          ...(defaultSchema.attributes?.code || []),
          // List of all allowed languages:
          [
            'className',
            'language-js',
            'language-css',
            'language-md',
            'language-c',
            'language-sh',
          ],
        ],
      },
    })
    .use(rehypeHighlight, { subset: false })
    .use(rehypeStringify)
    .process(post.content)

  post.content = processedContent.toString()

  return post
}

async function loadPost(filename: string, withContent = false): Promise<Post> {
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
  }
}
