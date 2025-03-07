import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, rgba(230, 106, 68, 0.09) 18.74%, rgba(136, 83, 245, 0.09) 105.74%);
    gap: 1rem;
    padding: 2rem 1rem;
`;

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;



export const DropdownMenu = styled.ul`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: relative;
  top: 10%;
//   left: 55%;
  list-style: none;
  padding: 10px 0;
  margin: 0;
  border-radius: 12px;
  border: 1px solid var(--carts-stroke-color, #9F9F9F);
width: 269px;
height: 248px;
  background: #FFF;
//   gap: 20px;
  padding: 16px 10px 20px 32px;
  gap: 10px;

background: linear-gradient(180deg, rgba(230, 106, 68, 0.09) 18.74%, rgba(136, 83, 245, 0.09) 105.74%);
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

export const DropdownItemHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const Title = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "LEMON MILK";
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`

export const Description = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Label = styled.label`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    gap: 0.5rem;
`


export const LabelVal = styled.span`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const DropdownContainer = styled.div`
    width: 269px;
    // height: 66px;
`;

export const Select = styled.select`
    width: 100%;
    height: 33px;

    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    border-radius: 8px;
    outline: none;
    display: flex;
    gap: 8px;
    padding-left: 8px;
    background: linear-gradient(180deg, rgba(230, 106, 68, 0.09) 18.74%, rgba(136, 83, 245, 0.09) 105.74%);
`;

export const Option = styled.option`
    padding: 10px;
    display: flex;
    gap: 26px;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    &:focus, &:active {
        background-color: #E66A44;
    }
    background-color: rgba(230, 106, 68, 0.09);
    color: #333;
    &:hover {
        background-color: rgba(230, 106, 68, 0.2);
    }

 &:active {
    background-color: rgba(136, 83, 245, 0.2);   
    }
`;

export const InstagramAccountInput = styled.input`
    color: #969696;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 269px;
    height: 26px;
    border-radius: 12px;
    border: 1px solid #E1DEDE;
    padding: 0rem 2rem;
`


export const ResultContainer = styled.div`
    display: flex;
    // margin-top: 3rem;
    justify-content: space-between;
`

export const DisplayResultInput = styled.textarea`
    color: #333;
    font-family: "Avenir Next LT Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    width: 45%;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid #E1DEDE;
    background: #FFF;
    text-align: center;
    height: ${props=> props.value ? "23px":""};
    padding-top: ${props=> props.value ? "11px" : ""};

    &::placeholder {
        color: #969696;
        font-weight: 400;
    }
`

export const CalculateEarnings = styled.button`

    width: 169px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 12px;
    border: none;
     background: ${props=> props.enabled ? "#E66A44" : "#9F9F9F"};
    color: #FFF;
    font-family: "Avenir Next LT Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const Results = styled.div`
     width: 169px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid #000;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
`

export const Heading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const EngagementRateTitle = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const PercentageContainer = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const CountsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 37px;
    justify-content: space-between;
    align-items: space-between;
`

export const Counts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 197px;
`

export const Left = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

`

export const Right = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 0%; 
`