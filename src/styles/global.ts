import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 16px;
    --color-fg-default: #24292f;
    --color-fg-muted: #57606a;
    --color-fg-subtle: #6e7781;
    --color-canvas-default: #ffffff;
    --color-canvas-subtle: #f6f8fa;
    --color-border-default: #d0d7de;
    --color-border-muted: hsla(210,18%,87%,1);
    --color-neutral-muted: rgba(175,184,193,0.2);
    --color-accent-fg: #0969da;
    --color-accent-emphasis: #0969da;
    --color-danger-fg: #cf222e;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0
  }

  body {
    background: #fff;
    color: #222;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Roboto, sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: bold;
  }

  h1 {
    font-size: 2.25rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1rem;
  }

  button {
    cursor: pointer
  }

  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`
