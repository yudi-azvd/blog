interface Post {
  id: string
  tags: [string]
  title: string
  date: string
  dateFormatted?: string
  excerpt?: string
  content: string
}

export default Post
