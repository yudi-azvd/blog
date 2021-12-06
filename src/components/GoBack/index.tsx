import Link from '@/components/Link'

interface Props {
  to: string
}

export default function GoBack({ to }: Props) {
  return (
    <Link href={to}>
      <a>← Voltar</a>
    </Link>
  )
}
