import React from "react";
import rewarding_icon from "../../../../../assets/ForInfluencers/icons/rewarding_icon.svg";
import hassle_free_icon from "../../../../../assets/ForInfluencers/icons/hassle_free_icon.svg";
import payment_icon from "../../../../../assets/ForInfluencers/icons/payment_icon.svg";
import add_ons_support_icon from "../../../../../assets/ForInfluencers/icons/add_ons_support_icon.svg";
import * as S from "./ForInfluencersView.style";

const ForInfluencersView = () => {
  return (
    <S.Container>
      <S.PlatformTitleContainer>
        <S.Title>Why Choose Our Platform?</S.Title>
      </S.PlatformTitleContainer>
      <S.WhyChooseOurPlatformContainer>
        <S.StepContainer>
          <S.Top>
            <img
              src={rewarding_icon}
              alt="Rewarding icon"
              width={"48px"}
              height={"48px"}
            />
            <S.StepTitle>Consistent & Rewarding Opportunities</S.StepTitle>
          </S.Top>
          <S.StepSubTitle>
            Get access to frequent collaborations with top brands. We ensure you
            have a steady stream of meaningful and lucrative campaigns tailored
            to your niche.
          </S.StepSubTitle>
        </S.StepContainer>
        <S.StepContainer>
          <S.Top>
            <img
              src={hassle_free_icon}
              alt="Message icon"
              width={"48px"}
              height={"48px"}
            />
            <S.StepTitle>Hassle-Free Campaign Management</S.StepTitle>
          </S.Top>
          <S.StepSubTitle>
            Our dedicated team ensures every campaign runs smoothly—from
            briefings to deliverables—so you can focus solely on content
            creation.
          </S.StepSubTitle>
        </S.StepContainer>
        <S.StepContainer>
          <S.Top>
            <img
              src={payment_icon}
              alt="Payment icon"
              width={"48px"}
              height={"48px"}
            />
            <S.StepTitle>Transparent Payments, No Hidden Charges</S.StepTitle>
          </S.Top>
          <S.StepSubTitle>
            We never charge onboarding fees, commissions, or hidden costs. What
            you earn is entirely yours, with timely and transparent payments
            guaranteed.
          </S.StepSubTitle>
        </S.StepContainer>
        <S.StepContainer>
          <S.Top>
            <img
              src={add_ons_support_icon}
              alt="Add ons support icon"
              width={"48px"}
              height={"48px"}
            />
            <S.StepTitle>Add-On Support Services</S.StepTitle>
          </S.Top>
          <S.StepSubTitle>
            Need a photographer, scriptwriter, model, or video editor? We can
            arrange trusted professionals to support your content creation
            journey.
          </S.StepSubTitle>
        </S.StepContainer>
      </S.WhyChooseOurPlatformContainer>
    </S.Container>
  );
};

export default ForInfluencersView;
