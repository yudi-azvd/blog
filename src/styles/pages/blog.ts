import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`

export const Content = styled.main`
  margin: 8% auto;
  width: 90%;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 32px;
  }
`

export const PostItem = styled.li`
  margin-bottom: 32px;
  list-style: none;

  h2 {
    margin-bottom: 4px;
  }

  p {
    margin-bottom: 4px;
  }
`

export const PostMeta = styled.div`
  color: grey;
  display: flex;
  align-items: center;

  time,
  small {
    font-size: 0.8em;
  }

  time {
    margin-right: 4px;
  }
`
