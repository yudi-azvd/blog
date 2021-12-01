import Head from 'next/head'

import Link from '@/components/Link'
import { Container, Content } from '@/styles/pages/blog/about'

export default function About() {
  return (
    <>
      <Head>
        <title> Sobre </title>
      </Head>

      <Container>
        <Content>
          <Link href="/blog">
            <a>← Voltar</a>
          </Link>

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
