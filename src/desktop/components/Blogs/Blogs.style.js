import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
height: 316px;
    background-size: cover;
`;

export const BlogsContainer = styled.div`
display: flex;
flex-direction: column;
padding: 1rem 2.5rem;
`

export const TopCategoryTitle = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "LEMON MILK";
    font-size: 40px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-transform: uppercase;
    padding: 1rem 2rem;
`

export const CategoryContainer = styled.div`
    display: flex;
    padding: 1rem 2.3rem;
    gap: 2rem;
`

export const Category = styled.div`
    display: flex;
    border-radius: 12px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    padding: 0.6rem 3rem;
    background: ${props=> props.active ? '#E66A44': '#FFFFFF'};
    color: ${props=> props.active ? '#FFFFFF' : '#E66A44'};
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const Heading = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "LEMON MILK";
    font-size: 40px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`

export const BlogsList = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 1rem;
    padding-top: 2rem;
`

export const BlogContainer = styled.div`
    display: flex;
    // flex-direction: column;
    flex-wrap: wrap;
    // justify-content: space-around;
    padding: 1rem 0;
    gap: 28px;
`;

export const Container1 = styled.div`
    width: 408px;
    height: 438px;
    display: flex;
    justify-items: flex-start;
    align-items: flex-start;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.09);
    border-width: 1px;
    border: var(--carts-stroke-color, #9F9F9F);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    gap: 8px;
    background: var(--color-background, linear-gradient(180deg, rgba(230, 106, 68, 0.09) 18.74%, rgba(136, 83, 245, 0.09) 105.74%))
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
    // padding-top: 16px;
    padding: 8px 16px 0px 16px;
    height: 146px;
`

export const SuccessStorySubtitle = styled.div`
    color: var(--tertiary-color, #333);
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 0px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
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
    width: 90%;
    height: 75px;
    display: flex;
    align-items: center;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-top: 1px solid #9F9F9F;
    padding: 8px 16px;
    cursor: pointer;
`
