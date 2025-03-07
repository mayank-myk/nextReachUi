import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 100px;
    padding: 2rem;
`;

export const OverviewDetails = styled.div`
    width: 350px;
    height: 237px;
    flex-shrink: 0;
    border: 1px solid #9F9F9F;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
`

export const OverviewHeading = styled.div`
    color: var(--primary-color, #E66A44);
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 1.5rem;
    padding-bottom: 0;
`

export const OverviewPoints = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
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