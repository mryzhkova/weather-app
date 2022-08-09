import styled from 'styled-components';


export const StyledButton = styled.button`
  background: none;
  border: ${({ theme }) => theme.borders[0]};
  color: inherit;
  font-weight: ${({ theme }) => theme.fontWeight[0]};
  text-align: center;
  margin-top: ${({ theme }) => theme.spaces[3]}px;
  height: 35px;
  width: 100px;
  padding: ${({ theme }) => theme.spaces[2]}px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray04};
  }
`;

export const StyledInput = styled.input`
  height: 30px;
  padding: ${({ theme }) => theme.spaces[2]}px;
  background: none;
  border: ${({ theme }) => theme.borders[0]};
  color: inherit;
  font-weight: ${({ theme }) => theme.fontWeight[0]};
  &:focus {
    background-color: ${({ theme }) => theme.colors.gray04};
  }
`;

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ${({ theme }) => theme.below.md`
    justify-content: center;
    align-items: center;
    margin-bottom: ${theme.spaces[4]}px;
  `}
`;
