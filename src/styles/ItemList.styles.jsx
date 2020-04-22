import styled from 'styled-components'

export const ItemListContainer = styled.div`
  height: 100vh;
  margin: 0 3rem;
`

export const Box = styled.div`
  border: 1rem solid white;
  overflow:hidden

  }
`

export const Row = styled.div`
  height: 100%;
`
export const BoxText = styled.div`
  background-color: white;
  padding: 0.5rem;
  opacity: 0.8;
`
export const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 100ms ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`
