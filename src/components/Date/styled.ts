import styled from 'styled-components';


export const DayWrapper = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight[0]};
`;

export const Time = styled.span`
  word-spacing: -${({ theme }) => theme.spaces[1]}px;
  font-size: ${({ theme }) => theme.fontSizes[7]}px;
  font-weight: ${({ theme }) => theme.fontWeight[2]};
`;

export const StyledDate = styled.div`
  margin-left: ${({ theme }) => theme.spaces[1]}px;
`;
