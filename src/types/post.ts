export interface PostMeta {
  tags: string[]
  title: string
  excerpt: string
}

interface Post extends PostMeta {
  id: string
  slug: string
  date: string
  dateFormatted: string
  content: string
}

export default Post
