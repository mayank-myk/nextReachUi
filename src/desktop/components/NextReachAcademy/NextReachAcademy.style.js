import styled from "styled-components";
import background_img from "../../../assets/next_reach_academy_background.png";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 316px;
    background-size: cover;
    background-image: url(${background_img});
    justify-content: center;
    align-items: center;
    gap: 1rem;

`;

export const Title = styled.div`
    color: #FFF;
    font-family: "LEMON MILK";
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const SubTitle = styled.div`
    color: #FFF;
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 50%;
`

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
// export const BlogsList = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-around;
//     gap: 2rem;
//     padding-top: 2rem;
// `

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
    gap: 2rem;
    padding-top: 2rem;
`

export const BlogContainer = styled.div`
    display: flex;
    // flex-direction: column;
    flex-wrap: wrap;
    // justify-content: space-around;
    gap: 28px;
`;



export const Container1 = styled.div`
    width: 408px;
    height: 438px;
    display: flex;
    justify-items: flex-start;
    align-items: flex-start;
    flex-direction: column;
    border: 1px solidrgb(159, 159, 159);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    background: linear-gradient(180deg, rgba(230, 106, 68, 0.09) 18.74%, rgba(136, 83, 245, 0.09) 105.74%);
`;


export const ImageContainer = styled.div`
    width: 408px;
    height: 252px;
    border-radius: 12px;
`

export const SuccessStory = styled.div`
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    border-radius: 0 0 12px 12px;
    gap: 25px;
`;

export const SuccessStoryTitle = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 8px 16px 16px 8px;
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
    width: 188px;
    height: 29px;
    // padding: 8px 8px;
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
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
`
