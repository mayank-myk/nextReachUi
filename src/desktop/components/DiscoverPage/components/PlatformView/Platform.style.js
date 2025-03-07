import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF9F9;
    display: flex;
    flex-direction: column;
    // flex: 1 1;
    width: 100%;
    height: 100%;
    background-size: cover;
    padding: 32px 0;

`;

export const PlatformTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
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
    display: flex;
    justify-content: center;
    width: 25%;
`

export const CategoryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 64px;
    // padding: 50px 250px;
    justify-content: center;
    margin-top: 4rem;
`

export const Category = styled.div`
    width: 179px;
    height: 145px;
    box-shadow: (0px 4px 4px rgba(0, 0, 0, 0.25));
    border: 1px solid #9F9F9F;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
`

export const CategoryIcon = styled.img.attrs((props)=>({
    src: props.src,
}))`
    width: 40px;
    height: 40px;
`

export const CategoryTitle = styled.div`
    color: var(--tertiary-color, #333);
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
