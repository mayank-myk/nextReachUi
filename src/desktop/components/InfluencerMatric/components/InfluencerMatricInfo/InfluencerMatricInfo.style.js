
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    // height: 2037px;
    flex-shrink: 0;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    gap: 2rem;
    border-radius: 12px;
    padding-bottom: 10rem;
`;


export const InfluencerInfoContainer = styled.div`
    display: flex;
    // justify-content: space-between;
    margin: 3rem;
    gap: 2rem;
    border-radius: 12px;
    padding: 1.5rem;
    justify-content: center;
    margin: 1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: var(--color-background, linear-gradient(180deg, rgba(230, 106, 68, 0.09) 18.74%, rgba(136, 83, 245, 0.09) 105.74%));
`

export const Left =  styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const LastUpdatedTxt = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    // gap: 2rem;
    justify-content: space-around;
    padding-bottom: 0.6rem;
    width: 100%;
`

export const FlagContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3rem;
    gap: 12px;
`
export const InfluencerUsername = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const Category = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    gap: 1rem;
`
export const InfluencerPersonalInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`

export const Location = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    gap: 1rem;
`

export const ChargeView = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

export const ChargeContainer = styled.div`
    display: flex;
    width: 200px;
    height: 56px;
    padding: 0rem 0.5rem;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
`

export const ChargeContainerLeft = styled.div`
    display: flex;
    gap: 14px;
`

export const RightContainer = styled.div`
    // right: 10%;
    // position: relative;
    // bottom: 0%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
   
`
export const RequestRaised = styled.div`
    color: #3FA500;
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

export const ContactUsContainer = styled.button`
    border-radius: 12px;
    background: #FFFFFF;
    color: #E66A44;
    border: 1px solid #333;
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 14px 40px;
    cursor: pointer;
`

export const CollaborateContainer = styled.button`
    border-radius: 12px;
    background: ${props=> props.disabled ? "#9F9F9F" :"#E66A44"};
    color: #FFF;
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 14px 40px;
    border: none;
    cursor: pointer;
`

export const OverviewLeft = styled.div`
`

export const OverviewRight = styled.div`
`

export const OverviewTitle = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const OverviewValue = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const Title = styled.div`
    color: #000;
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Price = styled.div`
    color: var(--tertiary-color, #333);
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const CategoryInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const AmountContainer= styled.div`
    display: flex;
    justify-content: space-around;
`
export const MinAmountContainer = styled.div`
    // color: var(--primary-color, #E66A44);
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    // font-weight: 700;
    line-height: normal;

`

export const MinAmountTxt = styled.div`

`
export const MinAmountVal = styled.div`
    color: var(--primary-color, #E66A44);
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
`
export const PriceCollabEstimation = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0rem 3rem 3rem 3rem;
    gap: 1.5rem;
`

export const PriceCollabEstimationTxt = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    gap: 8px;
`
export const PriceCollabIcon =  styled.div`
    display: flex;
    justify-content: center;
`

export const NextReachAIScoreContainer = styled.div`
    display: flex;
    gap: 2rem;


// height: 112px;
    margin: 0rem 3rem 3rem 3rem;
`

export const NextReachTxt= styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const CalculateNextReachAIScore = styled.div`
    color: #000;
    width: 537px;
    display: flex;
    justify-content: space-between;
    font-family: "Avenir Next LT Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 14px 19.359px 15.31px 17px;

    border-radius: 12px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    gap: 1rem;
    cursor: pointer;
`

export const AIScoreDesc =  styled.div`
    color: #000;

    font-family: "Avenir Next LT Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 1rem;
`

export const InfluencerMatricDetails = styled.div`
    padding-bottom: 2rem;

`

export const Header = styled.div`
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #E9E9E9;
    // padding-bottom : 1rem
`

export const InstagramTitle = styled.div`
    color: #000;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.24px;
    padding-bottom: 1rem;
    cursor: pointer;
`

export const ReachMatric = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    margin-top: 2rem;
`

export const ReachMatricHeader= styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    gap: 33px;
    display: flex;
    justify-content: center;
`

export const ReachMatricContainer =  styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
`

export const GraphContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8rem;
    // margin: 1rem 6rem;
`

export const EachGraphContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    width: 476px;
    height: 252px;
`

export const GraphHeader = styled.div`
    color: #000;
    display: flex;
    gap: 10px;
    align-items: center;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    // justify-content: space-around;
    gap: 1rem;
`

export const LeftGraphHeader = styled.div`

`

export const RightGraphHeader = styled.div`
    display: flex;
    gap: 1rem;
`

export const ReachMatricItem = styled.div`
    display: flex;
    width: 330px;
    height: 76px;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
`

export const ReachMatricItemLeftPart = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    width: 224px;
`

export const ReachMatricIcon = styled.div`

`

export const ReachMatricDesc = styled.div`

`

export const ReachMatricInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    top: -20%;
    // right: -5%;
    position: relative;
    cursor: pointer;

`

export const ReachMatricTitle = styled.div`
    color: #000;

    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
export const ReachMatricVal = styled.div`
    color: #000;

    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
export const SelectedMatricInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`

export const DataNotAvailable = styled.div`
    color: #9F9F9F;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    margin: 2rem 0;
`

export const SelectedMatricHeader = styled.div`
    color: #000;
    display: flex;
    gap: 23px;  

    font-family: "Avenir Next LT Pro";
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 2rem;
    cursor: pointer;
`

// Styled component for the slider
export const SliderWrapper = styled.div`
  height: 3px;
  background: linear-gradient(90deg, #f00 0%, #825b15 50%, #04ff2a 100%);
  border-radius: 5px;
  position: relative;
  // margin: 50px auto; // To center the slider on the page
`;

export const SliderInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 3px;
  background: transparent;
  border: none;
  outline: none;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  border-radius: 5px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: #e66a44;
    // border: 2px solid #000;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background-color: #e66a44;
    // border: 2px solid #000;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s;
  }
`;

// Flag image container, positioned above the slider thumb
export const FlagImage = styled.img`
  position: relative;
  top: -70px; // Adjust this value as needed
  left: ${(props) =>
    `calc(${props.thumbPosition}%)`}; // Position based on the thumb
  transform: translateX(-50%),
    flex-shrink: 0;
  fill: var(--primary-color, #e66a44);
`;

// Min and Max value display
export const ValueDisplayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;

// Value display below the thumb
export const ValueDisplay = styled.div`
  position: absolute;
  top: 18px; // Adjust the offset from the thumb
  left: ${(props) =>
    `calc(${props.thumbPosition}% - 20px)`}; // Position based on thumb's percentage
  font-size: 16px;
  color: #333;
  text-align: center;
  width: 30px;
  margin-left: 0px;
`;
