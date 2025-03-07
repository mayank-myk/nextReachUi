import styled from "styled-components";
import discover_header_background from "../../../../../assets/DiscoverPage/discover_header_background.png";

export const Container = styled.div`
    display: flex;
    // flex-direction: column;
    width: 100%;
    height: 291px;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    background-image: url(${discover_header_background});
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const Right = styled.img.attrs((props)=>({
    src: props.src,
}))`

`

export const Title = styled.div`
    color: #000;
    width: 542px;
    font-family: "Avenir Next LT Pro";
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
`

export const Subtitle = styled.div`
    color: #000;
    width: 617px;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
