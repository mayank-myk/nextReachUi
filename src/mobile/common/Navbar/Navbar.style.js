import styled from "styled-components";
// import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
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
