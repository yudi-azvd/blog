import { Container, Content } from './style'

import Link from '@/components/Link'
import { isDevelopmentEnvironment } from '@/lib/util'

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

            {isDevelopmentEnvironment() && (
              <li>
                <Link href="/drafts">
                  <a>Rascunhos</a>
                </Link>
              </li>
            )}
          </ul>
        </Content>
      </Container>
    </>
  )
}
