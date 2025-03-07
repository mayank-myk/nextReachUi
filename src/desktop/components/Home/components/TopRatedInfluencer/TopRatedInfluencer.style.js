import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF9F9;
    display: flex;
    flex-direction: column;
    flex: 1 1;
    justify-content: space-around;
    padding-top: 2rem;
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LeftTitle = styled.div`
    color: #333;
    font-family: "LEMON MILK";
    font-size: 48px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;

`

export const LeftSubTitle = styled.div`
    color: #333;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    // width: 435px;
`

export const SeeMore = styled.div`
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 88%;
    padding-top: 2rem;
    cursor: pointer;
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
    width: 293px;
    height: 330px;
    flex-shrink: 0;
    gap: 8px;

`
export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 12px;
    padding-top: 18px;
`;

export const InfluencerDesc = styled.div`
    text-align: center;
`