
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1160px;
    flex-shrink: 0;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    gap: 3rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
`;

export const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: space-between;
    margin: 3rem 3rem 0 3rem;
`
export const Left = styled.div`
    display: flex;
    gap: 38px;
    justify-content: center;
    align-items: center;

`
export const Title = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const OverallRating = styled.div`
    color: var(--primary-color, #E66A44);
    font-family: "Avenir Next LT Pro";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    width: 145px;
    height: 46px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
`

export const TotalRatingCount = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const SeeMore = styled.div`
    color: var(--tertiary-color, #333);
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
    justify-content: center;
    cursor: pointer;
    // align-items: center;
`