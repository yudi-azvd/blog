import styled from 'styled-components'

export const Container = styled.nav`
  background: var(--color-header-bg);
  color: var(--color-header-logo);
  height: 64px;
  width: 100vw;
`

export const Content = styled.div`
  font-size: 1.2rem;
  width: 90%;
  height: 100%;
  margin: 0 auto;

  ul {
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    list-style: none;

    li + li {
      margin-left: 32px;
    }

    li a {
      color: var(--color-header-logo);
      font-weight: 600;
      text-decoration: none;
    }
  }
`
