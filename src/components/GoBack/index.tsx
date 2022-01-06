import { useRouter } from 'next/router'

import { Button } from './styles'

export default function GoBack() {
  const router = useRouter()

  return (
    <>
      <Button onClick={() => router.back()}>
        <a>‹ Voltar</a>
      </Button>
    </>
  )
}
