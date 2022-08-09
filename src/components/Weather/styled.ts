import styled from 'styled-components';


export const WeatherWrapper = styled.div`
  height: 170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray09};
  padding: ${({ theme }) => theme.spaces[0]}px
    ${({ theme }) => theme.spaces[5]}px;
  ${({ theme }) => theme.below.md`
    flex-direction: column;
    height: auto;
  `}
`;

export const WeatherItemsWrapper = styled.div`
  display: flex;
  ${({ theme }) => theme.below.md`
    margin: ${theme.spaces[4]}px 0;
  `}
`;
