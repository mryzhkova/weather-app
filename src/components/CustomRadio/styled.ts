import styled from 'styled-components';

export const RadioWrapper = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight[0]};
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  margin-bottom: ${({ theme }) => theme.spaces[4]}px;
  input:not(:first-child) {
    margin-left: ${({ theme }) => theme.spaces[2]}px;
  }
  input {
    margin-right: ${({ theme }) => theme.spaces[1]}px;
  }
`;
