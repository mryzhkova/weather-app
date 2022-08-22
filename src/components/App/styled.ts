import styled from 'styled-components';

import { getImages } from '@/helpers/weatherHelpers';


export const AppWrapper = styled.div<{ weatherDesc: string }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${({ weatherDesc }) => getImages(weatherDesc).image});
  background-repeat: no-repeat;
  background-size: cover;
  width: 1000px;
  height: 600px;
  box-shadow: ${({ theme }) => theme.boxShadows[0]};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.below.md`
    width: auto;
    height: auto;
    position: static;
    display: block;
  `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spaces[5]}px;
  padding-bottom: ${({ theme }) => theme.spaces[0]}px;;
  ${({ theme }) => theme.below.md`
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  `}
`;

export const CalendarWrappper = styled.div`
  ${({ theme }) => theme.below.md`
    text-align: center;
  `}
`;

export const StyledMenu = styled.div``;
