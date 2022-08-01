import styled from 'styled-components';

export const StyledButton = styled.button`
  background: none;
  border: 1px solid #fff;
  color: inherit;
  font-weight: 100;
  text-align: center;
  margin-top: 10px;
  height: 30px;
  padding: 6px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray04};
  }
`;

export const StyledInput = styled.input`
  height: 30px;
  padding: 6px;
  background: none;
  border: 1px solid #fff;
  color: inherit;
  font-weight: 100;
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
    margin-bottom: 30px;
  `}
`;
