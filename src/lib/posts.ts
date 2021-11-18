import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

import Post from '../types/post'

const postsDirectory = path.join(process.cwd(), 'posts')

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
    console.log(a, typeof a)
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}
