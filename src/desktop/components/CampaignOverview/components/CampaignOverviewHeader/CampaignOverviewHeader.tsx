import React from "react";
// import inflencer_pic from "../../../../../assets/influencer_pic.png";
import category_icon from "../../../../../assets/icons/list_icon.svg";
import location_icon from "../../../../../assets/icons/location_icon.svg";
import youtube_icon from "../../../../../assets/icons/youtube_icon.png";
import facebook_icon from "../../../../../assets/icons/facebook_icon.png";
import content_charge_icon from "../../../../../assets/icons/content_charge_icon.svg";
import instagram_icon from "../../../../../assets/icons/instagram_icon.png";
import view_icon from "../../../../../assets/icons/view_icon.svg";
// import followers_icon from "../../../../../assets/icons/followers_icon.svg";

import * as S from "./CampaignOverviewHeader.style.js";
import { City, Niche } from "../../../../constants/constants.js";
import { InfluencerDetailsModel } from "../../../../types/CampaignOverviewModel.js";

const CampaignOverviewHeader = ({
  influencerDetails,
}: InfluencerDetailsModel) => {
  if (!influencerDetails) return;

  return (
    <S.Container>
      <S.Left>
        <S.CampaignOverviewTitle>CAMPAIGN OVERVIEW</S.CampaignOverviewTitle>
        <S.CampaignOverviewContent>
          Track the progress, performance, and key details of this campaign.
        </S.CampaignOverviewContent>
      </S.Left>
      <S.Right>
        <S.InfluencerDetails>
          <S.InfluencerView>
            <S.InfluencerDetailHeader>
              Influencer Details
            </S.InfluencerDetailHeader>
            <S.InfluencerProfile>
              <S.InfluencerIcon
                src={influencerDetails?.profile_picture}
              ></S.InfluencerIcon>
              <S.InfluencerProfileDetail>
                <S.InflencerName>{influencerDetails.name}</S.InflencerName>
                <S.InflencerCategory>
                  <img src={category_icon} alt="Category icon" />{" "}
                  {influencerDetails.niche &&
                    influencerDetails.niche
                      .slice(0, 2)
                      .map((niche) => Niche[niche])
                      .join(", ")}
                </S.InflencerCategory>
                <S.InfluencerLocation>
                  <img src={location_icon} alt="Location icon" />{" "}
                  {City[influencerDetails.city]}
                </S.InfluencerLocation>
                <S.InfluencerSocialMediaLinks>
                  {influencerDetails?.insta_followers ? (
                    <>
                      <img
                        src={instagram_icon}
                        alt="Instagram"
                        width="18px"
                        height="18px"
                      />{" "}
                      {influencerDetails?.insta_followers}
                    </>
                  ) : null}
                  {influencerDetails?.yt_followers ? (
                    <>
                      <img
                        src={youtube_icon}
                        alt="Youtube"
                        width="18px"
                        height="18px"
                      />{" "}
                      {influencerDetails?.yt_followers}
                    </>
                  ) : null}
                  {influencerDetails?.fb_followers ? (
                    <>
                      <img
                        src={facebook_icon}
                        alt="Youtube"
                        width="18px"
                        height="18px"
                      />{" "}
                      {influencerDetails?.fb_followers}
                    </>
                  ) : null}
                </S.InfluencerSocialMediaLinks>
              </S.InfluencerProfileDetail>
            </S.InfluencerProfile>
          </S.InfluencerView>
          <S.InfluencerOveriew>
            <S.OverviewContainer>
              <S.OverviewLeft>
                <img
                  src={content_charge_icon}
                  alt="Content charge"
                  width="20px"
                  height="20px"
                />
              </S.OverviewLeft>
              <S.OverviewRight>
                <S.OverviewTitle>Content Charge</S.OverviewTitle>
                <S.OverviewValue>
                  {influencerDetails.content_charge}
                </S.OverviewValue>
              </S.OverviewRight>
            </S.OverviewContainer>

            <S.OverviewContainer>
              <S.OverviewLeft>
                <img
                  src={view_icon}
                  alt="Views charge"
                  width="20px"
                  height="20px"
                />
              </S.OverviewLeft>
              <S.OverviewRight>
                <S.OverviewTitle>Views Charge</S.OverviewTitle>
                <S.OverviewValue>
                  {influencerDetails.views_charge}
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
