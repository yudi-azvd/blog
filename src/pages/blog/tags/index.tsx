import Head from 'next/head'

import Link from '@/components/Link'
import { Container, Content } from '@/styles/pages/blog/tags'
import { getAvailableTags } from '@/lib/tags'

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
          <Link href="/blog">
            <a>← Voltar</a>
          </Link>

          <h1>Tags</h1>
          <div>
            <p>Tags disponíveis nesse blog:</p>
            <ul>
              {props.tags.map((t, index) => (
                <li key={`${index}-${t}`}>{t}</li>
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
