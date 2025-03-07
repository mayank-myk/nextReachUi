import React, { useState } from "react";
import star_icon from "../../../../../assets/icons/star_icon.svg";
import filled_star_icon from "../../../../../assets/icons/filled_star_icon.svg";
import * as S from "./Rating.style.js";
import { useSelector } from "react-redux";
import { userIdSelector } from "../../../../../redux/selectors/profileDetailsSelector.js";
import { getActiveCampaignId } from "../../../../../redux/selectors/campaignSelector.js";
import ModalPopup from "../../../../../desktop/common/ModalPopup/ModalPopup.tsx";

const Rating = ({ rating: prevRating, review }) => {
  const user_id = useSelector(userIdSelector);
  const activeCampaignId = useSelector(getActiveCampaignId);

  const [rating, setRating] = useState(prevRating);
  const [commentTxt, setCommentTxt] = useState(review);
  const [isSubmitActive, setIsSubmitActive] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalResponse, setModalResponse] = useState();

  const handleRating = (index) => {
    if (prevRating >= 1) return;
    setRating(index); // Set the rating to the clicked star index
    setIsSubmitActive(true);
  };

  const handleComment = (event) => {
    if (prevRating >= 1) return;
    setCommentTxt(event.target.value);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const handleFeedback = () => {
    if (prevRating >= 1) return;

    fetch(
      `https://nextreach-backend-fxdmcnbgf3gsesht.southindia-01.azurewebsites.net/v1/web/campaign/rate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          client_id: user_id,
          campaign_id: activeCampaignId,
          rating: rating,
          comment: commentTxt,
        }),
      }
    )
      .then((response) => {
        if (response?.status === 200) {
          return response.json();
        }
      })
      .then((response) => {
        setModalResponse(response);
        setIsOpenModal(true);
        setIsSubmitActive(false);
      });
  };
  return (
    <>
      <S.Rating>
        <S.RatingTitle>Rating</S.RatingTitle>
        <S.RatingStar>
          {[1, 2, 3, 4, 5].map((starIndex) =>
            starIndex <= rating ? (
              <img
                src={filled_star_icon}
                alt="Rating"
                onClick={() => handleRating(starIndex)}
                style={{
                  width: "28px",
                  height: "28px",
                }}
              />
            ) : (
              <img
                src={star_icon}
                alt="Rating"
                onClick={() => handleRating(starIndex)}
                style={{
                  width: "28px",
                  height: "28px",
                }}
              />
            )
          )}
        </S.RatingStar>
      </S.Rating>
      <S.Feedback>
        <S.TextArea
          placeholder="Write a message here..."
          value={commentTxt}
          onChange={(event) => handleComment(event)}
          disabled={prevRating >= 1}
          style={{ fontSize: "14px" }}
        >
          {commentTxt}
        </S.TextArea>
        <S.SubmitButton state={isSubmitActive} onClick={handleFeedback}>
          SUBMIT
        </S.SubmitButton>
      </S.Feedback>
      <ModalPopup
        isOpen={isOpenModal}
        onClose={closeModal}
        status={modalResponse?.success ? "success" : "error"}
        heading={modalResponse?.header}
        subText={modalResponse?.message}
        buttonText={modalResponse?.button_text}
      />
    </>
  );
};

export default Rating;
