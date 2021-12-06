import matter from 'gray-matter'
import { PostMeta } from '../types/post'
import * as yup from 'yup'

const schema = yup.object().shape({
  title: yup.string().required(),
  excerpt: yup.string().required(),
  tags: yup.array().of(yup.string()).required(),
  date: yup
    .string()
    .required()
    .test(
      'test-date',
      // eslint-disable-next-line no-template-curly-in-string
      'Data deve estar em formato ISO. Data: ${value}',
      (value = '') => !isNaN(Date.parse(value)),
    ),
})

class FrontMatterParser {
  frontMatter: PostMeta
  content: string

  constructor(fileContent: string, withContent = false) {
    const matterResult = matter(fileContent)
    this.frontMatter = matterResult.data as PostMeta
    this.content = withContent ? matterResult.content : ''
  }

  getFrontMatter() {
    return this.frontMatter
  }

  getContent() {
    return this.content
  }

  async run() {
    try {
      await schema.validate(this.frontMatter, { abortEarly: false })
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const errorMessage = error.inner
          .map((err) => err.message)
          .join('\n')
          .concat(` from ${this.frontMatter.date}-${this.frontMatter.title}.md`)

        throw errorMessage
      }
    }
  }
}

export default FrontMatterParser
