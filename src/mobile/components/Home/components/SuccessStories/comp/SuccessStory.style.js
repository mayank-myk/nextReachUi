

import styled from "styled-components";

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
