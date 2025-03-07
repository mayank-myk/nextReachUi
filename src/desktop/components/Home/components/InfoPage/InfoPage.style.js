import styled from "styled-components";
import InfoPage_background from "../../../../../assets/InfoPage_background.png";


export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${InfoPage_background});
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, rgba(230, 106, 68, 0.09) 18.74%, rgba(136, 83, 245, 0.09) 105.74%), url(${InfoPage_background});
`;

export const FirstPart = styled.div`
    display: flex;
    flex: 2 1;
`;

export const Left = styled.div`
    padding: 3rem 3rem 0rem 3rem;
    gap: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const LeftTitle = styled.div`
    color: #E66A44;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
`

export const LeftSubTitle = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
export const ExploreBtn = styled.button`
    background-color: #E66A44;
    color: #ffffff;
    border: none;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 205px;
    height: 48px;
    border-radius: 12px;
    cursor: pointer;
`
export const Right = styled.div`
    padding: 3rem;
    width: 554px;
    // height: 514px;
`;

export const FollowersCountContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding-bottom: 1rem;
`;

export const FollowersDesc = styled.div`
    // color:  #E66A44;
    // text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 70%;
`;

export const FollowersCount = styled.div`
    color: #E66A44;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;