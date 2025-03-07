import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    background-color: #FFF9F9;
    gap: 32px;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0rem 10rem;
`

export const Title = styled.div`
    color:  #E66A44;
    text-align: center;
    font-family: "LEMON MILK";
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Subtitle = styled.div`
    color: var(--tertiary-color, #333);
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Wrapper = styled.div`
    // display:flex;
    // flex-wrap: wrap;
    // justify-content: center;
    // gap: 1rem;
    padding: 0rem 5rem 2rem 5rem;

`

export const SeeMore = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 91%;
    cursor: pointer;
`


export const Container1 = styled.div`
    width: 408px;
    height: 449px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    background: var(--new-color-gradient, linear-gradient(180deg, rgba(230, 106, 68, 0.09) 18.74%, rgba(136, 83, 245, 0.09) 105.74%));
    border: 1px solid #9F9F9F;
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
