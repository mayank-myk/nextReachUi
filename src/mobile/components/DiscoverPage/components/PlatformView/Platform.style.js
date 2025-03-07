import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF9F9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem 1rem;

`;

export const PlatformTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // gap: 0.5rem;
`

export const Title = styled.div`
    text-align: center;
    color: var(--tertiary-color, #333);
    font-family: "LEMON MILK";
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`

export const Subtitle = styled.div`
    color: var(--tertiary-color, #333);
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: center;
    // width: 50%;
`

export const CategoryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    // gap: 50px;
    // padding: 50px 250px;
    gap: 1rem;
`

export const Category = styled.div`
    width: 93px;
    height: 89px;
    box-shadow: (0px 4px 4px rgba(0, 0, 0, 0.25));
    border: 1px solid #9F9F9F;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7px;
`

export const CategoryIcon = styled.img.attrs((props)=>({
    src: props.src,
}))`
    width: 24px;
    height: 24px;
`

export const CategoryTitle = styled.div`
    color: var(--tertiary-color, #333);
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
