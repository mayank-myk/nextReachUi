import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 988px;
    height: 155px;
    flex-shrink: 0;
    border-radius: 12px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    flex; 1 2 1;
    justify-content: space-between;
    align-items: space-around;;
`;

export const Left = styled.div`
    display: flex;
    gap: 30px;
`

export const InfluencerImageContainer = styled.img.attrs((props)=>({
    src: props.src,
}))`
    width: 164px;
    height: 156px;
    border-radius: 12px;
`

export const InfluencerInfo= styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const CampaignState = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 12px;
    border: 1px solid #E66A44;
    display: flex;
    width: 174px;
    height: 35px;
    justify-content: center;
    align-items: center;
    gap: 8px;
`
export const InfluencerCategory= styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    gap: 5px;
    align-items: center;
`


export const InfluencerDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
`

export const InfluencerUsername = styled.div`
    color: #000;

    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const CheckDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;  
    padding-right: 2rem;
`

export const CheckDetailsContainer = styled.div`
    width: 124px;
    height: 80px;
    flex-shrink: 0;
    border-radius: 12px;
    background: var(--primary-color, #E66A44);
    color: #FFF;

    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const StartedOn = styled.div`
color: #000;

font-family: "Avenir Next LT Pro";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;

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
    background: rgba(230, 106, 68, 0.00);
    padding: 0.6rem 3rem;
    

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
    padding: 8px 16px;
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
`
