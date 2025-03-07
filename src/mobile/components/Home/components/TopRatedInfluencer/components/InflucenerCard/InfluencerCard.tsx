import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import food_lifestyle_icon from "../../../../../../../assets/icons/list_icon.svg";
import location_icon from "../../../../../../../assets/icons/location_icon.svg";
import instagram_icon from "../../../../../../../assets/icons/instagram_icon.png";
import youtube_icon from "../../../../../../../assets/icons/youtube_icon.png";
import coin_icon from "../../../../../../../assets/icons/coin_icon_4.png";
import disable_lock_icon from "../../../../../../../assets/InfluencerListing/icons/disable_lock_icon_2.png";
import unlock_icon from "../../../../../../../assets/InfluencerListing/icons/unlock_icon_2.png";

import * as S from "./InfluencerCard.style";
import { useNavigate } from "react-router-dom";
import { City, Niche } from "../../../../../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import ModalPopup from "../../../../../../../desktop/common/ModalPopup/ModalPopup.tsx";
import { setInfluencerMatric } from "../../../../../../../redux/actions/influencerMatricActions";
import { userIdSelector } from "../../../../../../../redux/selectors/profileDetailsSelector";

const InfluencerCard = ({ influencer }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector(userIdSelector);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalResponse, setModalResponse] = useState(null);
  const {
    id,
    name,
    profile_picture,
    niche,
    city,
    insta_followers,
    yt_followers,
    profile_visited,
  } = influencer;

  const handleViewProfile = (id) => {
    fetch(
      `https://nextreach-backend-fxdmcnbgf3gsesht.southindia-01.azurewebsites.net/v1/web/influencer/insight`,
      {
        method: "POST",

        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: userId,
          influencer_id: id,
        }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response && "success" in response && !response.success) {
          setModalOpen(true);
          setModalResponse(response);
        } else {
          const newId = uuidv4();
          navigate(`/influencer_matric/${newId}`);
          window.scrollTo(0, 0);
        }
        dispatch(setInfluencerMatric(response));
      });
  };

  const closeModal = () => {
    setModalOpen(false);
    navigate("/login_signup?redirectFrom=top_rated_influencers");
    window.scrollTo(0, 0);
  };

  return (
    <S.Container
      onClick={() => {
        nagivate("/top_rated_influencers");
        window.scrollTo(0, 0);
      }}
    >
      <img
        src={profile_picture}
        alt="profile_photo"
        width={"139px"}
        height={"139px"}
        style={{ borderRadius: "12px" }}
      />
      <S.InfluencerInfo
        style={{ gap: niche && niche.length >= 2 ? "0.1rem" : "0.5rem" }}
      >
        <S.InstaUsername>
          {name && name.length > 15 ? name.slice(0, 15) + "..." : name}
        </S.InstaUsername>
        <S.InfluencerDetails>
          <S.InfluencerCategory>
            <img
              src={food_lifestyle_icon}
              alt="list_icon"
              width={"13px"}
              height={"13px"}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              {niche && niche.length >= 2 ? (
                <>
                  <div>{Niche[niche[0]]}, </div>
                  <div>{Niche[niche[1]]}</div>
                </>
              ) : (
                <>
                  <div>{Niche[niche[0]]}</div>
                </>
              )}
            </div>
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
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                fontSize: "12px",
              }}
            >
              <img
                src={instagram_icon}
                alt="Instagram_followers_count"
                width={"16px"}
                height={"16px"}
              />{" "}
              {insta_followers}
            </div>
          ) : null}
          {yt_followers ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                fontSize: "12px",
              }}
            >
              <img
                src={youtube_icon}
                alt="Youtube_followers_count"
                width={"16px"}
                height={"16px"}
              />{" "}
              {yt_followers}
            </div>
          ) : null}
        </S.InfluencerFollowers>
        <S.ViewProfileContainer
          onClick={() => handleViewProfile(id)}
          isSingleNiche={niche.length < 2}
        >
          {profile_visited ? (
            <>
              <S.ViewProfileButton>View Profile</S.ViewProfileButton>
              <img
                src={unlock_icon}
                alt="lock"
                width={"17px"}
                height={"22px"}
              />
            </>
          ) : (
            <>
              <S.ViewProfileButton style={{ display: "flex", gap: "5px" }}>
                Use{" "}
                <img src={coin_icon} alt="coin" width="14px" height="14px" /> 1
              </S.ViewProfileButton>
              <img
                src={disable_lock_icon}
                alt="lock"
                width={"17px"}
                height={"22px"}
              />
            </>
          )}
        </S.ViewProfileContainer>
      </S.InfluencerInfo>
      {modalOpen ? (
        <ModalPopup
          isOpen={modalOpen}
          onClose={closeModal}
          status={modalResponse?.success ? "success" : "error"}
          heading={modalResponse?.header}
          subText={modalResponse?.message}
          buttonText={modalResponse?.button_text}
        />
      ) : null}
    </S.Container>
  );
};

export default InfluencerCard;
