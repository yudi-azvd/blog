import fs from 'fs'
import path from 'path'

import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import remarkRehype from 'remark-rehype'
import remarkGfm from 'remark-gfm'
import { remark } from 'remark'

import Post from '@/types/post'
import FrontMatterParser from './FrontMatterParser'
import { isDevelopmentEnvironment } from './util'
import slugify from './slugify'

const postsDirectory = path.join(process.cwd(), 'posts')
let filenames = getFullFilePaths(postsDirectory)
filenames = filenames.map((fn) =>
  fn.substring(fn.indexOf('/posts') + '/posts'.length + 1),
)
const drafts = filenames.filter((fn) => fn.indexOf('drafts/') > -1)

// if (process.env.NODE_ENV === 'production' && process.env.VERCEL_ENV !== 'TRUE')
filenames = filenames.filter((fn) => !fn.includes('drafts/'))

interface SearchPostsParams {
  filterTag?: string
}

function getFullFilePaths(directory: string): string[] {
  const thingsInDirectory = fs
    .readdirSync(directory)
    .map((f) => path.join(directory, f))
  const fullPaths: string[] = []
  const directories: string[] = []

  for (let i = 0; i < thingsInDirectory.length; i++) {
    const thing = thingsInDirectory[i]

    if (fs.lstatSync(thing).isDirectory()) {
      directories.push(thing)
      fullPaths.push(...getFullFilePaths(thing))
    } else {
      fullPaths.push(thing)
    }
  }

  return fullPaths
}

export async function getDrafts(): Promise<Post[]> {
  const allDrafts = drafts.map(async (filename) => loadPost(filename, false))
  const draftsResolved = Promise.all(allDrafts)
  return draftsResolved
}

export function getAllDraftsIds(): string[] {
  return drafts.map((fn) => fn.replace(/.md$/, ''))
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
  // const filename = `${id}.md`
  // deve ser muito devagar, talvez seja melhor usar algo como dicionário

  let filename = filenames.find((f) => f.endsWith(`${id}.md`)) // `${id}.md`

  if (filename === undefined && isDevelopmentEnvironment())
    filename = drafts.find((f) => f.endsWith(`${id}.md`))

  if (filename === undefined)
    throw new Error(`File not found. Given slug: '${id}'`)

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
            'language-cpp',
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
  let date = ''
  const dateMatch = filename.match(/(\d{4}-\d{2}-\d{2})/)
  if (dateMatch) date = dateMatch[1]

  if (isNaN(Date.parse(date)))
    throw new Error(`Invalid or missing date "${date}" for file "${filename}"`)

  const fullpath = path.join(postsDirectory, filename)
  const fileContent = fs.readFileSync(fullpath, 'utf8')

  const frontMatterParser = new FrontMatterParser(fileContent, withContent)
  await frontMatterParser.run()

  const frontMatter = frontMatterParser.getFrontMatter()
  const content = frontMatterParser.getContent()

  const id = filename.replace(/\.md$/, '')
  const post: Post = {
    id,
    slug: slugify(id),
    date,
    dateFormatted: new Date(date)
      .toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
      .replace(/ de /g, ' ')
      .replace(/\./, ''),
    content,
    ...frontMatter,
  }

  return post
}
