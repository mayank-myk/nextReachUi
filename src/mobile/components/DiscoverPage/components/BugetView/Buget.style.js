import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF9F9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:2rem;
    padding: 2rem 1rem;
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    // gap: 0.5rem;
    align-items:center;
`

export const LeftTitle = styled.div`
    color: #333;
    font-family: "LEMON MILK";
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    // width: 435px;
`

export const LeftSubTitle = styled.div`
   color: var(--tertiary-color, #333);
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: center;
    width: 80%;
`

export const ExploreBtn = styled.button`
    background-color: #E66A44;
    color: #ffffff;
    border: none;
    width: 110px;
    height: 30px;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 12px;
`
export const Right = styled.div`
    // padding: 2rem;
    display: flex;
    gap: 28px;
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
    display: flex;
    flex-direction: column;
    width: 90px;
    height: 90px;
    border: 1px solid #9F9F9F;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    background: var(--primary-color, #E66A44);
    box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.10);
    flex-shrink: 0;
    gap: 8px;

`
export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 12px;
    padding-top: 18px;
    // background: url(<path-to-image>) lightgray 50% / cover no-repeat;
`;

export const CityTitle = styled.div`
    color: #FFF;
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    // padding: 0 16px;
    width: 80%;
`