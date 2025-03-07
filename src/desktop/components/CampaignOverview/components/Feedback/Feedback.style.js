import styled from "styled-components";


export const Feedback = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
`

export const TextArea = styled.textarea`
    display: flex;
    width: 630px;
    height: 165px;
    align-items: center;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    background: #FFF;
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.16px; /* 176% */
`

export const SubmitButton = styled.div`
    width: 278px;
    height: 51px;
    flex-shrink: 0;
    border-radius: 8px;
    background: ${({state})=>{
        switch(state){
            case "active":
                return "#E66A44";
            case "disabled":
                return "#9F9F9F";
            default: 
                return "#9F9F9F"
        }
    }};
    color: #FFF;
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 22.53px; /* 70.406% */
    display: flex;
    justify-content: center;
    align-items: center;

`