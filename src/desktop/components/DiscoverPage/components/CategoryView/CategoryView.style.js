import styled from "styled-components";
import category_background from "../../../../../assets/category_background.png";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-size: cover;
    justify-content: center;
    align-items: center;
    padding: 32px 0;
    background: #FFF9F9;
    gap: 50px;
`;


export const TitleContainer = styled.div`
`

export const Title = styled.div`
    text-align: center;
    color: var(--tertiary-color, #333);
    font-family: "LEMON MILK";
    font-size: 48px;
    font-style: normal;
    font-weight: 300;
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

export const CategoryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 33px;
    column-gap: 41px;
    width: 50%;
    justify-content: center;
    align-items: center;
`

export const Category = styled.div`
    width: 143px;
    height: 140px;
    background-image: url(${category_background});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
`

export const CategoryIcon = styled.div`
    width: 40px;
    height: 40px;
`

export const CategoryTitle = styled.div`
    color: var(--tertiary-color, #333);
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 80%;
`

export const Wrapper = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
`

export const Container1 = styled.div`
    width: 408px;
    height: 407px;
    display: flex;
    justify-items: flex-start;
    align-items: flex-start;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.09);
    border-width: 1px;
    border: var(--carts-stroke-color, #9F9F9F);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    padding: 8px 16px;
    gap: 8px;
`;

export const ImageContainer = styled.div`

`
export const SuccessStory = styled.div`
    background-color: #ffffff;
    color: #000;
    display: flex;
    flex-direction: column;
    flex: 1;
    border-radius: 0 0 12px 12px;
    gap: 32px;
`;

export const SuccessStoryTitle = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 16px;
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
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

export const SuccessStoryTag =  styled.div`
    border-radius: 12px;
    border: 1px solid var(--primary-color, #E66A44);
    padding: 8px 8px;
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const ContinueReading = styled.div`
    color: #E66A44;
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-top: 1px solid #9F9F9F;
`
