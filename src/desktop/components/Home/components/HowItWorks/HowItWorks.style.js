import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
    background: linear-gradient(180deg, rgba(230, 106, 68, 0.09) 18.74%, rgba(136, 83, 245, 0.09) 105.74%);
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    color: #E66A44;
    text-align: center;
    font-family: "LEMON MILK";
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Subtitle = styled.div`
    width: 80%;
    padding: 1rem 7rem;
    color: var(--tertiary-color, #333);
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`