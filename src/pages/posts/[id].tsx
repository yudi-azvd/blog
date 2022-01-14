import { GetStaticPaths } from 'next'
import Head from 'next/head'

import { Container, MarkdownContent, PostDetails } from '@/styles/pages/post'

import Post from '@/types/post'
import {
  getAllDraftsIds,
  getAllPostsIds,
  getPostById,
} from '@/lib/postFunctions'
import GoBack from '@/components/GoBack'
import { isDevelopmentEnvironment } from '@/lib/util'

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
  const postsIds = getAllPostsIds() // não conta rascunhos
  const postsPaths = postsIds.map((id) => ({
    params: { id: id.replace(/^.*\d{4}-\d{2}-\d{2}-/, '') },
  }))

  const draftsIds = getAllDraftsIds()
  const draftsPaths = draftsIds.map((id) => ({
    params: { id: id.replace(/^.*\d{4}-\d{2}-\d{2}-/, '') },
  }))

  let paths = [...postsPaths]
  if (isDevelopmentEnvironment()) {
    paths = paths.concat(draftsPaths)
  }

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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/github-dark.min.css"
        ></link>
      </Head>

      <Container>
        <MarkdownContent>
          <GoBack />

          <h1> {post.title} </h1>
          <PostDetails>
            <time> {post.date} </time>
            {post.tags.length > 0 ? (
              <small> {post.tags.join(', ')}</small>
            ) : (
              <></>
            )}
          </PostDetails>

          <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />

          <GoBack />
        </MarkdownContent>
      </Container>
    </>
  )
}
