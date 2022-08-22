import styled, { css } from 'styled-components';


export const WeatherItemWrapper = styled.div<{ currentItem?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.spaces[5]}px;
  }
  ${({ currentItem, theme }) => currentItem && css`
    display: grid;
    grid-template-areas: 'icon day' 'icon temp';
    justify-items: center;
    ${theme.below.md`
      margin-top ${theme.spaces[4]}px;
    `}
  `}
  ${({ theme }) => theme.below.md`
    &:not(:last-child) {
      margin-right: ${theme.spaces[4]}px;
    }
  `}
  ${({ theme }) => theme.below.xs`
    &:not(:last-child) {
      margin-right: ${theme.spaces[3]}px;
    }
  `}
`;

export const StyledIcon = styled.img<{ currentItem?: boolean }>`
  width: 45px;
  margin: ${({ theme }) => theme.spaces[3]}px
    ${({ theme }) => theme.spaces[0]}px;
  ${({ currentItem }) => currentItem && css`
    grid-area: icon;
    width: 75px;
    margin: ${({ theme }) => theme.spaces[0]}px;
    margin-right: ${({ theme }) => theme.spaces[4]}px;
  `}
`;

export const StyledDay = styled.div<{ currentItem?: boolean }>`
  background-color: ${({ theme }) => theme.colors.darkGray};
  padding: ${({ theme }) => theme.spaces[1]}px
    ${({ theme }) => theme.spaces[2]}px;
  min-width: 47px;
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  font-weight: ${({ theme }) => theme.fontWeight[0]};
  border-radius: ${({ theme }) => theme.borderRadius[0]}px;
  text-align: center;
  text-transform: uppercase;
  ${({ currentItem }) => currentItem && css`
    grid-area: day;
  `}
`;

export const StyledTemp = styled.div<{ currentItem?: boolean }>`
  font-weight: ${({ theme }) => theme.fontWeight[0]};
  font-size: ${({ currentItem, theme }) => currentItem ? theme.fontSizes[6] : theme.fontSizes[3]}px;
  ${({ currentItem }) => currentItem && css`
    margin-top: ${({ theme }) => theme.spaces[3]}px;;
    grid-area: temp;
  `}
`;
