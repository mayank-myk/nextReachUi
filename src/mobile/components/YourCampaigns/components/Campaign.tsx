import React from "react";
import food_lifestyle_icon from "../../../../assets/icons/list_icon.svg";
import location_icon from "../../../../assets/icons/location_icon.svg";
import influencer_profile from "../../../../assets/influencer_profile.png";
import processing_icon from "../../../../assets/icons/CampaignState/processing_icon.svg";
import completed_icon from "../../../../assets/icons/CampaignState/completed_icon.svg";
import cancelled_icon from "../../../../assets/icons/CampaignState/cancelled_icon.svg";
import in_progress_icon from "../../../../assets/icons/CampaignState/in_progress_icon.svg";

import * as S from "./Campaign.style.js";
import {
  City,
  Niche,
  Status,
} from "../../../../desktop/constants/constants.js";
import { useNavigate } from "react-router-dom";
import { setActiveCampaignId } from "../../../../redux/actions/campaignActions.js";
import { useDispatch } from "react-redux";

const Campaign = ({ campaign }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getStatusIcon = (status) => {
    if (status === "PROCESSING") {
      return processing_icon;
    } else if (status === "IN_PROGRESS") {
      return in_progress_icon;
    } else if (status === "CANCELLED") {
      return cancelled_icon;
    } else if (status === "COMPLETED") {
      return completed_icon;
    }
    return "";
  };

  const handleCampaignOverview = (campaignId) => {
    if (!campaignId) return;
    dispatch(setActiveCampaignId({ activeCampaignId: campaignId }));
    navigate(`/campaign_overview/${campaignId}`);
  };

  return (
    <S.Container>
      <S.Left>
        <S.InfluencerImageContainer
          src={
            campaign.influencer_basic_detail.profile_picture ||
            influencer_profile
          }
        ></S.InfluencerImageContainer>
        <S.InfluencerDetails>
          <S.InfluencerInfo>
            <S.InfluencerUsername>
              {campaign.influencer_basic_detail.name &&
              campaign.influencer_basic_detail.name.length > 12
                ? campaign.influencer_basic_detail.name.slice(0, 12) + "..."
                : campaign.influencer_basic_detail.name}
            </S.InfluencerUsername>
            <S.InfluencerCategory>
              <img
                src={food_lifestyle_icon}
                alt="list_icon"
                width={"13px"}
                height={"13px"}
              />{" "}
              {campaign.influencer_basic_detail.niche &&
                campaign.influencer_basic_detail.niche
                  .map((niche) => {
                    return Niche[niche];
                  })
                  .join(", ")}
            </S.InfluencerCategory>
            <S.InfluencerCategory>
              <img
                src={location_icon}
                alt="location"
                width={"13px"}
                height={"13px"}
              />{" "}
              {City[campaign.influencer_basic_detail.city]}
            </S.InfluencerCategory>
          </S.InfluencerInfo>
          <S.CampaignState>
            <img
              src={getStatusIcon(campaign.status)}
              alt={Status[campaign.status]}
              width={"16px"}
              height={"16px"}
            />
            {Status[campaign.status]}
          </S.CampaignState>
        </S.InfluencerDetails>
      </S.Left>
      <S.CheckDetails onClick={() => handleCampaignOverview(campaign.id)}>
        <S.CheckDetailsContainer>Check details</S.CheckDetailsContainer>
        <S.StartedOn>
          <div>Last updated on </div>
          <div>{campaign.last_updated_at}</div>
        </S.StartedOn>
      </S.CheckDetails>
    </S.Container>
  );
};

export default Campaign;
