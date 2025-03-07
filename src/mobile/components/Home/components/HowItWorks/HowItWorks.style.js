import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    // padding: 4rem 1rem;
    background: linear-gradient(180deg, rgba(230, 106, 68, 0.09) 18.74%, rgba(136, 83, 245, 0.09) 105.74%);
    gap: 1.5rem;
`;

export const TitleContainer = styled.div`
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content:center;
    padding: 0 2rem;
    gap: 1rem;
`

export const Title = styled.div`
    display: flex;
    justify-content: center;
    color: var(--primary-color,#E66A44);
    // text-align: center;
    font-family: "LEMON MILK";
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    padding-top: 3rem;
`


export const Subtitle = styled.div`

    color: var(--tertiary-color, #333);
    text-align: center;
    display: flex;
    justify-content: center;
    font-family: "Avenir Next LT Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`