
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 86%;
    flex-direction: column;
    flex-shrink: 0;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    gap: 1rem;
    border-radius: 12px;
    padding: 1rem;
    margin-bottom: 2rem;
`;

export const Heading = styled.div`
    display: flex;
    gap: 10px;
`
export const Left = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

`
export const Title = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const OverallRating = styled.div`
    color: var(--primary-color, #E66A44);
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 8px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 5px;
`

export const TotalRatingCount = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const SeeMore = styled.div`
    color: var(--tertiary-color, #333);
    // text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    align-items: center;
`