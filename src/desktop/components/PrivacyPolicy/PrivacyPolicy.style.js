import styled from "styled-components";
import discover_header_background from "../../../assets/DiscoverPage/discover_header_background.png";

export const Heading = styled.div`
    display: flex;
    background-image: url(${discover_header_background});
    height: 224px;
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    justify-content: center;
    align-items: center;
`;

export const Contents = styled.div`
    padding: 84px;
    display: flex;
    gap: 38px;
    flex-direction: column;
    background: #FFF9F9;
`

export const Title = styled.div`
    color: var(--primary-color, #E66A44);
    font-family: "LEMON MILK";
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
`

export const EachContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;
`

export const Content = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    flex-direction: column;
    gap: 12px;
`