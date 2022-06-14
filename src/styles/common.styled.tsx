import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 100vw;
  overflow-x: hidden;
`;
export const Padded = styled.div`
  padding: 100px 200px;
  width: 100vw;

  @media screen and (max-width: 1200px) {
    padding: 100px 100px;
  }

  @media screen and (max-width: 700px) {
    padding: 100px 50px;
  }
`;

export const PaddedX = styled.div`
  padding: 30px 200px;
  width: 100vw;

  @media screen and (max-width: 1200px) {
    padding: 30px 100px;
  }

  @media screen and (max-width: 700px) {
    padding: 30px 50px;
  }
`;

export const PaddedB0 = styled.div`
  padding: 100px 200px 30px 200px;

  width: 100vw;

  @media screen and (max-width: 1200px) {
    padding: 100px 100px 30px 100px;
  }

  @media screen and (max-width: 700px) {
    padding: 100px 50px 30px 50px;
  }
`;

export const Block = styled.div<{ bg: string }>`
  background-color: ${({ bg, theme }) => (bg === "theme" ? theme.theme : bg === "red" ? theme.red : bg === "pink" ? theme.pink : bg === "green" ? theme.green : bg === "blue" ? theme.blue : theme.secondaryBg)};
  width: 100vw;
`;
interface RowProps {
  justifyContent?: string;
  alignItems?: string;
  flexDirectionColumn?: boolean;
  wrap?: boolean;
}

export const Row = styled.div<RowProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ flexDirectionColumn }) => (flexDirectionColumn ? "column" : "row")};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
  flex-wrap: wrap;
  height: 100%;
`;

export const Col4 = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;

  @media screen and (max-width: 1100px) {
    width: 50%;
  }

  @media screen and (max-width: 600px) {
    width: 100%
  }
`;

export const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media screen and (max-width: 1100px) {
    width: 100%
  }
`;

export const Col1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
`;

export const Loading = styled.div`
  height: 120px;
  width: 100px;
  margin: auto;
  background-image: url(https://cursos.civika.edu.mx/extras/imagenes/loaders/loader06.gif);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Paragraph = styled.p<{ secondary?: boolean; align?: string; color?: string }>`
  color: ${({ secondary, color, theme }) => (secondary ? theme.secondaryText : color ? color : theme.primaryText)};
  text-align: ${({ align }) => align};
  font-weight: 400;
`;

export const Spanner = styled.span<{ align?: string; width?: string }>`
  color: ${({ theme }) => theme.theme};
  text-align: ${({ align }) => align};
  width: ${({ width }) => width};
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 13px;
`;

export const Image = styled.img``;

export const Div = styled.div<{ width?: string; height?: string }>`
  ${({ height, width }) => `height:${height};width:${width};`};
`;

export const Input = styled.input`
  border: none;
  outline: none;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  img {
    height: 40px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;

export const TBody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 10px;
  background-color: ${({ theme }) => theme.secondaryBg};
`;

export const Td = styled.td`
  padding: 5px;
  font-weight: bold;
  font-size: 11.5px;
  border-top: 2px solid ${({ theme }) => theme.primaryBg};
  background-color: ${({ theme }) => theme.secondaryBg};
  i {
    cursor: pointer;
    font-size: 12px;
    :hover {
      color: gray;
    }
  }
  .fa-eye {
    color: rgb(6, 200, 0);
  }
  .fa-pen-to-square {
    color: #ffd552;
  }
  .fa-trash-can {
    color: tomato;
  }
`;

export const Bold = styled.span`
  font-weight: 600;
`;

export const Header1 = styled.h1<{ color?: string }>`
  font-size: 52px;
  color: ${({ color, theme }) => (color ? theme.theme : theme.primaryText)};
  font-weight: 400;
`;
export const Header2 = styled.h1<{ align?: string }>`
  color: ${({ theme }) => theme.primaryText};
  text-align: ${({ align }) => align};
  width: 100%;
  font-size: 35px;
  font-weight: 400;
`;
export const Header3 = styled.h1<{ align?: string }>`
  color: ${({ theme }) => theme.primaryText};
  text-align: ${({ align }) => align};
  font-size: 22px;
  font-weight: 600;
`;
export const Icon = styled.i<{ color?: string }>`
  color: ${({ color, theme }) => (color ? color : theme.theme)};
  display: grid;
  margin-right: 5px;
  place-content: center;
`;

export const Button = styled.button<{ active?: boolean }>`
  border: 2px solid ${({ theme }) => theme.theme};
  width: fit-content;
  margin: 0 auto;
  padding: 10px;
  min-width: 100px;
  min-height: 40px;
  border-radius: 35px;
  cursor: pointer;
  font-weight: bold;
  :hover {
    background-color: ${({ theme }) => theme.theme};
    color: ${({ theme }) => theme.primaryBg};
  }
`;

export const Dot = styled.span<{ ml: string }>`
  height: 13px;
  width: 13px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  margin: 4.5%;
  margin-left: ${({ ml }) => ml};
`;

export const LayeredImageContainer = styled.div<{ height: string }>`
  position: relative;
  height: ${({ height }) => height};
`;

export const LayerImage = styled.div<{ bg: string }>`
  background-image: url(${({ bg }) => bg});
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  position: absolute;
 `;

export const A = styled.a`
  
`;