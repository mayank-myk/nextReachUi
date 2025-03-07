import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between; 
    background-color: ${props => props.bgColor ? props.bgColor : ""};
    align-items: center;
    padding: 0.5rem 1rem;
`;

// export const MenuItemsContainer = styled.div`
//     width: 359px;
// height: 604px;
// flex-shrink: 0;
// z-index: 1000;
// `

export const HamburgerIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 20px;
  
  div {
    width: 30px;
    height: 4px;
    background-color: #333;
    border-radius: 2px;
  }
`;

export const OverlayMenu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #FFF;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-in-out;
    z-index: 999;
    display: flex;
    flex-direction: column;
    // margin: 1rem;
`;

export const CloseButton = styled.button`
  // position: absolute;
  // top: 20px;
  // right: 20px;
  font-size: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const MenuItems = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const MenuItem = styled.li`
  color: var(--tertiary-color, #333);
  font-family: "Avenir Next LT Pro";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.165px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  align-items: center;
`;


export const OverlayHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  padding: 0 0 1rem 0;
  border-bottom: 1px solid #9F9F9F;
`

export const MenuOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--carts-stroke-color, #9F9F9F);
  background: #FFF;
  gap: 0.5rem;
  padding: 1rem 0 1rem 1rem;
  top:-2%;
  position: relative;

`

export const MenuOption = styled.div`

`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  // margin-top: 3rem;
  // justify-content: space-around;

`

export const ContactUsBtn = styled.div`
  width: 149px;
  height: 36px;
  display: flex;
  // padding: 6px 23px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--carts-stroke-color, #9F9F9F);
  color: #000;

font-family: "Avenir Next LT Pro";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.165px;

`

export const CallNowBtn = styled.div`
  display: flex;
  width: 149px;
  height: 36px;
  // padding: 10px 32px 8px 33px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--carts-stroke-color, #9F9F9F);
  background: var(--primary-color, #E66A44);
  color: #FFF;
  font-family: "Avenir Next LT Pro";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.165px;
  gap: 7px;
`