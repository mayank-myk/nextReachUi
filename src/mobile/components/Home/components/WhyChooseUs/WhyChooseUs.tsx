import React from "react";
import rupees_icon from "../../../../../assets/Home/icons/rupees_icon.svg";
import quality_listing from "../../../../../assets/Home/icons/quality_listing_icon.svg";
import ai_driven_icon from "../../../../../assets/Home/icons/ai_driven_icon.svg";
import data_backed_insights_icon from "../../../../../assets/Home/icons/data_backed_insights_icon.svg";

import * as S from "./WhyChooseUs.style";
import { useNavigate } from "react-router-dom";

const WhyChooseUs = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.FirstPart>
        <S.WhyChooseUsTitle>WHY CHOOSE US?</S.WhyChooseUsTitle>
        <S.WhyChooseUsSubtitle>
          Here are the top four reasons why you should choose NextReach for your
          influencer campaigns.
        </S.WhyChooseUsSubtitle>
      </S.FirstPart>
      <S.StepsContainer>
        <S.StepContainer>
          <img
            src={rupees_icon}
            alt="rupees icon"
            width={"24px"}
            height={"24px"}
          />
          <S.Title>Pay per view</S.Title>
          <S.SubTitle>
            Achieve maximum ROI by paying only for actual results based on the
            number of views rather than fixed upfront fee
          </S.SubTitle>
        </S.StepContainer>
        <S.StepContainer>
          <img
            src={quality_listing}
            alt="quality listing icon"
            width={"24px"}
            height={"24px"}
          />
          <S.Title>Quality Listing</S.Title>
          <S.SubTitle>
            We list influencers with genuine followers, consistent reach, and
            provide detailed insights into their metrics
          </S.SubTitle>
        </S.StepContainer>
        <S.StepContainer>
          <img
            src={ai_driven_icon}
            alt="ai driven icon"
            width={"24px"}
            height={"24px"}
          />
          <S.Title>AI Driven</S.Title>
          <S.SubTitle>
            Our AI analyzes 10+ metrics to measure, score, and recommend the
            best influencers.{" "}
          </S.SubTitle>
        </S.StepContainer>
        <S.StepContainer>
          <img
            src={data_backed_insights_icon}
            alt="data backed insights icon"
            width={"24px"}
            height={"24px"}
          />
          <S.Title>DATA BACKED INSIGHTS</S.Title>
          <S.SubTitle>
            Stay updated with real-time performance analytics and campaign
            tracking.{" "}
          </S.SubTitle>
        </S.StepContainer>
      </S.StepsContainer>
      <S.FirstPart>
        <S.DiscoverNowBtn
          onClick={() => {
            navigate("/discover");
            window.scrollTo(0, 0);
          }}
        >
          Discover Now
        </S.DiscoverNowBtn>
      </S.FirstPart>
    </S.Container>
  );
};

export default WhyChooseUs;
