import styled from "styled-components";
import background_img from "../../../../../assets/DiscoverPage/discover_header_background.png";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex: 1 1;
    padding: 2rem;
    background: url(${background_img});
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    width: 398px;
    justify-content: center;
`
export const CampaignOverviewTitle = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const CampaignOverviewContent = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Right = styled.div`
    display: flex;

`

export const InfluencerDetails = styled.div`
    width: 517px;
    height: 295px;
    flex-shrink: 0;
    // background-image: url(${background_img});
    border-radius: 12px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0rem 20px;

`

export const InfluencerView = styled.div`
    width: 465px;
    height: 175px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const InfluencerDetailHeader = styled.div`
    color: var(--primary-color, #E66A44);
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

`
export const InfluencerProfile = styled.div`
    display: flex;
    gap: 20px
`

export const InfluencerIcon = styled.img.attrs((props)=>({
    src: props.src,
}))`
width: 119px;
height: 125px;
border-radius: 12px;
`

export const InfluencerProfileDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const InflencerName = styled.div`
    color: #000;

    font-family: "Avenir Next LT Pro";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const InflencerCategory = styled.div`
    display: flex;
    gap: 8px;
`

export const InfluencerLocation = styled.div`
    display: flex;
    gap: 8px;
`

export const InfluencerSocialMediaLinks = styled.div`
    display: flex;
    gap: 12px;
`

export const InfluencerOveriew = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
`
export const OverviewContainer = styled.div`
    display: flex;
    width: 41%;
    height: 52px;
    padding: 0rem 0.5rem;
    align-items: center;
    gap: 20px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
`
export const OverviewLeft = styled.div`
`

export const OverviewRight = styled.div`
`

export const OverviewTitle = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const OverviewValue = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
