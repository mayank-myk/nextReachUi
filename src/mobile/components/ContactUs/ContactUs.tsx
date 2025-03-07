import React, { useEffect, useState } from "react";
import Header from "../../common/Header/Header.tsx";
import Footer from "../../common/Footer/Footer.tsx";
import location_icon from "../../../assets/icons/location_icon.svg";
import email_icon from "../../../assets/ProfileDetails/icons/email_icon.svg";
import mobile_number_icon from "../../../assets/ProfileDetails/icons/mobile_number_icon.svg";
import instagram_icon from "../../../assets/icons/instagram_icon.png";
import facebook_icon from "../../../assets/icons/facebook_icon.png";
import linkedin_icon from "../../../assets/icons/linkedin_icon.png";
import twitter_icon from "../../../assets/icons/twitter_icon.png";
import youtube_icon from "../../../assets/icons/youtube_icon.png";

import * as S from "./ContactUs.style.js";
import ModalPopup from "../../../desktop/common/ModalPopup/ModalPopup.tsx";
import Navbar from "../../common/Navbar/Navbar.tsx";
import Whatsapp from "../../common/Whatsapp/Whatsapp.tsx";
import PromotionalPopup from "../../../desktop/common/PromotionalPopup/PromotionalPopup.tsx";

const ContactUs = () => {
  const [isBusinessOwnerButtonActive, setIsBusinessOwnerButtonActive] =
    useState(false);
  const [submitButtonEnabled, setSubmitButtonEnabled] = useState(false);
  const [contactUsForm, setContactUsForm] = useState({
    entity_type: isBusinessOwnerButtonActive ? "CLIENT" : "INFLUENCER",
    name: "",
    phone_number: "",
    email: "",
    social_media_handle: "",
    message: "",
  });
  const [popupResponse, setPopupResponse] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailError, setEmailError] = useState("");

  const openModal = () => setIsModalOpen(true);

  const handleBusinessCategory = () => {
    setIsBusinessOwnerButtonActive(true);
    setContactUsForm({
      ...contactUsForm,
      entity_type: "CLIENT",
    });
  };

  const handleInfluencerCategory = () => {
    setIsBusinessOwnerButtonActive(false);
    setContactUsForm({
      ...contactUsForm,
      entity_type: "INFLUENCER",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://nextreach-backend-fxdmcnbgf3gsesht.southindia-01.azurewebsites.net/v1/web/create/lead`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactUsForm),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setPopupResponse(response);
        openModal();
      });
  };

  const handleInputChange = (e, field) => {
    if (field === "phone_number") {
      const value = e.target.value;
      if (/^\d*$/.test(value)) {
        setContactUsForm({
          ...contactUsForm,
          [field]: e.target.value,
        });
      }
    } else if (field === "email") {
      const value = e.target.value;
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (emailRegex.test(value)) {
        setContactUsForm({
          ...contactUsForm,
          [field]: e.target.value,
        });
        setEmailError("");
      } else {
        setContactUsForm({
          ...contactUsForm,
          [field]: e.target.value,
        });
        setEmailError("Please enter a valid email address.");
      }
    } else {
      setContactUsForm({
        ...contactUsForm,
        [field]: e.target.value,
      });
    }
  };

  useEffect(() => {
    if (
      contactUsForm.phone_number.length === 10 &&
      /^\d{10}$/.test(contactUsForm.phone_number) &&
      contactUsForm.name.length > 0
    ) {
      setSubmitButtonEnabled(true);
    } else {
      setSubmitButtonEnabled(false);
    }
  }, [contactUsForm.name, contactUsForm.phone_number]);

  useEffect(() => {
    if (contactUsForm.email === "") {
      setEmailError("");
    }
  }, [contactUsForm.email]);

  const closeModal = () => {
    setContactUsForm({
      entity_type: isBusinessOwnerButtonActive ? "CLIENT" : "INFLUENCER",
      name: "",
      phone_number: "",
      email: "",
      social_media_handle: "",
      message: "",
    });
    setIsModalOpen(false);
  };

  return (
    <>
      <Header bgColor="#FFF" />
      <S.ContactUsContainer>
        <S.Left>
          <S.ContactUsTitle>Get In Touch</S.ContactUsTitle>
          <S.ContactUsContent>
            Whether you have questions, collaboration ideas, or need assistance,
            our team is here to help. Fill out the form below, and we’ll get
            back to you as soon as possible.
          </S.ContactUsContent>
          <S.DetailView>
            <S.DetailsContainer>
              <S.Label>
                <img
                  src={location_icon}
                  alt="Office location"
                  style={{ marginRight: "8px", width: "20px", height: "20px" }}
                />
                Office
              </S.Label>
              <S.Text>
                1/13, 9th E cross, SBI Colony, JP Nagar 1st phase - 560078,
                Bengaluru, India
              </S.Text>
            </S.DetailsContainer>
            <S.DetailsContainer>
              <S.Label>
                <img
                  src={mobile_number_icon}
                  alt="Phone number"
                  style={{ marginRight: "8px", width: "20px", height: "20px" }}
                />
                Phone number
              </S.Label>
              <S.Text>+91 8105120349</S.Text>
            </S.DetailsContainer>
            <S.DetailsContainer>
              <S.Label>
                <img
                  src={email_icon}
                  alt="Email address"
                  style={{ marginRight: "8px", width: "20px", height: "20px" }}
                />
                Email
              </S.Label>
              <S.Text>hello@nextreach.ai</S.Text>
            </S.DetailsContainer>
          </S.DetailView>
          <S.ContactUsTitle>Follow us </S.ContactUsTitle>
          <S.FollowUsItemsContainer>
            <S.IconContainer
              onClick={() => {
                window.open("https://www.instagram.com/nextreach.ai/");
              }}
            >
              <S.FollowUsItem
                src={instagram_icon}
                alt="Instagram"
                style={{ width: "24px", height: "24px" }}
              />
            </S.IconContainer>
            <S.IconContainer
              onClick={() => {
                window.open(
                  "https://www.facebook.com/profile.php?id=61569235833230"
                );
              }}
            >
              <S.FollowUsItem
                src={facebook_icon}
                alt="Facebook"
                style={{ width: "18px", height: "18px" }}
              />
            </S.IconContainer>

            <S.IconContainer
              onClick={() => {
                window.open("https://www.linkedin.com/company/nextreachai/");
              }}
            >
              <S.FollowUsItem
                src={linkedin_icon}
                alt="LinkedIn"
                style={{ width: "18px", height: "18px" }}
              />
            </S.IconContainer>

            <S.IconContainer
              onClick={() => {
                window.open("https://x.com/nextreachai");
              }}
            >
              <S.FollowUsItem
                src={twitter_icon}
                alt="Twitter"
                style={{ width: "24px", height: "24px" }}
              />
            </S.IconContainer>

            <S.IconContainer
              onClick={() => {
                window.open("https://www.youtube.com/@nextreachai");
              }}
            >
              <S.FollowUsItem
                src={youtube_icon}
                alt="Youtube"
                style={{ width: "24px", height: "24px" }}
              />
            </S.IconContainer>
          </S.FollowUsItemsContainer>
        </S.Left>
        <S.Container>
          <S.Title>Contact us / Join Waitlist</S.Title>
          <S.ButtonContainer>
            <S.Button
              active={isBusinessOwnerButtonActive}
              onClick={handleBusinessCategory}
            >
              I am a business Owner
            </S.Button>
            <S.Button
              active={!isBusinessOwnerButtonActive}
              onClick={handleInfluencerCategory}
            >
              I am an influencer
            </S.Button>
          </S.ButtonContainer>
          <S.LoginDetailsContainer>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginTop: "1rem",
              }}
            >
              <S.PersonalDetailsView>
                <S.PersonalDetailLabel htmlFor="mobile_number">
                  <S.PersonalDetailLabelText>
                    Name{" "}
                    <span
                      style={{
                        color: "red",
                        fontWeight: 700,
                      }}
                    >
                      *
                    </span>
                  </S.PersonalDetailLabelText>
                </S.PersonalDetailLabel>
                <S.PersonalDetailInput
                  type="text"
                  id="name"
                  name="name"
                  value={contactUsForm.name}
                  onChange={(e) => handleInputChange(e, "name")}
                  required
                />
              </S.PersonalDetailsView>

              <S.PersonalDetailsView>
                <S.PersonalDetailLabel htmlFor="phone_number">
                  <S.PersonalDetailLabelText>
                    Phone number
                    <span
                      style={{
                        color: "red",
                        fontWeight: 700,
                      }}
                    >
                      *
                    </span>
                  </S.PersonalDetailLabelText>
                </S.PersonalDetailLabel>
                <S.PersonalDetailInput
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  value={contactUsForm.phone_number}
                  maxLength="10"
                  onChange={(e) => handleInputChange(e, "phone_number")}
                  required
                />
              </S.PersonalDetailsView>

              <S.PersonalDetailsView>
                <S.PersonalDetailLabel htmlFor="email">
                  <S.PersonalDetailLabelText>Email</S.PersonalDetailLabelText>
                </S.PersonalDetailLabel>
                <S.PersonalDetailInput
                  type="text"
                  id="email"
                  name="email"
                  value={contactUsForm.email}
                  onChange={(e) => handleInputChange(e, "email")}
                />
                {emailError && (
                  <span style={{ color: "red" }}>{emailError}</span>
                )}
              </S.PersonalDetailsView>

              <S.PersonalDetailsView>
                <S.PersonalDetailLabel htmlFor="social_media_handle">
                  <S.PersonalDetailLabelText>
                    Social Media Handle
                  </S.PersonalDetailLabelText>
                </S.PersonalDetailLabel>
                <S.PersonalDetailInput
                  type="text"
                  id="social_media_handle"
                  name="social_media_handle"
                  value={contactUsForm.social_media_handle}
                  onChange={(e) => handleInputChange(e, "social_media_handle")}
                />
              </S.PersonalDetailsView>

              <S.PersonalDetailsView>
                <S.PersonalDetailLabel htmlFor="message">
                  <S.PersonalDetailLabelText>Message</S.PersonalDetailLabelText>
                </S.PersonalDetailLabel>
                <S.PersonalDetailTextArea
                  type="text"
                  id="message"
                  name="message"
                  value={contactUsForm.message}
                  onChange={(e) => handleInputChange(e, "message")}
                  rows="7"
                  cols="50"
                />
              </S.PersonalDetailsView>

              <S.SendOTPButton type="submit" enabled={submitButtonEnabled}>
                SUBMIT
              </S.SendOTPButton>
            </form>
          </S.LoginDetailsContainer>
        </S.Container>
      </S.ContactUsContainer>
      <ModalPopup
        isOpen={isModalOpen}
        onClose={closeModal}
        buttonText={popupResponse?.button_text}
        status={popupResponse?.success ? "success" : "error"}
        heading={popupResponse?.header}
        subText={popupResponse?.message}
      />
      <PromotionalPopup />
      <Footer />
      <Whatsapp />
      <Navbar />
    </>
  );
};

export default ContactUs;
