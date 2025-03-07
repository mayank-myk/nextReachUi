import React from "react";
import discover_icon from "../../../../../assets/DiscoverPage/icons/discover_icon.svg";
import * as S from "./DiscoverPageHeaderView.style";

function DiscoverHeaderView() {
  return (
    <S.Container>
      <S.Left>
        <S.Title>Find the Perfect Influencers</S.Title>
        <S.Subtitle>
          You can discover influencers based on Niche, City, Followers, Platform
          and Tentative Budget. You can apply additional filters in the next
          page.
        </S.Subtitle>
      </S.Left>
      <S.Right src={discover_icon}></S.Right>
    </S.Container>
  );
}

export default DiscoverHeaderView;
