import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`

export const MarkdownContent = styled.article`
  margin: 8% auto;
  width: 90%;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: normal;
    margin-bottom: 4px;
  }

  h2,
  h3 {
    margin-bottom: 16px;
    margin-top: 8px;
  }

  p,
  li {
    font-size: 1em;
    margin-bottom: 8px;
  }

  code {
    background: #ccc;
    border-radius: 4px;
    padding: 0px 4px;
  }

  pre {
    background: #ccc;
    overflow: scroll;
    padding: 8px;
    border-radius: 4px;
  }

  a {
    margin-top: 16px;
  }

  li {
    list-style: none;
  }
`

export const PostDetails = styled.div`
  color: grey;
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  time,
  small {
    font-size: 0.8em;
  }

  time {
    margin-right: 4px;
  }
`
