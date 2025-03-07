import React, { useRef, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import close_icon from "../../../assets/icons/close_icon.svg";
import coin_icon from "../../../assets/icons/coin_icon_4x.png";
import * as S from "./PromotionalPopup.style.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userIdSelector } from "../../../redux/selectors/profileDetailsSelector.js";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: "24px 24px 0px 0px",
  background: "#FFF",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  pt: 2,
  px: 4,
  pb: 3,
};

const PromotionalPopup = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const userId = useSelector(userIdSelector);
  const isPromotionalPopupDisplyedEarlier =
    sessionStorage.getItem("isPromotionalPopupDisplyedEarlier") || "";
  const openModal = () => setIsModalOpen(true);

  useEffect(() => {
    let timer;
    if (!userId && !isPromotionalPopupDisplyedEarlier) {
      timer = setTimeout(() => {
        openModal();
      }, 45000); // 45 seconds
      return () => clearTimeout(timer);
    }
  }, [userId, isPromotionalPopupDisplyedEarlier]);

  const redirectToLogin = () => {
    setIsModalOpen(false);
    sessionStorage.setItem("isPromotionalPopupDisplyedEarlier", "true");
    navigate("/login_signup");
    window.scrollTo(0, 0);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const closeModal = () => {
    sessionStorage.setItem("isPromotionalPopupDisplyedEarlier", "true");
    setIsModalOpen(false);
    window.scrollTo(0, 0);
  };

  const modalRef = useRef();

  // Close the modal when clicking outside
  useEffect(() => {
    if (!isModalOpen) return;

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    // Add the event listener for clicks outside the modal
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component is unmounted or modal is closed
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen, closeModal]);

  if (!isModalOpen) return null;

  return (
    <Modal
      open={isModalOpen}
      onClose={closeModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 270 }}>
        <S.ModalContainer>
          <img
            src={close_icon}
            width="20px"
            height="20px"
            alt="close icon"
            style={{ position: "absolute", right: "5%", top: "4%" }}
            onClick={closeModal}
          />
          <S.ModalHeading>
            <img src={coin_icon} alt="success" width="69px" height="69px" />

            <S.ModalHeadingTxt>
              Sign up & get 20 free profile unlocks
            </S.ModalHeadingTxt>
          </S.ModalHeading>
          <S.ModalDescription>
            Use these unlocks to explore influencer profiles for free and find
            the best match for your brand — Zero commission, Zero upfront fees
            !!
          </S.ModalDescription>

          <S.ButtonView status={"success"} onClick={redirectToLogin}>
            One Step Signup
          </S.ButtonView>
        </S.ModalContainer>
      </Box>
    </Modal>
  );
};

export default PromotionalPopup;
