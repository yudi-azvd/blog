import { GetStaticProps, NextPage } from 'next'

import { getDrafts } from '@/lib/postFunctions'
import Link from '@/components/Link'
import Post from '@/types/post'
import { Container, Content } from '@/styles/pages/drafts'

interface Props {
  drafts: Post[]
}

const Drafts: NextPage<Props> = ({ drafts }) => {
  return (
    <>
      <Container>
        <Content>
          <h1>Rascunhos</h1>

          <ul>
            {drafts.map((d) => (
              <li key={d.id}>
                <Link
                  href={`/posts/${d.id.replace(/^.*\d{4}-\d{2}-\d{2}-/, '')}`}
                >
                  <a> {d.title} </a>
                </Link>
              </li>
            ))}
          </ul>
        </Content>
      </Container>
    </>
  )
}

export default Drafts

export const getStaticProps: GetStaticProps = async () => {
  const drafts = await getDrafts()

  return {
    props: {
      drafts,
      notFound: true,
    },
  }
}
