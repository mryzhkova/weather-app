import styled, { css } from 'styled-components';


export const WeatherItemWrapper = styled.div<{ currentItem?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    margin-right: 55px;
  }
  & img {
    width: 45px;
    margin: 20px 0;
  }
  ${({ currentItem }) => currentItem && css`
    display: grid;
    grid-template-areas: 'icon day' 'icon temp';
    justify-items: center;
    & img {
      grid-area: icon;
      width: 75px;
      margin: 0;
      margin-right: 30px;
    }
    ${({ theme }) => theme.below.md`
      margin-top 20px;
    `}
  `}
  ${({ theme }) => theme.below.md`
    &:not(:last-child) {
      margin-right: 20px;
    }
  `}
`;

export const StyledDay = styled.div<{ currentItem?: boolean }>`
  background-color: #282F41;
  padding: 4px 10px;
  min-width: 45px;
  font-size: 0.7em;
  font-weight: 300;
  border-radius: 15px;
  text-align: center;
  text-transform: uppercase;
  ${({ currentItem }) => currentItem && css`
    grid-area: day;
  `}
`;

export const StyledTemp = styled.div<{ currentItem?: boolean }>`
  font-weight: 100;
  font-size: ${({ currentItem }) => currentItem ? '3em' : '1.3em'};
  ${({ currentItem }) => currentItem && css`
    margin-top: 10px;
    grid-area: temp;
  `}
`;
