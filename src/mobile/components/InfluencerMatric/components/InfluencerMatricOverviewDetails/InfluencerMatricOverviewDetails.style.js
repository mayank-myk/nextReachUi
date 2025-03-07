import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 1rem 0;
    align-items: center;
    border-top: 1px solid #9f9f9f;
    width: 100%;
`;

export const OverviewDetails = styled.div`
    // width: 159px;
    width: 50%;
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
