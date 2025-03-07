import React from "react";
import instagram_icon from "../../../../../assets/icons/instagram_icon.png";
import youtube_icon from "../../../../../assets/icons/youtube_icon.png";
import facebook_icon from "../../../../../assets/icons/facebook_icon.png";

import * as S from "./Platform.style";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  // setInfluencerListingFilters,
  setQueryString,
  setStoreSortApplied,
} from "../../../../../redux/actions/influencerListingActions";

const PlatformView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePlatform = (platform) => {
    navigate(`/top_rated_influencers/?platform=${platform}`);
    // dispatch(setInfluencerListingFilters({ platform: platform }));
    dispatch(setQueryString(`platform=${platform}&sort_applied=RECOMMENDED`));
    dispatch(setStoreSortApplied("RECOMMENDED"));
    window.scrollTo(0, 0);
  };

  return (
    <S.Container>
      <S.PlatformTitleContainer>
        <S.Title>PLATFORM</S.Title>
        <S.Subtitle>
          Looking for platform specific influencers? Select your platform of
          choice.
        </S.Subtitle>
      </S.PlatformTitleContainer>
      <S.CategoryContainer>
        <S.Category onClick={() => handlePlatform("INSTAGRAM")}>
          <S.CategoryIcon src={instagram_icon} alt="Instagram icon" />
          <S.CategoryTitle>Instagram</S.CategoryTitle>
        </S.Category>
        <S.Category onClick={() => handlePlatform("YOUTUBE")}>
          <S.CategoryIcon src={youtube_icon} alt="Youtube icon" />
          <S.CategoryTitle>Youtube</S.CategoryTitle>
        </S.Category>
        <S.Category onClick={() => handlePlatform("FACEBOOK")}>
          <S.CategoryIcon src={facebook_icon} alt="Facebook icon" />
          <S.CategoryTitle>Facebook </S.CategoryTitle>
        </S.Category>
      </S.CategoryContainer>
    </S.Container>
  );
};

export default PlatformView;
