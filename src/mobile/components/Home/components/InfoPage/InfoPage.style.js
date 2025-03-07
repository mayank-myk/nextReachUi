import styled from "styled-components";
import InfoPage_background from "../../../../../assets/InfoPage_background.png";

export const MainContainer = styled.div`
    background-image: url(${InfoPage_background});
    background: linear-gradient(180deg, rgba(230, 106, 68, 0.09) 18.74%, rgba(136, 83, 245, 0.09) 105.74%), url(${InfoPage_background});
 `

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: center;
    padding: 2rem 0;
`;

export const FirstPart = styled.div`
    display: flex;
    justify-content: space-around;
    width: 98%;
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    width: 174px;
    height: 161px;
`

export const LeftTitle = styled.div`
    color: var(--primary-color, #E66A44);
    font-family: "Avenir Next LT Pro";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 100% */
    text-transform: capitalize;
    display: flex;
    align-items: center;
    width: 90%;
`

export const LeftSubTitle = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
export const ExploreBtn = styled.button`
    border-radius: 8px;
    background: var(--primary-color, #E66A44);
    border: none;
    display: flex;
    width: 110px;
    height: 30px;
    padding: 10px 56px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    color: #FFF;
    cursor: pointer;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
export const Right = styled.div`
    // padding: 3rem;
    // width: 554px;
    // height: 514px;
`;

export const FollowersCountContainer = styled.div`
    display: flex;
    justify-content: space-between;
    // padding-bottom: 1rem;
    gap: 10px;
    width: 90%;
`;

export const FollowersDesc = styled.div`
    font-family: "Avenir Next LT Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

`;

export const FollowersCount = styled.div`
   color: var(--primary-color, #E66A44);
    // text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;