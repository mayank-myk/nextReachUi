import styled from "styled-components";
import background_img from "../../../../../assets/DiscoverPage/discover_header_background.png";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-image: url(${background_img});
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
   
`
export const CampaignOverviewTitle = styled.div`
    color: var(--tertiary-color, #333);
    font-family: "Avenir Next LT Pro";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: var(--primary-color, #E66A44);
    text-align: center;
`

export const CampaignOverviewContent = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items:center;
    padding: 0.3rem 6rem;
`

export const Right = styled.div`
    display: flex;
    padding: 1rem 0;
`

export const InfluencerDetails = styled.div`
    width: 321px;
    height: 177px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 11px 6px 9px 5px;

`

export const InfluencerDetailHeader = styled.div`
    color: var(--primary-color, #E66A44);
    font-family: "Avenir Next LT Pro";
    font-size: 18px;
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
    width: 82px;
    height: 82px;
`

export const InfluencerProfileDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const InflencerName = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const InflencerCategory = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
        color: #000;

font-family: "Avenir Next LT Pro";
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const InfluencerLocation = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
       color: #000;

font-family: "Avenir Next LT Pro";
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const InfluencerSocialMediaLinks = styled.div`
    display: flex;
    gap: 8px;
`

export const InfluencerOveriew = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
`
export const OverviewContainer = styled.div`
    display: flex;
    width: 150px;
    height: 42px;
    // padding: 0rem 0.5rem;
    align-items: center;
    // gap: 10px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid var(--carts-stroke-color, #9F9F9F);
    justify-content: space-around;
`

export const OverviewLeft = styled.div`
`

export const OverviewRight = styled.div`
`

export const OverviewTitle = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const OverviewValue = styled.div`
    color: #000;
    font-family: "Avenir Next LT Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
