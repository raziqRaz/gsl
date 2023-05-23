import styled, { css } from 'styled-components';

export const MainContainer = styled.div`
  height: 100%;
  width: auto;
  margin-top :10px;
  margin-left: ${(props) =>
    !props.active ? '20px' : '110px'};
  padding: ${(props) =>
    !props.active ? '200px' : 'calc(var(--na v-width) + 2rem)'};
  transition: 2s;
  padding-top: calc(var(--header-height) + 2rem);
  padding-right: 20px;
  @media only screen and (max-width: 768px) {
    padding: ${(props) => (props.active ? '8px' : 'auto')};
    padding-top: 50px;
  
  }
`;