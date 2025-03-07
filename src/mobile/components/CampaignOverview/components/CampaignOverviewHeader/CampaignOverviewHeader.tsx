import React from "react";
import inflencer_pic from "../../../../../assets/influencer_pic.png";
import category_icon from "../../../../../assets/icons/list_icon.svg";
import location_icon from "../../../../../assets/icons/location_icon.svg";
import youtube_icon from "../../../../../assets/icons/youtube_icon.png";
import facebook_icon from "../../../../../assets/icons/facebook_icon.png";
import content_charge_icon from "../../../../../assets/icons/content_charge_icon.svg";
import instagram_icon from "../../../../../assets/icons/instagram_icon.png";
import view_icon from "../../../../../assets/icons/view_icon.svg";
// import followers_icon from "../../../../../assets/icons/followers_icon.svg";

import * as S from "./CampaignOverviewHeader.style.js";
import { City, Niche } from "../../../../../desktop/constants/constants.js";

const CampaignOverviewHeader = ({ influencerDetails }) => {
  if (!influencerDetails) return;

  return (
    <S.Container>
      <S.Left>
        <S.CampaignOverviewTitle>CAMPAIGN OVERVIEW</S.CampaignOverviewTitle>
        <S.CampaignOverviewContent>
          Track the progress, performance, andkey details of this campaign.
        </S.CampaignOverviewContent>
      </S.Left>
      <S.Right>
        <S.InfluencerDetails>
          <S.InfluencerDetailHeader>
            Influencer Details
          </S.InfluencerDetailHeader>
          <S.InfluencerProfile>
            <S.InfluencerIcon
              src={influencerDetails?.profile_picture || inflencer_pic}
              style={{ borderRadius: "8px" }}
            ></S.InfluencerIcon>
            <S.InfluencerProfileDetail>
              <S.InflencerName>
                {influencerDetails?.name && influencerDetails?.name.length > 15
                  ? influencerDetails?.name.slice(0, 15) + "..."
                  : influencerDetails?.name}
              </S.InflencerName>
              <S.InflencerCategory>
                <img
                  src={category_icon}
                  alt="Category icon"
                  width="11px"
                  height="11px"
                />{" "}
                {influencerDetails.niche &&
                  influencerDetails.niche.length > 0 &&
                  influencerDetails.niche
                    .slice(0, 2)
                    .map((niche) => Niche[niche])
                    .join(", ")}
              </S.InflencerCategory>
              <S.InfluencerLocation>
                <img
                  src={location_icon}
                  alt="Location icon"
                  width="11px"
                  height="15px"
                />{" "}
                {City[influencerDetails.city]}
              </S.InfluencerLocation>
              <S.InfluencerSocialMediaLinks>
                {influencerDetails?.insta_followers ? (
                  <>
                    <img
                      src={instagram_icon}
                      alt="Instagram"
                      width="16px"
                      height="16px"
                    />{" "}
                    {influencerDetails?.insta_followers}
                  </>
                ) : null}
                {influencerDetails?.yt_followers ? (
                  <>
                    <img
                      src={youtube_icon}
                      alt="Youtube"
                      width="16px"
                      height="16px"
                    />{" "}
                    {influencerDetails?.yt_followers}
                  </>
                ) : null}
                {influencerDetails?.fb_followers ? (
                  <>
                    <img
                      src={facebook_icon}
                      alt="Youtube"
                      width="16px"
                      height="16px"
                    />{" "}
                    {influencerDetails?.fb_followers}
                  </>
                ) : null}
              </S.InfluencerSocialMediaLinks>
            </S.InfluencerProfileDetail>
          </S.InfluencerProfile>
          <S.InfluencerOveriew>
            <S.OverviewContainer>
              <S.OverviewLeft>
                <img
                  src={content_charge_icon}
                  alt="Content charge"
                  width="16px"
                  height="16px"
                />
              </S.OverviewLeft>
              <S.OverviewRight>
                <S.OverviewTitle>Content Charge</S.OverviewTitle>
                <S.OverviewValue>
                  {influencerDetails?.content_charge}
                </S.OverviewValue>
              </S.OverviewRight>
            </S.OverviewContainer>

            <S.OverviewContainer>
              <S.OverviewLeft>
                <img
                  src={view_icon}
                  alt="Views charge"
                  width="16px"
                  height="16px"
                />
              </S.OverviewLeft>
              <S.OverviewRight>
                <S.OverviewTitle>Views Charge</S.OverviewTitle>
                <S.OverviewValue>
                  {influencerDetails?.views_charge}
                </S.OverviewValue>
              </S.OverviewRight>
            </S.OverviewContainer>
          </S.InfluencerOveriew>
        </S.InfluencerDetails>
      </S.Right>
    </S.Container>
  );
};

export default CampaignOverviewHeader;
