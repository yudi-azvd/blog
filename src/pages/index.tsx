import { NextPage } from 'next'
import Head from 'next/head'

import styled from 'styled-components'

import Link from '../components/Link'

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
`

const Content = styled.main`
  margin: 8% auto;
  width: 90%;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 32px;
  }

  @media (min-width: 650px) {
    & {
      max-width: calc(800px - (30px * 2));
    }
  }
`

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yudi Yamane</title>
      </Head>

      <Container>
        <Content>
          <h1>Site em construção</h1>
          <p>
            Por enquanto só tem o{' '}
            <Link href="/blog">
              <a>blog</a>
            </Link>
            .
          </p>
        </Content>
      </Container>
    </>
  )
}

export default Home
