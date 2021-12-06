import { GetStaticPaths } from 'next'
import Head from 'next/head'

import Link from '../../../components/Link'
import { Container, MarkdownContent, PostDetails } from '@/styles/pages/post'

import Post from '../../../types/post'
import { getAllPostsIds, getPostById } from '../../../lib/postFunctions'

interface Params {
  params: {
    id: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = await getPostById(params.id)
  return {
    props: {
      post,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = getAllPostsIds()
  const paths = ids.map((id) => ({
    params: { id },
  }))

  return {
    paths,
    fallback: false,
  }
}

interface PostProps {
  post: Post
}

export default function PostPage({ post }: PostProps) {
  return (
    <>
      <Head>
        <title> {post.title} </title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <Container>
        <MarkdownContent>
          <Link href="/blog">
            <a>← Voltar</a>
          </Link>
          <h1> {post.title} </h1>
          <PostDetails>
            <time> {post.date} </time>
            {post.tags.length > 0 ? (
              <small> | {post.tags.join(', ')}</small>
            ) : (
              <></>
            )}
          </PostDetails>

          <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />

          <Link href="/blog">
            <a>← Voltar</a>
          </Link>
        </MarkdownContent>
      </Container>
    </>
  )
}
