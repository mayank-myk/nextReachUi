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
    border: 1px solid #9F9F9F;
    border-radius: 12px;
    width: 255px;
    height: 194px;
    flex-shrink: 0;
    cursor: pointer;
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 12px;
    padding-top: 18px;
    // background: url(<path-to-image>) lightgray 50% / cover no-repeat;
`;

export const CityTitle = styled.div`
    text-align: center;
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`