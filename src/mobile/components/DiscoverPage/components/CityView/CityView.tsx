import React from "react";
import * as S from "./CityView.style";
import Bangalore from "../../../../../assets/Bangalore.png";
import Hyderabad from "../../../../../assets/Hyderabad.png";
import Delhi from "../../../../../assets/Delhi.png";
import Mumbai from "../../../../../assets/Mumbai.png";
import { useNavigate } from "react-router-dom";

const CityView = ({ cityRef }) => {
  const navigate = useNavigate();

  const handleCity = (city) => {
    navigate(`/top_rated_influencers/?City=${city}`);
    window.scrollTo(0, 0);
  };

  return (
    <S.Container ref={cityRef}>
      <S.Left>
        <S.LeftTitle>CITY</S.LeftTitle>
        <S.LeftSubTitle>
          Find influencers with a strong presence in a specific city.
        </S.LeftSubTitle>
        {/* <S.ExploreBtn>Explore</S.ExploreBtn> */}
      </S.Left>
      <S.Right>
        <S.FirstPart>
          <S.InfluencerInfo onClick={() => handleCity("BENGALURU")}>
            <S.ImageContainer>
              <img src={Bangalore} alt="Influencer" width={143} height={103} />
            </S.ImageContainer>
            <S.CityTitle>Bangalore</S.CityTitle>
          </S.InfluencerInfo>
          <S.InfluencerInfo onClick={() => handleCity("HYDERABAD")}>
            <S.ImageContainer>
              <img src={Hyderabad} alt="Influencer" width={143} height={103} />
            </S.ImageContainer>
            <S.CityTitle>Hyderabad</S.CityTitle>
          </S.InfluencerInfo>
        </S.FirstPart>
        <S.FirstPart>
          <S.InfluencerInfo onClick={() => handleCity("DELHI")}>
            <S.ImageContainer>
              <img src={Delhi} alt="Influencer" width={143} height={103} />
            </S.ImageContainer>
            <S.CityTitle>Delhi NCR</S.CityTitle>
          </S.InfluencerInfo>
          <S.InfluencerInfo onClick={() => handleCity("MUMBAI")}>
            <S.ImageContainer>
              <img src={Mumbai} alt="Influencer" width={143} height={103} />
            </S.ImageContainer>
            <S.CityTitle>Mumbai</S.CityTitle>
          </S.InfluencerInfo>
        </S.FirstPart>
      </S.Right>
    </S.Container>
  );
};

export default CityView;
