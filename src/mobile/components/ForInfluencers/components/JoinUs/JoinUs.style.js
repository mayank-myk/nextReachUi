import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: var(--Color-background-main, #FFF9F9);
    gap: 15px;
    align-items: center;
    padding-bottom: 20px;
`;

export const Txt  = styled.div`
    color: #000;

    font-family: "Avenir Next LT Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
`

export const Button = styled.div`
    width: 110px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 12px;
    background: var(--primary-color, #E66A44);
    color: #FFF;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`