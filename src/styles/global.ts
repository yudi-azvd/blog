import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 16px;
    --color-fg-default: #c9d1d9;
    --color-fg-muted: #8b949e;
    --color-fg-subtle: #484f58;
    --color-canvas-default: #0d1117;
    --color-canvas-subtle: #161b22;
    --color-border-default: #30363d;
    --color-border-muted: #21262d;
    --color-neutral-muted: rgba(110,118,129,0.4);
    --color-accent-fg: #58a6ff;
    --color-accent-emphasis: #1f6feb;
    --color-danger-fg: #f85149;
    --color-header-bg: #161b22;
    --color-header-text: rgba(240, 246, 252, 0.7);
    --color-header-logo: #f0f6fc;
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0
  }

  html {
    overflow-y: overlay;
  }

  body {
    background: var(--color-canvas-default);
    color: var(--color-fg-default);
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
    color: var(--color-accent-fg);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`
