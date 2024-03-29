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
import slugify from '@/lib/slugify'

interface Params {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = await getPostById(params.slug)
  return {
    props: {
      post,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsIds = getAllPostsIds() // não conta rascunhos

  const postsPaths = postsIds.map((id) => ({
    params: { slug: slugify(id) },
  }))

  const draftsIds = getAllDraftsIds()
  const draftsPaths = draftsIds.map((id) => ({
    params: { slug: slugify(id) },
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
            <time> {post.dateFormatted} </time>
            {post.tags.length > 0 ? (
              <small> {post.tags.join(', ')}</small>
            ) : (
              <></>
            )}
          </PostDetails>

          <main dangerouslySetInnerHTML={{ __html: post.content || '' }} />

          <GoBack />
        </MarkdownContent>
      </Container>
    </>
  )
}
