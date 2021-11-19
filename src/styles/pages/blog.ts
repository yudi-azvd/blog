import { styled } from '../stitches.config'

export const Container = styled('div', {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
})

export const Content = styled('main', {
  margin: '64px',
  display: 'flex',
  flexDirection: 'column',

  '& h1': {
    marginBottom: '32px',
  },
})

export const PostItem = styled('li', {
  marginBottom: '32px',
  listStyle: 'none',

  '& h2': {
    marginBottom: '4px',
  },

  '& p': {
    marginBottom: '4px',
  },
})

export const PostMeta = styled('div', {
  color: 'GrayText',
  display: 'flex',
  alignItems: 'center',

  '& small.date': {
    marginRight: '4px',
  },
})
