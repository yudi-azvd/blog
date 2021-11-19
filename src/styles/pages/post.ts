import { styled } from '../stitches.config'

export const Container = styled('div', {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
})

export const MarkdownContent = styled('article', {
  margin: '64px',
  display: 'flex',
  flexDirection: 'column',

  '& h1': {
    marginBottom: '32px',
  },

  '& a': {
    marginTop: '16px',
    color: 'Green',
  },
})
