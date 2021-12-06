export interface PostMeta {
  tags: string[]
  title: string
  date: string
  excerpt: string
}

interface Post extends PostMeta {
  id: string
  dateFormatted?: string
  content: string
}

export default Post
