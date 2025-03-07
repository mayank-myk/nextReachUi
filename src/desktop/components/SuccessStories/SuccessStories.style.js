
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-size: cover;
`;

export const BlogsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;
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

export const BlogsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2rem;
    padding-top: 2rem;
`

export const Container1 = styled.div`
    width: 408px;
    height: 449px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid #9F9F9F;
    box-shadow: rgba(255, 255, 255, 0.09);
    border-radius: 12px;
    background: var(--color-background, linear-gradient(180deg, rgba(230, 106, 68, 0.09) 18.74%, rgba(136, 83, 245, 0.09) 105.74%));
`;

export const ImageContainer = styled.div`
    width: 389px;
    height: 380px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    display: flex;
    gap: 0.5rem;
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
