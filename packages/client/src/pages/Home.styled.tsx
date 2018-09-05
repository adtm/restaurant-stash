import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: 1fr;
  height: 100vh;
`;

export const Login = styled.div`
  grid-column: 2;
  grid-row: 2 / span 3;
`;

export const Map = styled.div`
  background: #32bff2;
  grid-row: 1 / span 5;
  grid-column: 4 / span 6;
`;

export const Button = styled.button`
  color: #fff;
  font-family: Rubik;
  font-size: 12px;
  text-transform: uppercase;
  background: #32bff2;
  border: none;

  margin-top: 20px;
  padding: 15px;
  width: 150px;
`;
