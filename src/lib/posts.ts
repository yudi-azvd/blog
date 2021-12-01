import path from 'path'
import fs from 'fs'

import matter from 'gray-matter'
import { marked } from 'marked'

import Post from '../types/post'
import { getAvailableTags } from './tags'

const postsDirectory = path.join(process.cwd(), 'posts')
const availableTags = getAvailableTags()

export function getSortedPosts(): Post[] {
  const filenames = fs.readdirSync(postsDirectory)

  const allPosts = filenames.map((filename) => {
    const id = filename.replace(/\.md$/, '')
    const fullpath = path.join(postsDirectory, filename)
    const fileContent = fs.readFileSync(fullpath, 'utf8')

    // TODO: substituir `matter` por uma interface?
    const matterResult = matter(fileContent)

    return {
      id,
      // TODO: arrumar um jeito de forçar a existência e tipos dos metadados
      ...matterResult.data,
    } as Post
  })

  return allPosts.sort(({ date: a }, { date: b }) => {
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

export async function getPost(id: string): Promise<Post> {
  const fullpath = path.join(postsDirectory, `${id}.md`)
  const filecontent = fs.readFileSync(fullpath, 'utf8')
  const matterResult = matter(filecontent)

  // const processedContent = await remark()
  //   .use(remarkHtml)
  //   .use(rehypeHighlight)
  //   .process(matterResult.content)
  // const contentHtml = processedContent.toString()

  const contentHtml = marked(matterResult.content)
  return {
    id,
    content: contentHtml,
    ...matterResult.data,
  } as Post
}
