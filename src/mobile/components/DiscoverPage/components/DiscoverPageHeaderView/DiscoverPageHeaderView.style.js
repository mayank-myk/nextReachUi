import styled from "styled-components";
import discover_header_background from "../../../../../assets/DiscoverPage/discover_header_background.png";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    background-image: url(${discover_header_background});
    padding: 2rem 1rem;
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const Right = styled.img.attrs((props)=>({
    src: props.src,
}))`
width: 96px;
height: 70px;
`

export const Title = styled.div`
    color: #000;
    color: var(--primary-color, #E66A44);
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 125% */
    
`

export const Subtitle = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
