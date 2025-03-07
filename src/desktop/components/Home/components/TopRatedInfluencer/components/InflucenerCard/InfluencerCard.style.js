import styled from "styled-components";

export const Container = styled.div`
    width: 205px;
    height: 360px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid #D9D9D9;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    justify-content: space-around;
`;

export const InfluencerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem 1rem;
    gap: ${props => props.isSingleNiche ? "1rem" : "0.5rem"};
`;


export const InstaUsername = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const InfluencerDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

`
export const InfluencerCategory= styled.div`
display: flex;
gap: 5px;
align-items: center;
`

export const InfluencerFollowers= styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justity-content: center
`

export const ViewProfileContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
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
    gap: 5px;
`