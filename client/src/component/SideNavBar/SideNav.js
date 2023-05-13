import {
    SidebarContainer,
    SidebarMenuContainer,
    StyledNavLink,
    LogoContainer,
    LogoOut,
  } from './SideElement';
  
  import { RiHome5Line } from "react-icons/ri"
  
  import React, { useState } from 'react';
  
  const Sidebar = (props)=> {
    var items = [
      'Home',
      'Leads',
      'Administration',
      'Aplication',
      'university',
      'Course',
      'Tickets',
      'Enquiry',
      'Website',
      'IELTS',
      'HR Managments',  
      'Accounts'
    ];
    var pages = [
      'Home',
      'Leads',
      'Administration',
      'Aplication',
      'university',
      'Course',
      'Tickets',
      'Enquiry',
      'Website',
      'IELTS',
      'HR Managments',  
      'Accounts'
    ];
    var icons = [
      'RiHome5Line',
      'bx bx-user nav_icon',
      'bx bx-message-square-detail nav_icon',
      'bx bx-user nav_icon',
      'bx bx-grid-alt nav_icon',
      'bx bx-message-square-detail nav_icon',
      'bx bx-user nav_icon',
      'bx bx-grid-alt nav_icon',
    ];
    const [isActive, setActive] = useState(null);
    const [isHover, setIsHover] = useState(true);
  
    const toggleClass = (index) => {
      setActive(index);
    };

    // const logout = () => {
    //   {
    //     navigate('/auth'),
    //       {export default

            return (
    <SidebarContainer act={isHover} onMouseEnter={()=>setIsHover(false)} onMouseLeave={()=>setIsHover(true)}>
      <SidebarMenuContainer>
        <div>
          <LogoContainer id="item" to="/">
            <i className="bx bx-layer nav_logo-icon"> GSL</i>
          </LogoContainer>

          {items.map(function (item, index) {
            var strClass = '';
            if (isActive == index) {
              console.log(index);
              strClass = 'active';
            } else {
              strClass = 'Noactive';
            }
            return (
              <StyledNavLink
                to={'/' + pages[index]}
                className={strClass}
                key={index}
                onClick={() => toggleClass(index)}
              >
               <i><RiHome5Line/></i>
               {!isHover && <span>{item}</span>}
              </StyledNavLink>
            );
          })}
        </div>
        <LogoOut to="auth" >
          <i className="bx bx-bookmark nav_icon" />
          <span>LogOut</span>
        </LogoOut>
      </SidebarMenuContainer>
    </SidebarContainer>
  );
  }
  export default Sidebar
  