import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: space-around;
    background: var(--Color-background-main, #FFF9F9);
    padding: 52px 0rem 3.5rem 0rem;
    align-items: center;
    gap: 2rem;
`;

export const TitleContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center
`

export const Title = styled.div`
    color: var(--primary-color, #E66A44);
    text-align: center;
    font-family: "LEMON MILK";
    font-size: 48px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    width: 80%;
`

export const Description = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
export const InstagramAccountInput = styled.input`
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    color: #333;
    font-weight: 700;
    line-height: normal;
    width: 561px;
    height: 62px;
    flex-shrink: 0;
    border-radius: 12px 0px 0px 12px;
    border: 1px solid #E1DEDE;
    background: #FFF;
    padding-left: 2rem;

    &::placeholder {
        color: #969696;
        font-weight: 400;
    }
`

export const CheckButton = styled.button`
    width: 377px;
    height: 66px;
    flex-shrink: 0;
    border-radius: 12px;
    border: none;
    background: ${props => props.enabled ? "#E66A44" : "#9F9F9F"};
    color: #FFF;
    font-family: "Avenir Next LT Pro";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    left: -1%;
    position: relative;
    cursor: pointer;
`

export const Results = styled.div`
    width: 799px;
    height: 448px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid #000;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
`

export const Heading = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`

export const EngagementRateTitle = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const PercentageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 18px;
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const CountsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 37px;
    justify-content: space-between;
    align-items: space-between;
`

export const Counts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 197px;
`

export const Left = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

`

export const Right = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 0%; /* 0px */
    // display: flex;
    // justify-content: center;
`