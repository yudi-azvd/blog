import Head from 'next/head'

import { Container, Content } from '@/styles/pages/blog/tags'
import { getAvailableTags } from '@/lib/tags'
import Link from '@/components/Link'
import GoBack from '@/components/GoBack'

interface TagsProps {
  tags: string[]
}

export default function Tags(props: TagsProps) {
  return (
    <>
      <Head>
        <title> Tags </title>
      </Head>

      <Container>
        <Content>
          <GoBack to="/blog" />

          <h1>Tags</h1>
          <div>
            <p>Tags disponíveis nesse blog:</p>
            <ul>
              {props.tags.map((t, index) => (
                <li key={`${index}-${t}`}>
                  <Link href={`/blog/tags/${t}`}>
                    <a>{t}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Content>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const availableTags = getAvailableTags()
  return {
    props: {
      tags: availableTags,
    },
  }
}