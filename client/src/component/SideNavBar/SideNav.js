import React, { useState } from "react";
import {Avatar} from '@mui/material'
import {
  SidebarContainer,
  SidebarMenuContainer,
  StyledNavLink,
  LogoContainer,
  LogoOut,
} from "./SideElement";

import { RiHome5Line } from "react-icons/ri";
import { BiFile,BiMessageAltError } from "react-icons/bi";
import { MdPeopleOutline } from "react-icons/md";
import { TbFileHorizontal } from "react-icons/tb";
import { SlGraduation } from "react-icons/sl";
import { HiOutlineBookOpen } from "react-icons/hi";
import { IoTicketOutline } from "react-icons/io5";
import { BsLink45Deg,BsFileEarmarkCheck } from "react-icons/bs";
import { AiOutlineUser,AiOutlineBarChart } from "react-icons/ai";
import { FiSettings} from "react-icons/fi";



const Sidebar = ({mouseOnEnter,mouseOnLeave,isHover}) => {
  var items = [
    "Home",
    "Leads",
    "Administration",
    "Aplication",
    "university",
    "Course",
    "Tickets",
    "Enquiry",
    "Website",
    "IELTS",
    "HR Managments",
    "Accounts",
    "Setting"
  ];
  var pages = [
    "Home",
    "Leads",
    "Administration",
    "Aplication",
    "university",
    "Course",
    "Tickets",
    "Enquiry",
    "Website",
    "IELTS",
    "HR Managments",
    "Accounts",
    "Setting"
  ];
  // var icons = [
  //   "RiHome5Line",
  //   "bx bx-user nav_icon",
  //   "bx bx-message-square-detail nav_icon",
  //   "bx bx-user nav_icon",
  //   "bx bx-grid-alt nav_icon",
  //   "bx bx-message-square-detail nav_icon",
  //   "bx bx-user nav_icon",
  //   "bx bx-grid-alt nav_icon",
  // ];
  const [isActive, setActive] = useState(null);

  const toggleClass = (index) => {
    setActive(index);
  };

  

  return (
    <SidebarContainer
      act={isHover}
      onMouseEnter={mouseOnEnter }
      onMouseLeave={mouseOnLeave}
    >
      <SidebarMenuContainer>
        <div>
          <LogoContainer id="item" to="/">
            <i className="bx bx-layer nav_logo-icon"> GSL</i>
          </LogoContainer>

          {items.map(function (item, index) {
            var strClass = "";
            if (isActive == index) {
              console.log(index);
              strClass = "active";
            } else {
              strClass = "Noactive";
            }
            return (
              <StyledNavLink
                to={"/" + pages[index]}
                className={strClass}
                key={index}
                onClick={() => toggleClass(index)}
              >
                {index === 0 && (
                  <i>
                    <RiHome5Line />
                  </i>
                )}
                {index === 1 && (
                  <i>
                    <BiFile />
                  </i>
                )}
                {index === 2 && (
                  <i>
                    <MdPeopleOutline />
                  </i>
                )}
                {index === 3 && (
                  <i>
                    <TbFileHorizontal />
                  </i>
                )}
                {index === 4 && (
                  <i>
                    <SlGraduation />
                  </i>
                )}
                {index === 5 && (
                  <i>
                    <HiOutlineBookOpen />
                  </i>
                )}
                {index === 6 && (
                  <i>
                    <IoTicketOutline />
                  </i>
                )}
                {index === 7 && (
                  <i>
                    <BiMessageAltError />
                  </i>
                )}
                {index === 8 && (
                  <i>
                    <BsLink45Deg />
                  </i>
                )}
                {index === 9 && (
                  <i>
                    <BsFileEarmarkCheck />
                  </i>
                )}
                {index === 10 && (
                  <i>
                    <AiOutlineUser />
                  </i>
                )}
                {index === 11 && (
                  <i>
                    <AiOutlineBarChart />
                  </i>
                )}

                 {index === 12 && (
                  <i>
                    <FiSettings />
                  </i>
                )}
                {!isHover && <span>{item}</span>}
              </StyledNavLink>
            );
          })}
        </div>
        <LogoOut to="auth">
          <i className="bx bx-bookmark nav_icon" />
          <Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 56, height: 56 }}
/>
        </LogoOut>
      </SidebarMenuContainer>
    </SidebarContainer>
  );
};
export default Sidebar;
