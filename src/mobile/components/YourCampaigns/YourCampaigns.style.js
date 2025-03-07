import styled from "styled-components";
import your_campaign_background from "../../../assets/your_campaign_background_mobile.png";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-size: cover;
    justify-content: center;
    align-items: center;
    background: #FFF9F9;
    gap: 1rem;
`;

export const YourCampaignsView = styled.div`
    width: 100%;
    height: 216px;
    background-image: url(${your_campaign_background});
    background-size: cover;
    // border-radius: 12px;
    background-position: center center; /* Center the image */
    background-repeat: no-repeat;  /* Prevent repeating the image */
    background-size: cover; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
`;

export const Text =  styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    // margin-top: 3rem;
`

export const LoginView = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
`

export const LogoutContainer = styled.div`
    display: flex;
    width: 318px;
    height: 70px;
    // padding: 12px 95px;
    // flex-direction: center;
    justify-content:center;
    align-items: center;
    // gap: 10px;
    flex-shrink: 0;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

export const LogoutBtn = styled.button`
    display: flex;
    justify-content:center; 
    height: 45px;
    justify-content: center;
    align-items: center;
    gap: 35px;
    flex-shrink: 0;
    border: none;
    color: #FFF;

    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28.16px; /* 117.333% */
    border-radius: 8px;
    background: var(--primary-color, #E66A44);

`


export const YourCampaignsTitle = styled.div`
    color: var(--primary-color, #E66A44);
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 125% */
    text-transform: uppercase;
    padding: 0 1rem;
    width: 50%;
`;

export const YourCampaignsDescription = styled.div`
    width: 200px;
    height: 56px;
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding:  0 1rem;
`

export const DropdownContainer = styled.div`
    width:90%;
    // height: 66px;
`;

export const Select = styled.select`
    width: 100%;
    height: 33px;

    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    border-radius: 8px;
    outline: none;
    display: flex;
    gap: 8px;
    padding-left: 8px;
    background: linear-gradient(180deg, rgba(230, 106, 68, 0.09) 18.74%, rgba(136, 83, 245, 0.09) 105.74%);
`;

export const Option = styled.option`
    padding: 10px;
    display: flex;
    gap: 26px;
    font-family: "Avenir Next LT Pro";
    text-transform: capitalize;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    &:focus, &:active {
        background-color: #E66A44;
    }
    background-color: rgba(230, 106, 68, 0.09);
    color: #333;
    &:hover {
        background-color: rgba(230, 106, 68, 0.2);
    }

 &:active {
    background-color: rgba(136, 83, 245, 0.2);   
    }
`;



export const CampaignContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-bottom: 1.5rem;
    align-items: center;
    width: 100%;
`

