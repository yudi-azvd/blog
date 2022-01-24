import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
`

// Copiei descaradamente daqui
// https://github.com/sindresorhus/github-markdown-css/blob/main/github-markdown.css
export const MarkdownContent = styled.article`
  margin: 8% auto;
  width: 90%;
  display: flex;
  flex-direction: column;

  p,
  blockquote,
  ul,
  ol,
  dl,
  table,
  pre,
  details {
    margin-top: 0;
    margin-bottom: 16px;
  }

  @media (min-width: 650px) {
    & {
      max-width: calc(800px - (30px * 2));
    }

    h2 {
      font-size: 1.5rem;
    }
  }

  h1 {
    margin-bottom: 4px;
  }

  h2,
  h3 {
    margin-bottom: 16px;
    margin-top: 8px;
  }

  p {
    font-size: 1em;
    margin-bottom: 16px;
  }

  li {
    list-style: initial;
  }

  li > p {
    margin-top: 16px;
  }

  li + li {
    margin-top: 0.25em;
  }

  ul,
  ol {
    padding: 0;
    list-style-type: none;
  }

  ol[type='1'] {
    list-style-type: decimal;
  }

  ol[type='a'] {
    list-style-type: lower-alpha;
  }

  ol[type='i'] {
    list-style-type: lower-roman;
  }

  div > ol:not([type]) {
    list-style-type: decimal;
  }

  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 2em;
  }

  ol ol,
  ul ol {
    list-style-type: lower-roman;
  }

  ul ul ol,
  ul ol ol,
  ol ul ol,
  ol ol ol {
    list-style-type: lower-alpha;
  }

  code {
    background: var(--color-code-background);
    border-radius: 6px;
    font-size: 95%;
    padding: 0px 0.4em;
  }

  code,
  pre {
    &::-webkit-scrollbar {
      height: 4px;

      @media (min-width: 650px) {
        height: 8px;
      }
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--color-code-background-complementary);
      border-radius: 10px;
    }
  }

  pre code {
    font-size: 0.9rem;
  }

  pre {
    background: var(--color-code-background);
    overflow: auto;
    padding: 16px 4px;
    border-radius: 6px;
    font-size: 12px;
    margin-top: 0;
    margin-bottom: 16px;
  }

  pre code:not(.hljs) {
    padding-left: 0;
  }

  pre {
    /* padding-left: 8px; */
  }

  a {
    margin-top: 16px;
  }

  a:last-of-type {
    margin-bottom: 32px;
  }

  ul,
  ol {
    margin-top: 0;
    margin-bottom: 16px;
    padding-left: 2em;
  }

  blockquote {
    margin: 0;
    padding: 0 1em;
    color: var(--color-muted);
    border-left: 0.25em solid var(--color-muted);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 36px;
    margin-bottom: 16px;
    line-height: 1.25;
  }

  h1 tt,
  h1 code,
  h2 tt,
  h2 code,
  h3 tt,
  h3 code,
  h4 tt,
  h4 code,
  h5 tt,
  h5 code,
  h6 tt,
  h6 code {
    padding: 0 0.2em;
    font-size: inherit;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
    display: block;
    width: max-content;
    max-width: 100%;
    overflow: auto;
  }

  td,
  th {
    padding: 0;
  }

  table th {
    font-weight: 600;
  }

  table th,
  table td {
    padding: 6px 13px;
    border: 1px solid var(--color-muted);
  }

  table tr {
    background-color: var(--color-canvas-default);
    border-top: 1px solid var(--color-border-muted);
  }

  table tr:nth-child(2n) {
    background-color: var(--color-background-complementary);
  }

  table img {
    background-color: transparent;
  }

  hr {
    box-sizing: content-box;
    overflow: hidden;
    background: transparent;
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: var(--color-background-complementary);
    border: 0;
  }

  hr::before {
    display: table;
    content: '';
  }

  hr::after {
    display: table;
    clear: both;
    content: '';
  }
`

export const PostDetails = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  color: var(--color-muted);
  margin-bottom: 16px;

  time,
  small {
    font-size: 1em;
  }

  small {
    position: relative;
    margin-left: 8px;

    &::before {
      left: -6px;
      top: 5%;
      content: '';
      position: absolute;

      @media (min-width: 650px) {
        & {
          top: 4%;
        }
      }

      width: 1px;
      height: 1em;
      background: var(--color-muted);
    }
  }
`
