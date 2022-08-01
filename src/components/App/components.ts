import styled from 'styled-components';

import { getImages } from '@/helpers';


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
    margin: 30px auto;
  `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 70px;
  padding-bottom: 0;
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
