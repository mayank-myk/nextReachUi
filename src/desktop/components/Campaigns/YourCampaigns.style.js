import styled from "styled-components";
import your_campaign_background from "../../../assets/your_campaign_background_desktop.png";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-size: cover;
    justify-content: center;
    align-items: center;
    background-color: #FFF9F9;
    padding-bottom : 2rem
`;

export const YourCampaignsView = styled.div`
    width: 1080px;
    height: 257px;
    background-image: url(${your_campaign_background});
    background-size: cover;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
`;

export const Text =  styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 3rem;
`

export const Header = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-around;
    margin-top: 2rem;   
    border-bottom: 1px solid #E9E9E9;
`

export const Title = styled.div`
    color: #000;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.24px;
    padding-bottom: 1rem;
    cursor: pointer;
`

export const YourCampaignsTitle = styled.div`
    color: var(--primary-color, #E66A44);
    font-family: "Noto Sans Hebrew";
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    left: 10%;
    position: relative;
    text-transform: uppercase;
`;

export const YourCampaignsDescription = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    left: 10%;
    position: relative;
    width: 50%;
`

export const CampaignContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-top: 1.5rem;
`

export const LogoutContainer = styled.div`
    display: flex;
    width: 600px;
    height: 95px;
    margin-top: 3rem;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;

`

export const LogoutBtn = styled.button`
    border-radius: 8px;
    background: var(--primary-color, #E66A44);
    width: 161px;
    display: flex;
    height: 52px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    color: #FFF;
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28.16px; /* 117.333% */
    border: none;
    top:25%;
    position:relative;
`