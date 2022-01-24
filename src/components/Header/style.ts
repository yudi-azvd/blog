import styled from 'styled-components'

export const Container = styled.nav`
  background: transparent;
  color: var(--color-primary);
  height: 90px;
  width: 100vw;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;
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
      color: var(--color-highlight);
      font-weight: 600;
      text-decoration: none;
    }
  }

  @media (min-width: 650px) {
    & {
      max-width: calc(800px - (30px * 2));
    }
  }
`
