export interface PostMeta {
  tags: string[]
  title: string
  excerpt: string
}

interface Post extends PostMeta {
  id: string
  dateFormatted?: string
  date: string
  content: string
}

export default Post
