import styled, { css } from 'styled-components';

export const MainContainer = styled.div`
  height: 100%;
  width: 100vw;
  margin-top :10px;
  margin-left: ${(props) =>
    !props.active ? '25px' : '100px'};
  padding: ${(props) =>
    !props.active ? '200px' : 'calc(var(--na v-width) + 2rem)'};
  transition: 2s;
  padding-top: calc(var(--header-height) + 2rem);
  padding-right: 20px;
  @media only screen and (max-width: 768px) {

    padding: ${(props) => (props.active ? '78px' : '78px')};
    padding-top: 50px;
  
  }
`;