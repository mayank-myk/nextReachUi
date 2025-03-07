import React, { useState } from "react";
import tooltip_pointer_icon from "../../../assets/InfluencerMatric/icons/info_tooltip_icon.svg";
import styled from "styled-components";

const MobileTooltip = ({ children, text, isRight = false }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <>
      <TooltipWrapper onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
        {children}
        {isVisible && (
          <>
            <TooltipContainer
              style={{ marginLeft: isRight ? "-180px" : "-110px" }}
            >
              <TooltipText
                dangerouslySetInnerHTML={{ __html: text }}
              ></TooltipText>
            </TooltipContainer>
            <TooltipPointer src={tooltip_pointer_icon} alt="Tooltip pointer" />
          </>
        )}
      </TooltipWrapper>
    </>
  );
};

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipContainer = styled.div`
  visibility: visible;
  background-color: #333;
  text-align: center;
  position: absolute;
  z-index: 1;
  bottom: 40px; /* Position above the element */
  white-space: nowrap;
  transition: opacity 0.3s;
  width: 200px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  padding: 10px; /* Add padding inside */
`;

const TooltipText = styled.div`
  color: #333;
  text-align: center;
  font-family: "Avenir Next LT Pro";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Ensure text is horizontally centered */
  align-items: center; /* Ensure text is vertically centered */
`;

const TooltipPointer = styled.img`
  position: absolute;
  bottom: 20px; /* Moves the pointer below the tooltip box */
  left: 50%;
  transform: translateX(-50%); /* Centers the pointer */
  width: 31px;
  height: 22px;
`;

export default MobileTooltip;
