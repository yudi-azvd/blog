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

    a {
      font-weight: bold;
      text-decoration: underline;
      text-decoration-color: transparent;
      -webkit-text-decoration-color: transparent;
      -moz-text-decoration-color: transparent;

      transition: 0.2s;
      color: var(--color-primary);
      color: var(--color-highlight);

      &:hover {
        text-decoration-color: var(--color-primary);
        -webkit-text-decoration-color: var(--color-primary);
        -moz-text-decoration-color: var(--color-primary);
      }
    }
  }
`

export const PostMeta = styled.div`
  color: var(--color-muted);
  display: block;

  p,
  time,
  span {
    transition: color 0.2s;
  }

  // Quando PostItem tiver :hover, faça PostMeta ter os estilos:
  ${PostItem}:hover & {
    p,
    span,
    time {
      color: var(--color-muted-highlight);
    }
  }

  p {
    margin-bottom: 4px;
    color: var(--color-muted);
  }

  span {
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
      background: var(--color-muted);
    }
  }
`
