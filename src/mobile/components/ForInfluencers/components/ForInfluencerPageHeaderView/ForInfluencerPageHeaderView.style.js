import styled from "styled-components";
import discover_header_background from "../../../../../assets/DiscoverPage/discover_header_background.png";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    // height: 696px;
    background-image: url(${discover_header_background});
    // gap: 20px;
    justify-content: center;
    // padding: 20px;
`;

export const Top = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    padding: 20px;
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

export const Right = styled.img.attrs((props)=>({
    src: props.src,
}))`
width: 192.114px;
height: 143.33px;
`
export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 21px;
`
export const TextContainer = styled.div`
    color: #000;
    width: 81%;
    font-family: "Avenir Next LT Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

export const ButtonContainer =  styled.div`
    color: #FFF;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 12px;
    background: var(--primary-color, #E66A44);
    width: 110px;
    height: 30px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items:center;
    cursor: pointer;
`
export const Title = styled.div`
    color: #000;
    // width: 661px;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
`

export const Subtitle = styled.div`
    color: #000;
    // width: 617px;
    font-family: "Avenir Next LT Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
