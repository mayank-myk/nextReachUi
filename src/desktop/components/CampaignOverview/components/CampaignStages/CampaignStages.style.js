import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  background: #FFF9F9;
  justify-content: space-around;;

`

export const Container = styled.div`
  display: flex;
  background: #FFF9F9;
  flex-direction: column;
  gap: 30px;
  justify-content: space-around;
  margin: 2rem 0;
`;

export const Left = styled.div`
display: flex;
`
export const LeftContainer = styled.div``

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 150%;
  justify-content: center;
  align-items: center;
`;

export const PostInsightsViews = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
// flex-wrap: wrap;

`
export const FirstRow = styled.div`
display: flex;
gap: 20px;
`;

export const PostInsightsContainer = styled.div`
    border-radius: 8px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    background: rgba(217, 217, 217, 0.00);
    display: flex;
    // padding: 8px 40px;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    // gap: 10px;
    width: 138px;
    height: 66px;
`

export const PostInsightsTitle = styled.div`
color: #000;

font-family: "Avenir Next LT Pro";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 28.16px; /* 140.8% */
`

export const PostInsightsVal = styled.div`
color: var(--primary-color, #E66A44);
font-family: "Avenir Next LT Pro";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 28.16px; /* 140.8% */

`
export const RightPart = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 8px;
`

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 8px;
  margin-top: 8px;
  width: 46%;
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 8px;
  justify-content: center;
  align-items:center;
`



export const Header = styled.div`
  color: var(--primary-color, #E66A44);
  font-family: "Avenir Next LT Pro";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const StartDate = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  height: 38px;
`


export const DisableDate =  styled.div`
  color: var(--primary-color, #E66A44);
  font-family: "Avenir Next LT Pro";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28.16px; /* 176% */
`

export const DateTitle = styled.div`
  color: #000;

  font-family: "Avenir Next LT Pro";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const DateValue = styled.div`
  color: #000;
  font-family: "Avenir Next LT Pro";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const PostDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 8px;
`

export const PostLinkContainer = styled.div`
  display: flex;
  // flex-direction: column;
  gap: 20px;
`

export const AmountContainer = styled.div`
  display: flex;
  width: 162px;
  height: 38px;
  // padding: 7px 31px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid var(--carts-stroke-color, #9F9F9F);
  background: var(--primary-color, #E66A44);
  color: #FFF;
  font-family: "Avenir Next LT Pro";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28.16px; /* 176% */
`


export const PaymentStatus = styled.div`
  display: flex;
  width: 250px;
  height: 38.655px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--carts-stroke-color, #9F9F9F);
  background: ${({ status }) => {
      switch (status) {
        case 'PENDING':
          return '#FCBF10';
        case 'COMPLETED':
          return "#4A920C";
        case 'FAILED':
          return '#F50505';
        case "CANCELLED":
          return "#E66A44";
        default:
          return 'grey'; // Default background for unrecognized status
      }
    }};
  color: #FFF;
  font-family: "Avenir Next LT Pro";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28.16px; /* 176% */

`

export const CampaignStage = styled.div`
  display: flex;
  gap: 5rem;
  flex: 1 3 1;
`