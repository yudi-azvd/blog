import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
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
  line-height: 1.5;

  @media (min-width: 650px) {
    & {
      max-width: calc(800px - (30px * 2));
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

  li > p {
    margin-top: 16px;
  }

  li + li {
    margin-top: 0.25em;
  }

  code {
    background: var(--color-canvas-subtle);
    border-radius: 6px;
    font-size: 95%;
    padding: 0px 0.4em;
  }

  pre {
    background: var(--color-canvas-subtle);
    overflow: auto;
    padding: 16px;
    border-radius: 6px;
    font-size: 12px;
    margin-top: 0;
    margin-bottom: 16px;
  }

  kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace;
    line-height: 10px;
    color: var(--color-fg-default);
    vertical-align: middle;
    background-color: var(--color-canvas-subtle);
    border: solid 1px var(--color-neutral-muted);
    border-bottom-color: var(--color-neutral-muted);
    border-radius: 6px;
    box-shadow: inset 0 -1px 0 var(--color-neutral-muted);
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
    color: var(--color-fg-muted);
    border-left: 0.25em solid var(--color-border-default);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    line-height: 1.25;
  }
`

export const PostDetails = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  color: var(--color-fg-muted);
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
      // não sei pq. Tem alguma coisa a ver com a time {margin-right: 4px?

      @media (min-width: 650px) {
        & {
          top: 4%;
        }
      }

      width: 1px;
      height: 1em;
      background: var(--color-fg-muted);
      color: var(--color-fg-muted);
    }
  }
`
