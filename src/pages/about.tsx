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
              Nesse humilde blog vou postar as coisas interessantes que eu
              aprendi ou fiz em engenharia de software, desenvolvimento de
              jogos, automação com programação e, quem sabe, na vida também.
            </p>
            <p>
              Se você viu algum problema no site ou erro nos posts, você pode e
              é convidado a abrir uma issue{' '}
              <a href="https://github.com/yudi-azvd/blog/issues/new">aqui</a> .
            </p>
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
