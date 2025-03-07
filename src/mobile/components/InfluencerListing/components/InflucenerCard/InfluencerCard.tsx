import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import food_lifestyle_icon from "../../../../../assets/icons/list_icon.svg";
import location_icon from "../../../../../assets/icons/location_icon.svg";
import instagram_icon from "../../../../../assets/icons/instagram_icon.png";
import youtube_icon from "../../../../../assets/icons/youtube_icon.png";
import coin_icon from "../../../../../assets/icons/coin_icon_4.png";
import disable_lock_icon from "../../../../../assets/InfluencerListing/icons/disable_lock_icon_2.png";
import unlock_icon from "../../../../../assets/InfluencerListing/icons/unlock_icon_2.png";

import * as S from "./InfluencerCard.style";
import { useNavigate } from "react-router-dom";
import { City, Niche } from "../../../../../desktop/constants/constants";
import { setInfluencerMatric } from "../../../../../redux/actions/influencerMatricActions";
import { useDispatch, useSelector } from "react-redux";
import {
  profileDetailsSelector,
  userIdSelector,
} from "../../../../../redux/selectors/profileDetailsSelector";
import ModalPopup from "../../../../../desktop/common/ModalPopup/ModalPopup.tsx";
import Loader from "../../../../../desktop/common/Loader/Loader.tsx";

const InfluencerCard = ({ influencer, redirectFrom = "" }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector(userIdSelector);
  const profile_details = useSelector(profileDetailsSelector);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalResponse, setModalResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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

  const { phone_number } = profile_details || {};
  const handleViewProfile = (id) => {
    setIsLoading(true);
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
        setIsLoading(false);
        return response.json();
      })
      .then((response) => {
        setIsLoading(false);
        if (response && "success" in response && !response.success) {
          setModalOpen(!modalOpen);
          setModalResponse(response);
        } else {
          const newId = uuidv4();
          navigate(`/influencer_matric/${newId}`);
          window.scrollTo(0, 0);
        }
        dispatch(setInfluencerMatric(response));
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  const closeModal = () => {
    setModalOpen(!modalOpen);
  };

  const onHandleAction = () => {
    setModalOpen(!modalOpen);
    if (modalResponse && modalResponse?.button_text === "One Step Signup") {
      if (redirectFrom === "/") {
        navigate(`/login_signup?redirectFrom=/`);
      } else {
        navigate("/login_signup?redirectFrom=top_rated_influencers");
      }
    } else if (
      modalResponse &&
      modalResponse?.button_text === "Request Coins"
    ) {
      setIsLoading(true);
      fetch(
        `https://nextreach-backend-fxdmcnbgf3gsesht.southindia-01.azurewebsites.net/v1/web/create/lead`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            entity_type: "CLIENT",
            name: userId + "",
            phone_number: phone_number + "",
            message: "recharge request generated from website",
          }),
        }
      )
        .then((response) => {
          setIsLoading(false);
          return response.json();
        })
        .then((response) => {
          setIsLoading(false);
          setModalResponse(response);
          setModalOpen(true);
        })
        .catch((error) => {
          setIsLoading(false);
        });
    } else if (userId) {
      if (redirectFrom === "/") {
        navigate(`/login_signup?redirectFrom=/`);
      } else {
        navigate("/login_signup?redirectFrom=top_rated_influencers");
      }
      window.scrollTo(0, 0);
    }
  };
  return (
    <>
      {isLoading && <Loader />}
      <S.Container onClick={() => handleViewProfile(id)}>
        <img
          src={profile_picture}
          alt="profile_photo"
          width={"163px"}
          height={"173px"}
          style={{ borderRadius: "12px" }}
        />
        <S.InfluencerInfo
          style={{ gap: niche.length > 1 ? "0.5rem" : "0.6rem" }}
        >
          <S.InstaUsername>
            {name.length > 17 ? name.slice(0, 17) + "..." : name}
          </S.InstaUsername>
          <S.InfluencerDetails style={{ gap: "0.3rem" }}>
            <S.InfluencerCategory>
              <img
                src={food_lifestyle_icon}
                alt="list_icon"
                width={"11px"}
                height={"11px"}
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
                width={"11px"}
                height={"11px"}
              />{" "}
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
                  gap: "0.2rem",
                }}
              >
                <img
                  src={instagram_icon}
                  alt="Instagram_followers_count"
                  width={"16px"}
                  height={"16px"}
                />
                {insta_followers}
              </div>
            ) : null}
            {yt_followers ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.2rem",
                }}
              >
                <img
                  src={youtube_icon}
                  alt="Youtube_followers_count"
                  width={"16px"}
                  height={"16px"}
                />
                {yt_followers}
              </div>
            ) : null}
          </S.InfluencerFollowers>
          <S.ViewProfileContainer isSingleNiche={niche.length < 2}>
            {userId ? (
              <>
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
                    <S.ViewProfileButton
                      style={{ display: "flex", gap: "5px" }}
                    >
                      Use{" "}
                      <img
                        src={coin_icon}
                        alt="coin"
                        width="14px"
                        height="14px"
                      />{" "}
                      1
                    </S.ViewProfileButton>
                    <img
                      src={disable_lock_icon}
                      alt="lock"
                      width={"17px"}
                      height={"22px"}
                    />
                  </>
                )}
              </>
            ) : (
              <S.ViewProfileButton>Unlock Full Profile</S.ViewProfileButton>
            )}
          </S.ViewProfileContainer>
        </S.InfluencerInfo>
        {modalOpen ? (
          <ModalPopup
            isOpen={modalOpen}
            onClose={closeModal}
            onHandleAction={onHandleAction}
            status={modalResponse?.success ? "success" : "error"}
            heading={modalResponse?.header}
            subText={modalResponse?.message}
            buttonText={modalResponse?.button_text}
          />
        ) : null}
      </S.Container>
    </>
  );
};

export default InfluencerCard;
