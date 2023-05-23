import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  width: ${(props) => (props.act ? '0px' : '58px')};
  padding: ${(props) => (props.act ? '0px' : '1rem 1rem 0 0')};

  height: 100vh;
  background-color: var(--first-color);
  transition: 0.5s;
  z-index: var(--z-fixed);

  @media only screen and (min-width: 280px) {
    padding: 1rem 1rem 0 0;
    background-color: #141E3C;
    margin-left: 0px;
    width: ${(props) => (!props.act ? 'auto' : '73px')};
  }
`;
// @media only screen and (max-width: 375px) {
//   padding: 1rem 1rem 0 0;
//   background-color: #141E3C;
//   margin-left: 0px;
//   width: ${(props) => (!props.act ? '100px' : '80px')};
// }

export const SidebarMenuContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
}
`;

export const StyledNavLink = styled(Link)`
display: grid;
grid-template-columns: max-content max-content;
column-gap: 1rem;
padding: 1rem 0 0.5rem 1.5rem;
margin-top: 1rem;
text-decoration: none;
border-color: white;
i {
  margin-top:-150px
  font-size: .1rem;
  margin-left:7px;
  color: #999fb5;
}

span {
  color: #606781;
  font-weight: 400;
  font-size: 1.0rem;
}
&:hover {
  opacity: 100%;
}
  &:hover {
    text-decoration: underline;
  }
 &[aria-current] {
    color: red;
  }
  
`;
// border-style: ${(props) => (!props.act ? 'solid' : 'none')};
export const LogoContainer = styled(StyledNavLink)`
  opacity: 100%;
  text-decoration: none;
  padding-bottom: 2rem;
  backgroun-color:#fff !important;
  margin: -7px;
  margin-left: 0px;
  i:hover {
    margin-left: -7px;
    transition: 0.1s;
    font-size: 2rem;
  }
  i {
    font-size: 2rem;
    margin-left: -15px;
  }
  img {
    width:60px;
    height:auto;
    background-color: white;
    border-radius: 76px;
  }

`;

export const LogoOut = styled(StyledNavLink)`
  padding-top: 10%;
  text-decoration: none;
  border-style: none;
  padding-bottom: 2rem;
  margin-left: -25px;
`;