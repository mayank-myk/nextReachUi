
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 261px;
    flex-shrink: 0;
    // background-color: #FFF;
    border: 1px solid  #9F9F9F;
    gap: 8px;
    border-radius: 12px;
    padding: 0 0.5rem;
    justify-content: center;
    margin: 1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: var(--color-background, linear-gradient(180deg, rgba(230, 106, 68, 0.09) 18.74%, rgba(136, 83, 245, 0.09) 105.74%));
`;

export const InfluencerContainer = styled.div`
    display: flex;
    // flex-direction: column;
    // width: 331px;
    // height: 261px;
    flex-shrink: 0;
    // background-color: #FFF;
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    gap: 12px;
    border-radius: 12px;
`

export const Left =  styled.div`
    width: 150px;
    height: 150px;
`

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    align-items: space-between;
    justify-content: flex-end;
`

export const Top = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

`

export const Bottom  = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`
export const RequestRaised = styled.div`
    color: #3FA500;

    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

export const LastUpdatedAtTxt = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const InfluencerUsername = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const Category = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    gap: 12px;
`

export const Location = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    gap: 12px;
`

export const ChargeView = styled.div`
    display: flex;
    justify-content: space-around;
`

export const ChargeContainer = styled.div`
    display: flex;
    width: 150px;
    height: 42px;
    // padding: 0rem 0.5rem;
    align-items: center;
    // gap: 10px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    justify-content: space-around;
`

export const CollaborateContainer = styled.div`
    display: flex;
    width: 140px;
    height: 39px;
    // padding: 14px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    background: ${props=> props.disabled ? "#9F9F9F": "#E66A44"};
    color: #FFF;

    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;


`

export const OverviewLeft = styled.div`
`

export const OverviewRight = styled.div`
`

export const OverviewTitle = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const OverviewValue = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 12px;
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