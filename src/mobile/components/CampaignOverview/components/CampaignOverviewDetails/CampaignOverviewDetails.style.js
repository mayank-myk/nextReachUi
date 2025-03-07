import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 12px;
    padding: 1rem;
    align-items: center;
`;

export const OverviewDetails = styled.div`
    width: 159px;
    height: 173px;
    flex-shrink: 0;
    border: 1px solid #9F9F9F;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
`

export const OverviewHeading = styled.div`
    color: var(--primary-color, #E66A44);
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 1rem 1rem 0 1rem;
`

export const OverviewPoints = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const Rating = styled.div`
`

export const RatingTitle = styled.div`
    color: var(--primary-color, #E66A44);
    font-family: "Avenir Next LT Pro";
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`