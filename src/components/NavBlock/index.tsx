import React from "react";
import { NavLink } from "react-router-dom";
import { Icon, Paragraph } from "../../styles/common.styled";
import { Container } from "./styled";
interface NavBlockProps {
  to: string;
  iconClass: string;
  title: string;
}
const NavBlock: React.FC<NavBlockProps> = ({ iconClass, title, to }) => {
  return (
    <Container>
      <NavLink to={to} className={({ isActive }) => (isActive ? "activeLink" : "")}>
        <Icon className={iconClass}></Icon>
        <Paragraph>{title}</Paragraph>
      </NavLink>
    </Container>
  );
};
export default NavBlock;
