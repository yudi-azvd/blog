import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box', outline: 0 },

  body: {
    background: '#fff',
    color: '#222',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, button': {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
  },

  'h1, h2, h3, h4, h5, h6, strong': {
    fontWeight: 'bold',
  },

  button: { cursor: 'pointer' },

  a: {
    color: '#0070f3',
    textDecoration: 'none',
  },

  'a:hover': {
    textDecoration: 'underline',
  },
})
