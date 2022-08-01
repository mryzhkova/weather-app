import styled from 'styled-components';


export const StyledCalendarItem = styled.div`
  display: flex;
  position: relative;
  font-weight: 300;
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
    margin-bottom: 10px;
  `}
`;

export const StyledCalendarTime = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 4px 10px;
  width: 55px;
  font-size: 0.85em;
  border-radius: 15px;
  text-align: center;
`;

export const StyledCalendarText = styled.div`
  padding: 2px;
  text-overflow: ellipsis;
  max-width: 300px;
  ${({ theme }) => theme.below.md`
    text-align: left;
  `}
`;
