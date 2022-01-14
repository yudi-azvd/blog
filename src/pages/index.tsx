import type { NextPage } from 'next'
import Head from 'next/head'

import Link from '../components/Link'
import { getSortedPosts } from '../lib/postFunctions'
import Post from '../types/post'

import { Container, Content, PostItem, PostMeta } from '@/styles/pages/blog'

interface Props {
  allPosts: Post[]
}

const Blog: NextPage<Props> = ({ allPosts }) => {
  return (
    <>
      <Head>
        <title>Yudi Yamane</title>
        <meta name="description" content="Blog do Yudi" />
      </Head>

      <Container>
        <Content>
          <h1>Posts</h1>
          <br />

          <ul>
            {allPosts.map((post) => (
              <PostItem key={`${post.date}-${post.title}`}>
                <h2 style={{ fontWeight: 'normal' }}>
                  <Link
                    href={`/posts/${post.id.replace(
                      /^.*\d{4}-\d{2}-\d{2}-/,
                      '',
                    )}`}
                  >
                    <a>{post.title}</a>
                  </Link>
                </h2>

                <p> {post.excerpt} </p>
                <PostMeta>
                  <time> {post.date} </time>
                  {post.tags.length > 0 ? (
                    <small> {post.tags.join(', ')}</small>
                  ) : (
                    <></>
                  )}
                </PostMeta>
              </PostItem>
            ))}
          </ul>
        </Content>
      </Container>
    </>
  )
}

export default Blog

export const getStaticProps = async () => {
  const allPosts = await getSortedPosts()

  return {
    props: {
      allPosts,
    },
  }
}
