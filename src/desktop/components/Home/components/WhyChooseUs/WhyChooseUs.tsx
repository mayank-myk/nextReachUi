import React from "react";
import { useNavigate } from "react-router-dom";
// import step_icon from "../../../../../assets/icons/step_icon.png";
import rupees_icon from "../../../../../assets/Home/icons/rupees_icon.svg";
import quality_listing from "../../../../../assets/Home/icons/quality_listing_icon.svg";
import ai_driven_icon from "../../../../../assets/Home/icons/ai_driven_icon.svg";
import data_backed_insights_icon from "../../../../../assets/Home/icons/data_backed_insights_icon.svg";

import * as S from "./WhyChooseUs.style";

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
        <S.DiscoverNowBtn
          onClick={() => {
            navigate("/discover");
            window.scrollTo(0, 0);
          }}
        >
          Discover Now
        </S.DiscoverNowBtn>
      </S.FirstPart>
      <S.StepsContainer>
        <S.StepContainer>
          <img
            src={rupees_icon}
            alt="rupees icon"
            width={"48px"}
            height={"48px"}
          />
          <S.Title>Pay per view</S.Title>
          <div style={{ width: "324px" }}>
            Achieve maximum ROI by paying only for actual results based on the
            number of views rather than fixed upfront fee
          </div>
        </S.StepContainer>
        <S.StepContainer>
          <img
            src={quality_listing}
            alt="quality listing icon"
            width={"48px"}
            height={"48px"}
          />
          <S.Title>Quality Listing</S.Title>
          <div style={{ width: "324px" }}>
            We list influencers with genuine followers, consistent reach, and
            provide detailed insights into their metrics
          </div>
        </S.StepContainer>
        <S.StepContainer>
          <img
            src={ai_driven_icon}
            alt="ai driven icon"
            width={"48px"}
            height={"48px"}
          />
          <S.Title>AI Driven</S.Title>
          <div>
            Our AI analyzes 10+ metrics to measure, score, and recommend the
            best influencers.{" "}
          </div>
        </S.StepContainer>
        <S.StepContainer>
          <img
            src={data_backed_insights_icon}
            alt="data backed insights icon"
            width={"48px"}
            height={"48px"}
          />
          <S.Title>DATA BACKED INSIGHTS</S.Title>
          <div>
            Stay updated with real-time performance analytics and campaign
            tracking.{" "}
          </div>
        </S.StepContainer>
      </S.StepsContainer>
    </S.Container>
  );
};

export default WhyChooseUs;
