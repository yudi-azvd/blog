import NextLink from 'next/link'
import styled from 'styled-components'
// import { styled } from '@stitches/react'

// Usando Stiches:
// const Link = styled(NextLink, {
// backgroundColor: 'Gainsboro',
// borderRadius: '999px',
// })

export const Link = styled(NextLink)`
  text-decoration: none;
  background: blue;
`

// export const StyledAnchor = styled.a`
//   text-decoration: none;
//   background: blue;
// `

// const Link = ({ href, name }) => (
//   <NextLink prefetch passHref href={href}>
//     <StyledAnchor>{name}</StyledAnchor>
//   </NextLink>
// )

export default Link
