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
              <Link href="/tags">
                <a>Tags</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Séries</a>
              </Link>
            </li>
          </ul>
        </Content>
      </Container>
    </>
  )
}
