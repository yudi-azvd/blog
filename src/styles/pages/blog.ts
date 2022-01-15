import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  max-width: 100%;
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

  @media (min-width: 650px) {
    & {
      max-width: calc(800px - (30px * 2));
    }
  }
`

export const PostItem = styled.li`
  margin-bottom: 32px;

  h2 {
    margin-bottom: 4px;
  }

  p {
    margin-bottom: 4px;
  }
`

export const PostMeta = styled.div`
  color: var(--color-fg-muted);
  display: block;

  time,
  small {
    font-size: 0.8em;
  }

  small {
    margin-left: 8px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      // não sei pq. Tem alguma coisa a ver com a time {margin-right: 4px?
      left: -6px;
      top: 5%;
      width: 1px;
      height: 1em;
      background: var(--color-fg-muted);
      color: var(--color-fg-muted);
    }
  }
`
