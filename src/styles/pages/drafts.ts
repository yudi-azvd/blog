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

  li + li {
    margin-top: 8px;
  }
`
