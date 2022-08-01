import styled from 'styled-components';


export const StyledButton = styled.button`
  background: none;
  border: 1px solid #fff;
  width: 120px;
  height: 40px;
  color: #fff;
  margin: 30px 0;
  font-weight: 100;
  font-size: 0.9em;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray04};
  }
`;
