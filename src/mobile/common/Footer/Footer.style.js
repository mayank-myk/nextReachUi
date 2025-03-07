import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: center; 
    background: var(--tertiary-color, #333);
    gap: 1rem;
    padding-bottom: 100px;
`;

export const FirstRow = styled.div`
    display: flex;
    flex-direction: column;
    // gap: 12px;
    justify-content: center;
    align-items: center;
`

export const SecondRow = styled.div`
    display: flex;
    justify-content: space-around;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const TitleWithIcon = styled.div`
    color: #FFF;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    display: flex;
    gap: 8px
`

export const Value = styled.div`
    color: #FFF;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 187.5% */
    letter-spacing: 0.16px;

`
export const ThirdRow = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const FourthRow = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
`
export const IconContainer = styled.div`
    width: 47px;
    height: 47px;
    flex-shrink: 0;
    border: 1px solid #C0C0C0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Title = styled.div`
    color: #FFF;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    // display: flex;
    // justify-content: center;
`
export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;

`
export const Link = styled.div`
    color: #FFF;
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    ']

    
    font-weight: 400;
    line-height: normal;

`
export const Content = styled.div`
    width: 90%;
    text-align: center;
    color: #FFF;
    font-family: "Avenir Next LT Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    flex-wrap: wrap;
`

export const Heading = styled.div`
    color: #FFF;

    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
export const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: space-between;
`