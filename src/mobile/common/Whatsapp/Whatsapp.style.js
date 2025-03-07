import styled from "styled-components";
// import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
  position: fixed;
  bottom: 10%;
  right: 3%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  z-index: 1000;
`;

export const NavbarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  transition: color 0.3s ease;
  justify-content: space-between;
  gap: 8px;

  // &:hover {
  //   border-top:2px solid #E66A44; 
  //   // color: #007bff;
  // }

  svg {
    font-size: 24px;
    margin-bottom: 5px;
  }
`;
