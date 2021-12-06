import Head from 'next/head'

import { Container, Content } from '@/styles/pages/blog/about'
import GoBack from '@/components/GoBack'

export default function About() {
  return (
    <>
      <Head>
        <title> Sobre </title>
      </Head>

      <Container>
        <Content>
          <GoBack to="/blog" />

          <h1>Sobre mim</h1>
          <div>
            <p>Olá, meu nome é Yudi Yamane.</p>
            <p>
              Nesse humilde blog vou postar qualquer coisa interessante que eu
              aprendi ou fiz em engenharia de software, desenvolvimento de
              jogos, automação com Bash e, quem sabe, na vida também.
            </p>
          </div>
        </Content>
      </Container>
    </>
  )
}
