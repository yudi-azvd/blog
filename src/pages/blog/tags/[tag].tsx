import { GetStaticPaths } from 'next'
import Head from 'next/head'

import Post from '../../../types/post'
import GoBack from '@/components/GoBack'
import Link from '@/components/Link'
import { getSortedPosts } from '@/lib/postFunctions'
import { getAvailableTags } from '@/lib/tags'
import { Container, Content } from '@/styles/pages/blog/tags'

interface Params {
  params: {
    tag: string
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const postsWithThisTag = await getSortedPosts({ filterTag: params.tag })
  return {
    props: {
      tag: params.tag,
      posts: postsWithThisTag,
    },
  }
}

interface Props {
  tag: string
  posts: Post[]
}

export default function TagPage({ tag, posts }: Props) {
  return (
    <>
      <Head>
        <title> Tag: {tag} </title>
      </Head>

      <Container>
        <Content>
          <GoBack />

          <h1> Posts sobre {tag} </h1>

          <ul>
            {posts.map((p) => (
              <li key={p.id}>
                <Link href={`/blog/posts/${p.id}`}>
                  <a>{p.title}</a>
                </Link>
              </li>
            ))}
          </ul>
          <GoBack />
        </Content>
      </Container>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = getAvailableTags()
  const paths = tags.map((tag) => ({
    params: { tag },
  }))

  return {
    paths,
    fallback: false,
  }
}
