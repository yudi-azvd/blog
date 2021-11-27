import { NextPage } from 'next'
import Head from 'next/head'

import Link from '../components/Link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yudi Yamane</title>
      </Head>

      <h1>
        Por enquanto só tem o{' '}
        <Link href="/blog">
          <a>blog</a>
        </Link>
      </h1>
    </>
  )
}

export default Home
