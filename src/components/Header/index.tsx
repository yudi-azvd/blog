import { Container, Content } from './style'

import Link from '@/components/Link'
import { isDevelopmentEnvironment } from '@/lib/util'

export default function Header() {
  return (
    <>
      <Container>
        <Content>
          <Link href="/">
            <a>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/blog/logo.png" alt="logo" width={40} height={40} />
            </a>
          </Link>
          <ul>
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

            {(isDevelopmentEnvironment() || process.env.VERCEL_ENV) && (
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
