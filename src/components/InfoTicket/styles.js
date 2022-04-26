import styled from 'styled-components'

export const Container = styled.section`
  width: calc(100% - 2% - 600px);
  height: 100%;
  margin-left: 2%;
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.shadow};
  border: none;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.white};
`