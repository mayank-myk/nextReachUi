import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: #FFF9F9;
    justify-content: center;
    align-items: center;
    // gap: 10rem;
    padding: 40px;
`;

export const FirstPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    gap: 1rem;
`

export const WhyChooseUsTitle = styled.div`
    color: #333;
    font-family: "LEMON MILK";
    font-size: 48px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`;

export const WhyChooseUsSubtitle = styled.div`
    color:  #333;
    // text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const DiscoverNowBtn = styled.div`
    width: 204.137px;
    height: 51.973px;
    flex-shrink: 0;
    border-radius: 12px;
    background: var(--primary-color, #E66A44);
    color: #FFF;

    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content:center;
    cursor: pointer;
`

export const StepsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 21px;
    padding: 2rem 0 0 0;
`

export const StepContainer = styled.div`
    border-radius: 12px;
    border: 1px solid var(--color-greyed-boxes, #E9E9E9);
    background: var(--Color-background-main, #FFF9F9);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    width: 365px;
    height: 185px;
    padding: 17px 27px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    flex-shrink: 0;

`

export const Title = styled.div`
   color: var(--tertiary-color, #333);
    text-align: center;
    font-family: "LEMON MILK";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Subtitle = styled.div`
    // display: flex;
    // justify-content: center;
    // align-items: center;
    width: 100%;
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
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
    width: 35rem;
    border-radius: 12px;
    border: 1px solid #000;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    padding: 1rem 0.2rem;
    flex-direction: column;
    gap: 1rem;
`;

export const ImageContainer = styled.div`
    width: 389px;
    height: 380px;
    // border: 1px solid #000;
`

export const SuccessStoryTitle = styled.div`
    color: #000; 
    font-family: "Avenir Next LT Pro"; 
    font-size: 32px;
    font-style: normal; 
    font-weight: 700; 
    line-height: normal;
`

export const SuccessStorySubtitle = styled.div`
    color: var(--tertiary-color, #333);
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const SuccessStoryTags = styled.div`
`

export const SuccessStoryTag =  styled.div`
    border-radius: 12px;
    background: var(--primary-color, #E66A44);
    padding: 0.5rem 1rem;
    color: #ffffff;
`
