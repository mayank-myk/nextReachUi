import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF9F9;
    display: flex;
    flex: 1 1;
    justify-content: space-around;
    padding: 32px 0;
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
`

export const LeftTitle = styled.div`
    color: #333;
    font-family: "LEMON MILK";
    font-size: 48px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    width: 435px;
`

export const LeftSubTitle = styled.div`
    color: #333;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 435px;
`

export const ExploreBtn = styled.button`
    background-color: #E66A44;
    color: #ffffff;
    border: none;
    width: 146px;
    height: 48px;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 12px;
`
export const Right = styled.div`
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
`

export const InfluencerInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 213px;
    height: 174px;
    border: 1px solid #9F9F9F;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    background: var(--primary-color, #E66A44);
    box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.10);
    flex-shrink: 0;
    gap: 8px;
    cursor: pointer;
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 12px;
    padding-top: 18px;
`;

export const CityTitle = styled.div`
    color: #FFF;
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 0 16px;
`