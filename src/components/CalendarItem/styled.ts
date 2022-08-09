import styled from 'styled-components';


export const StyledCalendarItem = styled.div`
  display: flex;
  position: relative;
  font-weight: ${({ theme }) => theme.fontWeight[1]};
  margin-bottom: ${({ theme }) => theme.spaces[3]}px;
  &:not(:last-child)::after {
    content: '';
    height: 25px;
    width: 1px;
    background-color: ${({ theme }) => theme.colors.gray};
    position: absolute;
    display: block;
    top: 20px;
    left: 27px;
    ${({ theme }) => theme.below.md`
      height: 35px;
    `}
  } 
  ${({ theme }) => theme.below.md`
    margin-bottom: ${theme.spaces[4]};
  `}
`;

export const StyledCalendarTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spaces[1]}px;
  background-color: ${({ theme }) => theme.colors.gray};
  margin-right: ${({ theme }) => theme.spaces[3]}px;
  width: 55px;
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  border-radius: ${({ theme }) => theme.borderRadius[0]}px;
`;

export const StyledCalendarText = styled.div`
  text-overflow: ellipsis;
  max-width: 300px;
  ${({ theme }) => theme.below.md`
    text-align: left;
  `}
`;
