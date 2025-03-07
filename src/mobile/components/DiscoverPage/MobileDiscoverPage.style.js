import styled from "styled-components";

export const ButtonContainer = styled.div`
    display: flex;
    // flex-wrap: wrap;
    justify-content: space-around;
    gap: 1rem;
    padding-bottom: 1rem;
    background-color: #FFF9F9;
    padding: 1rem;
    max-width: 100%;  // set a fixed height or width
    overflow-y: hidden;   // enables vertical scrolling
    overflow-x: scroll; // prevents horizontal scrolling

`

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: ${props => props.active ? "#FFF" : "#000000"};
    border-radius: 8px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    background: ${props => props.active ?  "#E66A44": "#FFF"};
`

export const Text = styled.div`
    color: ${props => props.active ? "#FFF" : "#000000"};
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 135px;
    height: 30px;
    text-align: center;`