import React from "react";
import for_influencers_img from "../../../../../assets/ForInfluencers/for_influencers_img.png";
import * as S from "./ForInfluencerPageHeaderView.style";
import { useNavigate } from "react-router-dom";

function ForInfluencerPageHeaderView() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Top>
        <S.Left>
          <S.Title>Unlock Your True Earning Potential With Us</S.Title>
          <S.Subtitle>
            At our platform, we empower influencers to grow, earn, and manage
            campaigns seamlessly. From securing high-paying collaborations to
            hassle-free campaign execution, we ensure your focus remains on
            creating great content while we handle the rest.
          </S.Subtitle>
          <S.FooterContainer>
            <S.TextContainer>
              Let’s Build Your Success Story Together – Get in Touch Now!
            </S.TextContainer>
            <S.ButtonContainer
              onClick={() => {
                navigate("/contact_us");
                window.scrollTo(0, 0);
              }}
            >
              Get Listed
            </S.ButtonContainer>
          </S.FooterContainer>
        </S.Left>
        <S.Right src={for_influencers_img}></S.Right>
      </S.Top>
    </S.Container>
  );
}

export default ForInfluencerPageHeaderView;
