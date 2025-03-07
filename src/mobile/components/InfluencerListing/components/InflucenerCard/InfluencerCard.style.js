import styled from "styled-components";

export const Container = styled.div`
    width: 163px;
    height: 325px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid #D9D9D9;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    // justify-content: space-around;
    margin: 0.5rem 0;
`;

export const InfluencerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 0.7rem;
`;


export const InstaUsername = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const InfluencerDetails = styled.div`
    display: flex;
    flex-direction: column;
    // gap: 0.8rem;

`
export const InfluencerCategory= styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 12px;
    display: flex;
    // justify-content: center;
    align-items: center;
    gap: 5px;
`

export const InfluencerFollowers= styled.div`
    display: flex;
    gap: 0.5rem;
    color: #000;

text-align: center;
font-family: "Avenir Next LT Pro";
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;

`

export const ViewProfileContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: ${props=> props.isSingleNiche ? "0.6rem" : "0rem"}
`

export const ViewProfileButton = styled.div`
    display: flex;
    padding: 7px 19px 7px 20px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    color: #fff;
    border-radius: 12px;
    background: #E66A44;
    color: #FFF;
    text-align: center;
    font-family: "Avenir Next LT Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`