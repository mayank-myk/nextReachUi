import styled from "styled-components";


export const Rating = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    // padding: 1rem;
    flex-direction: column;
    gap: 8px;
    `

export const RatingTitle = styled.div`
    color: var(--primary-color, #E66A44);
    font-family: "Avenir Next LT Pro";
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const RatingStar = styled.div`
display: flex;
gap: 1rem;
`

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
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    background: #FFF;
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    font-style: normal;
    line-height: 28.16px; /* 176% */
    background-color: ${props=> props.disabled ? "#E9E9E9" : "#fff"}
`

export const SubmitButton = styled.div`
    width: 278px;
    height: 51px;
    flex-shrink: 0;
    border-radius: 8px;
    background: ${props=> props.state ? "#E66A44": "#9F9F9F"};
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