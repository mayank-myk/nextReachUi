import React from "react";
import instagram_icon from "../../../../../../../assets/icons/instagram_icon.png";
import youtube_icon from "../../../../../../../assets/icons/youtube_icon.png";
import food_lifestyle_icon from "../../../../../../../assets/icons/list_icon.svg";
import location_icon from "../../../../../../../assets/icons/location_icon.svg";
import * as S from "./InfluencerCard.style";
import { City, Niche } from "../../../../../../constants/constants";
import { useNavigate } from "react-router-dom";

const InfluencerCard = ({ influencer }) => {
  const navigate = useNavigate();
  if (!influencer) return;

  const {
    // id,
    name,
    profile_picture,
    niche,
    city,
    insta_followers,
    yt_followers,
  } = influencer || {};

  return (
    <S.Container
      onClick={() => {
        navigate("/top_rated_influencers");
        window.scrollTo(0, 0);
      }}
    >
      <img
        src={profile_picture}
        alt="profile_photo"
        width={"205px"}
        height={"199px"}
        style={{ borderRadius: "12px" }}
      />
      <S.InfluencerInfo isSingleNiche={niche.length < 2}>
        <S.InstaUsername>
          {name.length > 14 ? name.slice(0, 14) + "..." : name}
        </S.InstaUsername>
        <S.InfluencerDetails>
          <S.InfluencerCategory>
            <img
              src={food_lifestyle_icon}
              alt="list_icon"
              width={"13px"}
              height={"13px"}
            />
            {niche &&
              niche
                .slice(0, 2)
                .map((niche) => Niche[niche])
                .join(", ")}
          </S.InfluencerCategory>
          <S.InfluencerCategory>
            <img
              src={location_icon}
              alt="location"
              width={"13px"}
              height={"13px"}
            />
            {City[city]}
          </S.InfluencerCategory>
        </S.InfluencerDetails>
        <S.InfluencerFollowers>
          {insta_followers ? (
            <div
              style={{ display: "flex", justifyContent: "center", gap: "4px" }}
            >
              <img
                src={instagram_icon}
                alt="Instagram_followers_count"
                width="18px"
                height="18px"
              />{" "}
              {insta_followers}
            </div>
          ) : null}
          {yt_followers ? (
            <div
              style={{ display: "flex", justifyContent: "center", gap: "4px" }}
            >
              <img
                src={youtube_icon}
                alt="Youtube_followers_count"
                width="18px"
                height="18px"
              />{" "}
              {yt_followers}
            </div>
          ) : null}
        </S.InfluencerFollowers>
      </S.InfluencerInfo>
    </S.Container>
  );
};

export default InfluencerCard;
