import styled from "styled-components";
import { Col2 } from "../../styles/common.styled";
export const Description = styled(Col2)`
  display: flex;
  justify-content: center;
`;

export const Bg = styled(Col2)<{ height: string; bg: string }>`
  background-image: url(${({ bg }) => bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: ${({ height }) => height};
`;

export const UniversityIcon = styled.img`
  height: 150px;
  width: 150px;
  margin: 20px;
  filter: grayscale(100%);

  :hover {
    filter: grayscale(0);
  }
`;
