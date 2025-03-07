import React, { useRef, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import close_icon from "../../../assets/icons/close_icon.svg";
import error_icon from "../../../assets/Modal/icons/error_icon.svg";
import success_icon from "../../../assets/Modal/icons/success_icon.png";
import * as S from "./ModalPopup.style.js";
import { useDispatch } from "react-redux";
import { setCollabOption } from "../../../redux/actions/influencerMatricActions.js";

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

const ModalPopup = ({
  isOpen,
  onClose,
  onHandleAction,
  status,
  heading,
  subText,
  buttonText,
  isForm = false,
}) => {
  const modalRef = useRef();
  const dispatch = useDispatch();
  const [collabOptionVal, setCollabOptionVal] = useState("");

  // Close the modal when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Add the event listener for clicks outside the modal
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component is unmounted or modal is closed
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setCollabOption(collabOptionVal));
    onClose();
  };

  const handleCollabRadioChange = (event) => {
    setCollabOptionVal(event.target.value);
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
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
            onClick={onClose}
          />
          <S.ModalHeading>
            {status === "error" ? (
              <img src={error_icon} alt="error" width="69px" height="69px" />
            ) : (
              <img
                src={success_icon}
                alt="success"
                width="69px"
                height="69px"
              />
            )}
            <S.ModalHeadingTxt>{heading}</S.ModalHeadingTxt>
          </S.ModalHeading>
          <S.ModalDescription>{subText}</S.ModalDescription>
          {/* // DAYS_WITHIN_7 // DAYS_7_15 // DAYS_AFTER_15 // Within 7 Days //
          7-15 Days // After 15 Days */}

          {isForm ? (
            <S.FormContainer>
              <form onSubmit={handleSubmit}>
                <S.OptionsContainer>
                  <label>
                    <input
                      type="radio"
                      name="collab_option"
                      value={"DAYS_WITHIN_7"}
                      checked={collabOptionVal === "DAYS_WITHIN_7"}
                      onChange={(event) => handleCollabRadioChange(event)}
                    />{" "}
                    {"Within 7 Days"}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="collab_option"
                      value={"DAYS_7_15"}
                      checked={collabOptionVal === "DAYS_7_15"}
                      onChange={(event) => handleCollabRadioChange(event)}
                    />{" "}
                    {"7-15 Days"}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="collab_option"
                      value={"DAYS_AFTER_15"}
                      checked={collabOptionVal === "DAYS_AFTER_15"}
                      onChange={(event) => handleCollabRadioChange(event)}
                    />{" "}
                    {"After 15 Days"}
                  </label>
                </S.OptionsContainer>

                <S.CollabButtonView
                  type="submit"
                  status={status}
                  style={{
                    marginTop: "1rem",
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  disabled={!collabOptionVal}
                >
                  {buttonText}
                </S.CollabButtonView>
              </form>
            </S.FormContainer>
          ) : (
            <S.ButtonView status={status} onClick={onHandleAction}>
              {buttonText}
            </S.ButtonView>
          )}
        </S.ModalContainer>
      </Box>
    </Modal>
  );
};

export default ModalPopup;
