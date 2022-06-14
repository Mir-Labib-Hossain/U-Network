import React from "react";
import { Link } from "react-router-dom";
import { Row } from "../../styles/common.styled";
import NavBlock from "../NavBlock";
import NavBlockLogOut from "../NavBlockLogOut";
import { NavContainer, NavIcon } from "./styled";
const Navbar: React.FC = () => {
  return (
    <NavContainer>
      <Row justifyContent="space-between">
        <Link to="/">
          <NavIcon />
        </Link>
        <NavBlock iconClass="fa-solid fa-cubes" title="Dashboard" to="/" />
        <NavBlock iconClass="fa-solid fa-users" title="Users" to="/users" />
        <NavBlock iconClass="fa-solid fa-folder-open" title="File Manager" to="/files" />
        <NavBlock iconClass="fa-solid fa-list-ol" title="Employee List" to="/employee" />
        <NavBlock iconClass="fa-solid fa-user" title="Profile" to="/profile" />
        <NavBlock iconClass="fa-solid fa-arrow-right-to-bracket" title="Log-in" to="/login" />
        <NavBlock iconClass="fa-solid fa-shuffle" title="Random Page" to="/randomadfjjsdkf/dsfdsdf" />
        <NavBlockLogOut />
      </Row>
    </NavContainer>
  );
};
export default Navbar;
