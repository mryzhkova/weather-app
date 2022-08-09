import styled from 'styled-components';


export const StyledButton = styled.button`
  background: none;
  border: ${({ theme }) => theme.borders[0]};
  width: 120px;
  height: 40px;
  color: ${({ theme }) => theme.colors.white};
  margin: ${({ theme }) => theme.spaces[4]}px
    ${({ theme }) => theme.spaces[0]}px;
  font-weight: ${({ theme }) => theme.fontWeight[0]};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray04};
  }
`;
