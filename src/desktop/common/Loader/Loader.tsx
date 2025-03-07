import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed; /* Overlay should cover the entire screen */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.7); /* Optional translucent background */
  z-index: 9999;
  backdrop-filter: blur(5px); /* This applies the blur effect */
`;

const LoaderContainer = styled.div`
  border: 4px solid #f3f3f3; /* Light grey border */
  border-top: 4px solid #3498db; /* Blue color for the spinning effect */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return (
    <Overlay>
      <LoaderContainer />
    </Overlay>
  );
};

export default Loader;
