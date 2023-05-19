import React, { useState } from "react";
import { Avatar } from "@mui/material";
import {
  SidebarContainer,
  SidebarMenuContainer,
  StyledNavLink,
  LogoContainer,
  LogoOut,
} from "./SideElement";

import { RiHome5Line } from "react-icons/ri";
import { BiFile, BiMessageAltError } from "react-icons/bi";
import { MdPeopleOutline } from "react-icons/md";
import { TbFileHorizontal } from "react-icons/tb";
import { SlGraduation } from "react-icons/sl";
import { HiOutlineBookOpen } from "react-icons/hi";
import { IoTicketOutline } from "react-icons/io5";
import { BsLink45Deg, BsFileEarmarkCheck } from "react-icons/bs";
import { AiOutlineUser, AiOutlineBarChart } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

const Sidebar = ({ mouseOnEnter, mouseOnLeave, isHover }) => {
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
    "Setting",
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
    "Setting",
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
      onMouseEnter={mouseOnEnter}
      onMouseLeave={mouseOnLeave}
    >
      <SidebarMenuContainer>
        <div>
          <LogoContainer id="item" to="/">
            <i className="bx bx-layer nav_logo-icon">
              <img src="/gsl.svg" alt="gsl" />
            </i>
          </LogoContainer>

          {items.map(function (item, index) {
            var strClass = "";
            if (isActive === index) {
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
                    <img src='/menuIcons/Frame2.svg' />
                  </i>
                )}
                {index === 1 && (
                  <i>
                   <img src='/menuIcons/lead.svg' />
                  </i>
                )}
                {index === 2 && (
                  <i>
                    <img src='/menuIcons/administration.svg' />
                  </i>
                )}
                {index === 3 && (
                  <i>
                    <img src='/menuIcons/application.svg' />
                  </i>
                )}
                {index === 4 && (
                  <i>
                   <img src='/menuIcons/university.svg' />
                  </i>
                )}
                {index === 5 && (
                  <i>
                    <img src='/menuIcons/course.svg' />
                  </i>
                )}
                {index === 6 && (
                  <i>
                    <img src='/menuIcons/tickets.svg' />
                  </i>
                )}
                {index === 7 && (
                  <i>
                    <img src='/menuIcons/enquiry.svg' />
                  </i>
                )}
                {index === 8 && (
                  <i>
                   <img src='/menuIcons/website.svg' />
                  </i>
                )}
                {index === 9 && (
                  <i>
                    <img src='/menuIcons/ielts.svg' />
                  </i>
                )}
                {index === 10 && (
                  <i>
                     <img src='/menuIcons/hr.svg' />
                  </i>
                )}
                {index === 11 && (
                  <i>
                    <img src='/menuIcons/account.svg' />
                  </i>
                )}

                {index === 12 && (
                  <i>
                     <img src='/menuIcons/setting.svg' />
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
            alt="GSL"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56 }}
          />
        </LogoOut>
      </SidebarMenuContainer>
    </SidebarContainer>
  );
};
export default Sidebar;
