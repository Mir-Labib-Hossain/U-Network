import React from "react";
// import { useAppDispatch } from "../../redux/app/hooks";
// import { removeSession } from "../../redux/features/authSlice";
import { Div, Icon, Paragraph } from "../../styles/common.styled";
import { Container } from "./styled";

const NavBlockLogOut: React.FC = () => {
  //   const navigate = useNavigate();
  //   const dispatch = useAppDispatch();

  //   const logout = () => {
  //     dispatch(removeSession());
  //     navigate("/login");
  //   };

  return (
    // <Container onClick={logout}>
    <Container>
      <Div>
        <Icon className="fa-solid fa-arrow-right-from-bracket"></Icon>
        <Paragraph>Log-out</Paragraph>
      </Div>
    </Container>
  );
};
export default NavBlockLogOut;
