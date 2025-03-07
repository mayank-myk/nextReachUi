import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: #FFF9F9;
    // justify-content: space-between;
    flex: 1 3;
    gap: 5rem;
    // padding: 1rem 3rem;
`;

export const Filters = styled.div`
    display: flex;
    justify-content: flex-start;
    // border: 1px solid black;
    flex-direction: column;
    gap: 2em;
`

export const InflencerListing = styled.div`
   display: flex;
    justify-content: flex-start;
    border: 1px solid black;
`

export const FirstPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // gap: 1rem;
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
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
export const StepsContainer = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 99px;
    padding: 4rem 0 0 0 ;
`

export const StepContainer = styled.div`
    border-radius: 12px;
    border: 1px solid  #9F9F9F);
    background: var(--color-background, linear-gradient(180deg, rgba(230, 106, 68, 0.09) 18.74%, rgba(136, 83, 245, 0.09) 105.74%));
    display: flex;
    width: 285px;
    height: 125px;
    padding: 15px 17px;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    align-items: center;
`

export const Title = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
`

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const FilterTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const FilterTitle = styled.div`
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
`

export const FilterOptions = styled.div`
    display: flex;
    flex-direction: column;
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
