import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, rgba(230, 106, 68, 0.09) 18.74%, rgba(136, 83, 245, 0.09) 105.74%);
    padding: 4rem 10rem;
    gap: 46px;;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    fill: linear-gradient(180deg, rgba(230, 106, 68, 0.09) 18.74%, rgba(136, 83, 245, 0.09) 105.74%);
`;

export const Title = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "LEMON MILK";
    font-size: 48px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-transform: uppercase;
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
`

export const Description = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const LabelText = styled.label`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    gap: 2rem;
`

export const LabelVal = styled.span`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const InstagramAccountInput = styled.input`
    color: #969696;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 938px;
    height: 66px;
    border-radius: 12px;
    border: 1px solid #E1DEDE;
    padding: 0rem 2rem;
`


export const DropdownContainer = styled.div`
    width: 938px;
    // height: 66px;
`;

export const Select = styled.select`
    width: 100%;
    height: 66px;

    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    border-radius: 8px;
    outline: none;
    display: flex;
    gap: 12px;
    padding-left: 22px;
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

// export const Option = styled.li`
//   padding: 10px;
//   background: linear-gradient(180deg, rgba(230, 106, 68, 0.09) 18.74%, rgba(136, 83, 245, 0.09) 105.74%);
//   color: #333;
//   font-size: 16px;
//   cursor: pointer;
//   border-radius: 5px;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: rgba(230, 106, 68, 0.2);
//   }

//   &:active {
//     background-color: rgba(136, 83, 245, 0.2);
//   }
// `;


export const InstagramNicheSelect = styled.select`
    display: flex;
    width: 938px;
    height: 66px;
    padding: 15px 22px;
    justify-content: flex-end;
    align-items: center;
    gap: -166px;
    border-radius: 8px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    fill: linear-gradient(180deg, rgba(230, 106, 68, 0.09) 18.74%, rgba(136, 83, 245, 0.09) 105.74%);
`

export const NicheOption = styled.option`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    fill: linear-gradient(180deg, rgba(230, 106, 68, 0.09) 18.74%, rgba(136, 83, 245, 0.09) 105.74%);
`


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
    width: 938px;
    height: 365px;
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

export const CalculateEarnings = styled.button`
    width: 48%;
    height: 68px;
    flex-shrink: 0;
    border-radius: 12px;
    border: none;
    background: ${props=> props.enabled ? "#E66A44" : "#9F9F9F"};
    color: #fff;
    font-family: "Avenir Next LT Pro";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const ResultContainer = styled.div`
    display: flex;
    margin-top: 3rem;
    justify-content: space-between;
`

export const DisplayResultInput = styled.input`
    color: #333;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    width: 48%;
    height: 68px;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid #E1DEDE;
    background: #FFF;
    text-align: center;
    
    &::placeholder {
        color: #969696;
        font-weight: 400;
    }
`
export const Results = styled.div`
    width: 799px;
    height: 448px;
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