import styled from 'styled-components'

export const Container = styled.nav`
  background: green;
`

export const Content = styled.div`
  height: 64px;
  font-size: 1.2rem;
  width: 90%;
  margin: 0 auto;

  ul {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
  }
`
