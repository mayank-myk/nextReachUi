import styled from "styled-components";
import next_reach_academy_background from "../../../../../assets/next_reach_academy_background.png";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    // background-color: #FFF9F9;
    gap: 20px;
    height: 762px;
    background-image: url(${next_reach_academy_background});
    background-size: cover;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0rem 10rem;
`

export const SeeMore = styled.div`
    color: var(--tertiary-color, #fff);
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 91%;
    cursor: pointer;
`

export const Title = styled.div`
    color:  #ffffff;
    text-align: center;
    font-family: "LEMON MILK";
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const SubtitleContainer = styled.div`
    color: #ffffff;
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center
`

export const Wrapper = styled.div`
    padding: 0rem 4rem;
`

export const Container1 = styled.div`
    width: 408px;
    height: 427px;
    display: flex;
    align-items: center;
    flex-direction: column;
    // background: rgba(255, 255, 255, 0.09);
    border-width: 1px;
    border: var(--carts-stroke-color, #9F9F9F);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    background: linear-gradient(180deg, rgba(230, 106, 68, 0.09) 18.74%, rgba(136, 83, 245, 0.09) 105.74%);

`;


export const ImageContainer = styled.div`
    background-color: #ffffff;
    border-radius: 12px;

    
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
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 8px;
    border-bottom: 1px solid #9F9F9F;
    padding-bottom: 16px;
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
    justify-content: space-around;
    gap: 8px;
`

export const SuccessStoryTag =  styled.div`
    border-radius: 12px;
    border: 1px solid var(--primary-color, #E66A44);
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 188px;
    height: 29px;
    display: flex;
    justify-content: center;
    align-items:center;
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
