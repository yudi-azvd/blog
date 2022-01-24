import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 16px;
    --color-background: #1a1a1a;
    --color-background-complementary: #2e2e2e;
    --color-highlight: #fff;
    --color-primary: rgba(255, 255, 255, .84);
    --color-primary: rgba(255, 255, 255, 1);
    --color-secondary: rgba(255, 255, 255, .6);
    --color-muted: rgba(255, 255, 255, .5);
    --color-muted-highlight: rgba(255, 255, 255, .7);
    --color-code-background: #0e0e0e;
    --color-code-background-complementary: #2e2e2e;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    overflow-y: overlay;
  }

  body {
    line-height: 1.5;
    background: var(--color-background);
    color: var(--color-primary);
    -webkit-font-smoothing: antialiased;

    &::-webkit-scrollbar {
      width: 12px;
      margin-right: 4px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--color-code-background-complementary);
      border-radius: 10px;
    }
  }

  body, input, button {
    font-family: Roboto, sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: bold;
    color: var(--color-highlight);
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
    color: var(--color-secondary);
    text-decoration: underline;
    transition: 0.2s;
  }

  a:hover {
    text-decoration: underline;
    color: var(--color-highlight);
  }

  ul, li {
    list-style: none;
  }
`
