import React, { useRef, useState } from "react";
import followers_icon from "../../../../../assets/icons/followers_img.svg";
import like_icon from "../../../../../assets/icons/like_icon.png";
import comment_icon from "../../../../../assets/icons/comment_icon.svg";
import * as S from "./EngagementRateCalculator.style.js";
import ModalPopup from "../../../../../desktop/common/ModalPopup/ModalPopup.tsx";
import { ClipLoader } from "react-spinners";
import { useLocation } from "react-router-dom";

const EngagementRateCalculator = () => {
  const location = useLocation();
  const { state = null } = location;
  const targetRef = useRef();

  React.useEffect(() => {
    if (state && state.scrollTo === "target" && targetRef.current) {
      window.scrollBy({ top: 2820, behavior: "smooth" });
      // targetRef.current.scrollIntoView({
      //   behavior: "smooth", // Smooth scrolling effect
      //   block: "start", // Align the target element to the start of the viewport
      // });
      // targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [state]);

  const [instagramUsername, setInstagramUsername] = useState("");
  const [engagementRateResponse, setEngagementRateResponse] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorModalResponse, setErrorModalResponse] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    setInstagramUsername("");
  };

  const calculateEngagementRate = (event) => {
    event?.preventDefault();
    if (instagramUsername === "") return;
    setIsLoading(true);
    fetch(
      `https://nextreach-backend-fxdmcnbgf3gsesht.southindia-01.azurewebsites.net/v1/web/calculate/er/${instagramUsername}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    )
      .then((response) => {
        setIsLoading(false);
        return response.json();
      })
      .then((response) => {
        if (response && !response.success) {
          setErrorModalResponse(response);
          openModal();
        }
        setEngagementRateResponse(response);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <S.Container ref={targetRef}>
        <S.Title>Instagram Engagement Rate Calculator</S.Title>
        <S.Description>
          Try our free Engagement Rate Calculator to find out the engagement of
          any Instagram account
        </S.Description>
        <form style={{ display: "flex" }} onSubmit={calculateEngagementRate}>
          <S.InstagramAccountInput
            placeholder="Enter Instagram account"
            value={instagramUsername}
            onChange={(event) => setInstagramUsername(event.target.value)}
          />
          {isLoading ? (
            <S.CheckButton>
              <ClipLoader color="#FFF" loading={isLoading} size={30} />
            </S.CheckButton>
          ) : (
            <S.CheckButton type="submit" enabled={instagramUsername.length > 0}>
              Check
            </S.CheckButton>
          )}
        </form>
        <S.Results>
          <S.Heading>
            <S.EngagementRateTitle>Engagement Rate</S.EngagementRateTitle>
            <S.PercentageContainer>
              {engagementRateResponse?.engagement_rate
                ? engagementRateResponse?.engagement_rate
                : "_ _"}{" "}
              %
              <div
                style={{
                  backgroundColor: "#4F8F5B",
                  borderRadius: "50%",
                  width: "18px",
                  height: "18px",
                }}
              ></div>
              {engagementRateResponse?.engagement_quality
                ? engagementRateResponse?.engagement_quality
                : "          _ _ _"}
            </S.PercentageContainer>
          </S.Heading>
          <S.CountsContainer>
            <S.Counts>
              <S.Left>
                <img
                  src={followers_icon}
                  alt="Followers"
                  style={{ color: "#fff" }}
                  width="24px"
                  height="24px"
                />
                Followers
              </S.Left>
              <S.Right>
                {engagementRateResponse?.followers
                  ? engagementRateResponse?.followers
                  : "_ _ _"}
              </S.Right>
            </S.Counts>
            <S.Counts>
              <S.Left>
                <img
                  src={like_icon}
                  alt="Likes"
                  style={{ color: "#fff" }}
                  width="24px"
                  height="24px"
                />
                Likes/Post
              </S.Left>
              <S.Right>
                {engagementRateResponse?.likes
                  ? engagementRateResponse?.likes
                  : "_ _ _"}
              </S.Right>
            </S.Counts>
            <S.Counts>
              <S.Left>
                <img
                  src={comment_icon}
                  alt="Comments"
                  style={{ color: "#fff" }}
                  width="24px"
                  height="24px"
                />
                Comments/Post
              </S.Left>
              <S.Right>
                {engagementRateResponse?.comments
                  ? engagementRateResponse?.comments
                  : "_ _ _"}
              </S.Right>
            </S.Counts>
          </S.CountsContainer>
        </S.Results>
        <ModalPopup
          isOpen={isModalOpen}
          onClose={closeModal}
          status={"error"}
          heading={errorModalResponse?.header}
          subText={errorModalResponse?.message}
          buttonText={errorModalResponse?.button_text}
        />
      </S.Container>
    </>
  );
};

export default EngagementRateCalculator;
