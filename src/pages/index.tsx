import { NextPage } from 'next'

import Link from '../components/Link'

const Home: NextPage = () => {
  return (
    <>
      <h1>Oi</h1>
      <Link href="/blog">
        <a>Aqui ó</a>
      </Link>
    </>
  )
}

export default Home
