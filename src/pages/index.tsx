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
              <PostItem key={`${post.slug}`}>
                <h2 style={{ fontWeight: 'normal' }}>
                  <Link href={`/posts/${post.slug}`}>
                    <a>{post.title}</a>
                  </Link>
                </h2>

                <PostMeta>
                  <p> {post.excerpt} </p>
                  <time> {post.dateFormatted} </time>
                  {post.tags.length > 0 ? (
                    <span> {post.tags.join(', ')}</span>
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
