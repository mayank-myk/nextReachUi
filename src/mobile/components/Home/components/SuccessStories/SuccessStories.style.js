import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem 1rem;
    background-color: #FFF9F9;
    gap: 32px;

`;

export const Title = styled.div`
    color: var(--primary-color, #E66A44);
    text-align: center;
    font-family: "LEMON MILK";
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`

export const Subtitle = styled.div`
    color: var(--tertiary-color, #333);
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Wrapper = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

`

export const Container1 = styled.div`
    width: 321px;
    height: 403px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    background: rgba(255, 255, 255, 0.09);
    border-width: 1px;
    border: var(--carts-stroke-color, #9F9F9F);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
`;

export const ImageContainer = styled.div`
    width: 389px;
    height: 380px;
    display: flex;
    justify-content: center;
    // border: 1px solid #000;
`

export const SuccessStoryTitle = styled.div`
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const SuccessStorySubtitle = styled.div`
color: var(--tertiary-color, #333);
text-align: center;
font-family: "Avenir Next LT Pro";
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const SuccessStoryTags = styled.div`
`

export const SuccessStoryTag =  styled.div`
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.09);
    padding: 0.5rem 1rem;
    color: #E66A44;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const ContinueReading = styled.div`
    border-radius: 12px;
    background: var(--primary-color, #E66A44);
    color: #fff;
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
