import Head from 'next/head'

import { Container, Content } from '@/styles/pages/about'

export default function About() {
  return (
    <>
      <Head>
        <title> Sobre </title>
      </Head>

      <Container>
        <Content>
          <h1>Sobre esse Blog</h1>

          <div>
            <p>Olá,</p>
            <p>
              Nesse humilde blog vou postar qualquer coisa interessante que eu
              aprendi ou fiz em engenharia de software, desenvolvimento de
              jogos, automação com programação e, quem sabe, na vida também.
            </p>
            <br />
            <p>
              <a href="https://github.com/yudi-azvd/blog">Repositório</a> desse
              blog no GitHub, feito por{' '}
              <a href="https://github.com/yudi-azvd">Yudi Yamane</a>.
            </p>
          </div>
        </Content>
      </Container>
    </>
  )
}
