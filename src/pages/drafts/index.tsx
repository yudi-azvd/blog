import { GetStaticProps, NextPage } from 'next'

import { getDrafts } from '@/lib/postFunctions'
import Link from '@/components/Link'
import Post from '@/types/post'
import GoBack from '@/components/GoBack'

interface Props {
  drafts: Post[]
}

const Drafts: NextPage<Props> = ({ drafts }) => {
  return (
    <>
      <GoBack />
      <h1>Rascunhos</h1>

      <ul>
        {drafts.map((d) => (
          <li key={d.id}>
            <Link href={`/posts/${d.id.replace(/^.*\d{4}-\d{2}-\d{2}-/, '')}`}>
              <a> {d.title} </a>
            </Link>
          </li>
        ))}
      </ul>
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
