
import styled from "styled-components";

import next_reach_academy_background from "../../../assets/next_reach_academy_background.png";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-size: cover;
    background: url(${next_reach_academy_background});
    height: 182px;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;

export const Subtitle = styled.div`
    color: #FFF;

    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 80%;
`
export const Title = styled.div`
    color: #FFF;
    font-family: "LEMON MILK";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`


export const BlogsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    background-color: #FFF7F3;
`

export const TopCategoryTitle = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "LEMON MILK";
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-transform: uppercase;
    // padding: 1rem 2rem;
`

export const CategoryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    // padding: 1rem 2.3rem;
    gap: 0.5rem;
    
`
export const CategoryTitle = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "LEMON MILK";
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-transform: uppercase;
`

export const Category = styled.div`
    display: flex;
    border-radius: 12px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    background: rgba(230, 106, 68, 0.00);
    width: 78px;
    height: 31px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-family: "Avenir Next LT Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
export const BlogsList = styled.div`
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-around;
    gap: 2rem;
`

export const Container1 = styled.div`
    width: 268px;
    height: 304px;
    display: flex;
    align-items: center;
    flex-direction: column;
    // gap: 0.5rem;
    border: 1px solid  #9F9F9F;
    border-radius: 12px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: linear-gradient(180deg, rgba(230, 106, 68, 0.09) 18.74%, rgba(136, 83, 245, 0.09) 105.74%);
`;

export const ImageContainer = styled.div`
    // width: 389px;
    height: 200px;
    display: flex;
    justify-content: center;
    // border: 1px solid #000;
    borderRadius: 12px;
`


export const SuccessStory = styled.div`
    // background-color: #ffffff;
    color: #000;
    display: flex;
    flex-direction: column;
    flex: 1;
    border-radius: 0 0 12px 12px;
    gap: 8px;
    padding-bottom: 1rem;
`;

export const SuccessStoryTitle = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 8px;
    border-bottom: 1px solid #9F9F9F;
    text-align: center;
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
`

export const SuccessStoryTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: space-around;

`

export const SuccessStoryTag =  styled.div`
    border-radius: 12px;
    border: 1px solid var(--primary-color, #E66A44);
    // padding: 8px 8px;
        width: 112px;
    height: 24px;
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
       display: flex;
    justify-content: center;
    align-items:center;
`
