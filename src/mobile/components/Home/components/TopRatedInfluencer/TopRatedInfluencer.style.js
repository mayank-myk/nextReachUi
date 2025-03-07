import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF9F9;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 8px;
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

`

export const LeftTitle = styled.div`
   color: var(--tertiary-color, #333);
    // text-align: center;
    font-family: "LEMON MILK";
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 30px; /* 125% */
`

export const LeftSubTitle = styled.div`
    color: var(--tertiary-color, #333);
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 85%
`


export const SeeMore = styled.div`
    font-family: "Avenir Next LT Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 85%;
    padding-top: 1rem;
    cursor: pointer;
`

export const ExploreBtn = styled.button`
    background-color: #E66A44;
    color: #ffffff;
    border: none;
    display: flex;
    width: 110px;
    height: 30px;
    padding: 10px 56px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 8px;
background: var(--primary-color, #E66A44);
`
export const Right = styled.div`
    // padding: 2rem;
    display: flex;
    gap: 18px;
    flex-direction: column;
`
export const FirstPart = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 28px;

`;

export const Carousel = styled.div`
    display: flex;
    gap: 1rem;
    // flex-wrap: wrap;
`

export const InfluencerInfo = styled.div`
    width: 152px;
    height: 192px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 1px 1px 2px 0px rgba(0, 0, 0, 0.10);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`
export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 12px;
    padding-top: 18px;
`;

export const InfluencerDesc = styled.div`
    text-align: center;
    color: var(--tertiary-color, #333);
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    height: 73px;
    width: 143px;
    display: flex;
    align-items: center;
`