import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    background: var(--tertiary-color, #333);
    height: 454px;
    // padding: 4rem 4rem 0rem 4rem;
    flex: 1 3;
    gap: 34px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 19px;
`

export const ContactUsColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 19px;
`

export const ContactUsInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const LeftPart = styled.div`

`

export const RightPart = styled.div`
display: flex;
gap: 58px;

`

export const ContactUsTitle = styled.div`
    color: #FFF;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    // justify-content: center;

`

export const OfficeLocationContainer = styled.div`
color: #FFF;

font-family: "Avenir Next LT Pro";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 30px; /* 187.5% */
letter-spacing: 0.16px;

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
    cursor: pointer;
`

export const TitleWithIcon = styled.div`
    color: #FFF;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    gap: 5px;
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

export const Title = styled.div`
    color: #FFF;

    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    justify-content: center;
        width: 204px;
    height: 40px;
`

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

`
export const Link = styled.div`
    color: #FFF;
    width: 204px;
    height: 40px;
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;

`
export const Content = styled.div`
    color: #FFF;
width: 245px;
height: 32px;
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
    gap: 5px;
`