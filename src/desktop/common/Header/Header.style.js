import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around; 
  background-color: ${props => props.bgColor ? props.bgColor : ""};
  align-items: center;
 `;

export const Left = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`

export const Middle = styled.div`
  display: flex;
  padding: 8px;
  gap: 1.5rem;
  color:  #333;
  font-family: "Avenir Next LT Pro";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  // flex-wrap: wrap;  
  justify-content: center;
  align-items: center;
`;

export const Right = styled.div`
  padding: 8px;
  display: flex;
  gap: 2rem;
  flex: 1;
  justify-content: center;
  cursor: pointer;
` 

export const ContactUs = styled.div`
  border: 1px solid #9F9F9F;
  border-radius: 12px;
  padding: 0.4rem 2rem;
`

export const PhoneNumber = styled.img.attrs((props)=>({
  src: props.src,
}))`
  background-color: #E66A44;
  color: #fff;
`

export const DropdownMenu = styled.ul`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 8%;
  left: 55%;
  list-style: none;
  padding: 10px 0;
  margin: 0;
  border-radius: 12px;
  border: 1px solid var(--carts-stroke-color, #9F9F9F);
  width: 328px;
  // height: 250px;
  background: #FFF;
  gap: 20px;
  padding: 16px 0 20px 32px;


//   display: flex;
// width: 328px;
// height: 250px;
// padding: 16px 126px 20px 32px;
// align-items: center;
// // flex-shrink: 0;
// border-radius: 12px;
// border: 1px solid var(--carts-stroke-color, #9F9F9F);

`;

export const DropdownItem = styled.li`
  // padding: 10px 20px;
  cursor: pointer;

  &:hover {
    // background-color: #ff6347;
  }
`;