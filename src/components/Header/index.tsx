import { Container, Content } from './style'

import Link from '@/components/Link'

export default function Header() {
  return (
    <>
      <Container>
        <Content>
          <ul>
            <li>
              <Link href="/">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/tags">
                <a>Tags</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>Sobre</a>
              </Link>
            </li>
          </ul>
        </Content>
      </Container>
    </>
  )
}
