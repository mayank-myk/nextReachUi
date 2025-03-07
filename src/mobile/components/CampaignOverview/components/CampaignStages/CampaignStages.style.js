import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background: #FFF9F9;
    padding: 1rem;
    flex-direction: column;
    gap: 18px;
    width: 90%;
`;

export const Left = styled.div`
`

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Header = styled.div`
    color: var(--primary-color, #E66A44);
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const StartDate = styled.div`
  display: flex;
  gap: 8px;
`

export const DateTitle = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`


export const PostInsightsViews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  // flex-wrap: wrap;
`

export const FirstRow = styled.div`
  display: flex;
  gap: 8px;
`;


export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  // width: 150%;
  // justify-content: center;
  // align-items: center;
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
   width: 91px;
    // height: 66px;
`

export const PostInsightsTitle = styled.div`
  color: #000;

  font-family: "Avenir Next LT Pro";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 140.8% */
`

export const PostInsightsVal = styled.div`
  color: var(--primary-color, #E66A44);
  font-family: "Avenir Next LT Pro";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 140.8% */

`

export const DisableDate =  styled.div`
  color: var(--primary-color, #E66A44);
  font-family: "Avenir Next LT Pro";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 28.16px; /* 176% */
`

export const DateValue = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const PostLinkContainer = styled.div`
  display: flex;
  gap: 8px;
`

export const AmountContainer = styled.div`
  display: flex;
  width: 133px;
  height: 23px;
  // padding: 7px 31px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--carts-stroke-color, #9F9F9F);
  background: var(--primary-color, #E66A44);

  color: #FFF;

  font-family: "Avenir Next LT Pro";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 28.16px; /* 176% */
`


export const PaymentStatus = styled.div`
  display: flex;
  width: 133px;
  height: 23px;
  // padding: 7px 31px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  color: #FFF;

  font-family: "Avenir Next LT Pro";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 28.16px; /* 201.143% */

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
    // flex-direction:column;
    gap: 10px;
`