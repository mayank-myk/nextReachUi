import React, { useEffect, useState } from "react";
import influencer_profile from "../../../../../assets/influencer_profile.png";
import category_icon from "../../../../../assets/icons/list_icon.svg";
import location_icon from "../../../../../assets/icons/location_icon.svg";
import content_charge_icon from "../../../../../assets/icons/content_charge_icon.svg";
import view_icon from "../../../../../assets/icons/view_icon.svg";
import * as S from "./InfluencerMatricInfo.style";
import { Niche, City } from "../../../../constants/constants";
import {
  getCollabOption,
  getInfluencerMatricInfo,
} from "../../../../../redux/selectors/influencerMatricSelector";
import { useDispatch, useSelector } from "react-redux";
import { userIdSelector } from "../../../../../redux/selectors/profileDetailsSelector.js";
import ModalPopup from "../../../../../desktop/common/ModalPopup/ModalPopup.tsx";
import {
  resetCollabOption,
  setInfluencerMatric,
} from "../../../../../redux/actions/influencerMatricActions.js";

const InfluencerMatricInfo = () => {
  const dispatch = useDispatch();
  const influencerMatric = useSelector(getInfluencerMatricInfo) || {};
  const selectedCollabOption = useSelector(getCollabOption) || "";
  const userId = useSelector(userIdSelector);
  const [isCollabModalOpen, setIsCollabModalOpen] = useState(false);
  const [collabReqSuccessModalOpen, setCollabReqSuccessModalOpen] =
    useState(false);
  const [collabReqSuccess, setCollabReqSuccess] = useState(null);

  const {
    id: influencer_id,
    profile_picture,
    name,
    niche,
    collaboration_ongoing,
    city,
    content_charge,
    views_charge,
    // collab_charge,
    last_updated_at,
    // next_reach_score,
    // platform_details,
  } = influencerMatric || {};

  useEffect(() => {
    if (
      !selectedCollabOption ||
      selectedCollabOption === "" ||
      collaboration_ongoing ||
      !influencer_id ||
      !userId
    )
      return;

    fetch(
      `https://nextreach-backend-fxdmcnbgf3gsesht.southindia-01.azurewebsites.net/v1/web/request/collab`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          client_id: userId,
          influencer_id: influencer_id,
          collab_date: selectedCollabOption,
        }),
      }
    )
      .then((response) => {
        if (response?.status === 200) {
          return response.json();
        }
      })
      .then((response) => {
        dispatch(resetCollabOption());

        setCollabReqSuccessModalOpen(true);
        setCollabReqSuccess(response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCollabOption, userId, influencer_id]);

  useEffect(() => {
    if (!collabReqSuccessModalOpen) return;

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
          influencer_id: influencer_id,
        }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        dispatch(setInfluencerMatric(response));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collabReqSuccessModalOpen]);

  const handleCollaboration = () => {
    if (collaboration_ongoing) return;
    setIsCollabModalOpen(true);
  };

  const closeCollabModal = () => {
    setIsCollabModalOpen(false);
  };

  const closeModal = () => {
    setCollabReqSuccessModalOpen(false);
  };

  return (
    <S.Container>
      <S.InfluencerContainer>
        <S.Left>
          <img
            src={profile_picture || influencer_profile}
            alt="Influencer profile"
            width="150px"
            height="150px"
            style={{
              borderRadius: "8px",
            }}
          />
        </S.Left>
        <S.Right>
          <S.Top>
            <S.InfluencerUsername>{name}</S.InfluencerUsername>
            <S.Category>
              <img
                src={category_icon}
                alt="category"
                width="16px"
                height="16px"
              />
              {niche &&
                niche
                  .slice(0, 2)
                  .map((niche) => Niche[niche])
                  .join(", ")}
            </S.Category>
            <S.Location>
              <img
                src={location_icon}
                alt="location"
                width="16px"
                height="16px"
              />
              {City[city]}
            </S.Location>
          </S.Top>
          <S.Bottom>
            {collaboration_ongoing ? (
              <S.RequestRaised>Collab request has been raised</S.RequestRaised>
            ) : null}
            <S.CollaborateContainer
              onClick={handleCollaboration}
              disabled={collaboration_ongoing}
            >
              Collaborate
            </S.CollaborateContainer>
          </S.Bottom>
        </S.Right>
      </S.InfluencerContainer>
      <S.LastUpdatedAtTxt style={{ margin: 0 }}>
        Last Updated on {last_updated_at}
      </S.LastUpdatedAtTxt>
      <S.ChargeView>
        <S.ChargeContainer>
          <S.OverviewLeft>
            <img
              src={content_charge_icon}
              alt="Content charge"
              width="16px"
              height="16px"
            />
          </S.OverviewLeft>
          <S.OverviewRight>
            <S.OverviewTitle>Content Charge</S.OverviewTitle>
            <S.OverviewValue>{content_charge}</S.OverviewValue>
          </S.OverviewRight>
        </S.ChargeContainer>
        <S.ChargeContainer>
          <S.OverviewLeft>
            <img
              src={view_icon}
              alt="Views charge"
              width="16px"
              height="16px"
            />
          </S.OverviewLeft>
          <S.OverviewRight>
            <S.OverviewTitle>Views Charge</S.OverviewTitle>
            <S.OverviewValue>{views_charge}</S.OverviewValue>
          </S.OverviewRight>
        </S.ChargeContainer>
      </S.ChargeView>
      {isCollabModalOpen ? (
        <ModalPopup
          isOpen={isCollabModalOpen}
          onClose={closeCollabModal}
          status={"success"}
          heading={"Great Choice"}
          subText={"When would you like the influencer to post the content?"}
          buttonText={"Collaborate"}
          isForm={true}
        />
      ) : null}
      {collabReqSuccessModalOpen ? (
        <ModalPopup
          isOpen={collabReqSuccessModalOpen}
          onClose={closeModal}
          status={collabReqSuccess?.success ? "success" : "error"}
          heading={collabReqSuccess?.header}
          subText={collabReqSuccess?.message}
          buttonText={collabReqSuccess?.button_text}
        />
      ) : null}
    </S.Container>
  );
};

export default InfluencerMatricInfo;
