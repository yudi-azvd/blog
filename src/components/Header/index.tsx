import { Container, Content } from './style'

import Link from '../Link'

export default function Header() {
  return (
    <>
      <Container>
        <Content>
          <ul>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/blog/tags">
                <a>Tags</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Séries</a>
              </Link>
            </li>
            <li>
              <Link href="/blog/about">
                <a>Sobre</a>
              </Link>
            </li>
          </ul>
        </Content>
      </Container>
    </>
  )
}
