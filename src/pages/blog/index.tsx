import type { NextPage } from 'next'
import Head from 'next/head'
import Link from '../../components/Link'

import { getSortedPosts } from '../../lib/posts'
import Post from '../../types/post'

import { Container, Content, PostItem, PostMeta } from '../../styles/pages/blog'

interface Props {
  allPosts: Post[]
}

const Blog: NextPage<Props> = ({ allPosts }: Props) => {
  return (
    <>
      <Head>
        <title>Yudi Yamane</title>
        <meta name="description" content="Blog do Yudi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Content>
          <h1>Posts</h1>
          <small>posts temporários, apenas para teste xD </small>
          <br />
          <ul>
            {allPosts.map((post) => (
              <PostItem key={post.title}>
                <Link href={`/blog/posts/${post.id}`}>
                  <a>
                    <h2>{post.title} </h2>
                  </a>
                </Link>
                <p> {post.excerpt} </p>
                <PostMeta>
                  <small className="date"> {post.date} </small>
                  {post.tags ? <small> | {post.tags.join(', ')}</small> : <></>}
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
  const allPosts = getSortedPosts()
  return {
    props: {
      allPosts,
    },
  }
}
