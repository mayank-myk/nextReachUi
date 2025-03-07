import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: var(--Color-background-main, #FFF9F9);
    gap: 40px;
    align-items: center;
    padding: 40px 0;
`;

export const PlatformTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

export const WhyChooseOurPlatformContainer = styled.div`
    display: flex;
    row-gap: 12px;
    flex-wrap: wrap;
    justify-content: space-around;

`



export const StepsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 21px;
    padding: 2rem 0 0 0;
`

export const StepContainer = styled.div`
    display: flex;
    width: 167px;
    // height: 204px;
    // padding: 17px 27px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    border-radius: 12px;
    border: 1px solid var(--color-greyed-boxes, #E9E9E9);
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 12px;

`

export const Top = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
export const StepTitle = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "LEMON MILK";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
`

export const StepSubTitle = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px; /* 162.5% */
`

export const Title = styled.div`
   color: var(--tertiary-color, #333);
    font-family: "LEMON MILK";
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-transform: uppercase;
    width: 60%;
    text-align: center;
`
