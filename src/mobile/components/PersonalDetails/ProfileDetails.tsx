import React, { useEffect, useState } from "react";
import Header from "../../common/Header/Header.tsx";
import Footer from "../../common/Footer/Footer.tsx";
import person_icon from "../../../assets/ProfileDetails/icons/person_icon.svg";
import mobile_number_icon from "../../../assets/ProfileDetails/icons/mobile_number_icon.svg";
import profile_icon from "../../../assets/ProfileDetails/icons/profile_icon.svg";
import balance_profile_visit_count from "../../../assets/ProfileDetails/icons/balance_profile_visit_count_icon.svg";
import email_icon from "../../../assets/ProfileDetails/icons/email_icon.svg";
import city_icon from "../../../assets/ProfileDetails/icons/city_icon.svg";
import niche_icon from "../../../assets/ProfileDetails/icons/niche_icon.svg";
import instagram_icon from "../../../assets/ProfileDetails/icons/instagram_icon.svg";
import youtube_icon from "../../../assets/ProfileDetails/icons/youtube_icon.png";
import facebook_icon from "../../../assets/ProfileDetails/icons/facebook_icon.png";
import edit_icon from "../../../assets/ProfileDetails/icons/edit_icon.svg";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { OutlinedInput } from "@mui/material";

import * as S from "./ProfileDetails.style.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userIdSelector } from "../../../redux/selectors/profileDetailsSelector.js";
import {
  setProfileDetails,
  setUserId,
} from "../../../redux/actions/profileDetailsActions.js";
import { City, Niche } from "../../../desktop/constants/constants.js";
import ModalPopup from "../../../desktop/common/ModalPopup/ModalPopup.tsx";
import Navbar from "../../common/Navbar/Navbar.tsx";
import Whatsapp from "../../common/Whatsapp/Whatsapp.tsx";
import PromotionalPopup from "../../../desktop/common/PromotionalPopup/PromotionalPopup.tsx";

const ProfileDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isEditActive, setIsEditActive] = useState(true);
  const [isSaveActive, setIsSaveActive] = useState(false);
  const [isProfileUpdatedSuccessfully, setIsProfileUpdatedSuccessfully] =
    useState({});
  // const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleChange = (e) => {
  //   setSelectedOption(e.target.value);
  // };

  // const handleCityDropdownClick = () => {
  //   setIsCityDropdownOpen(!isCityDropdownOpen);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  const [initialProfileDetails, setInitialProfileDetails] = useState({
    balance_profile_visits: "",
    business_name: "",
    category: "",
    city: "",
    email: "",
    fb_username: "",
    id: -1,
    insta_username: "",
    name: "",
    niche: "",
    phone_number: "",
    profile_picture: "",
    total_profile_visited: 0,
    yt_username: "",
  });

  const user_id = useSelector(userIdSelector);
  // const profile_details = useSelector(profileDetailsSelector);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!user_id) return;
    fetch(
      `https://nextreach-backend-fxdmcnbgf3gsesht.southindia-01.azurewebsites.net/v1/web/profile/get/${user_id}`,
      {
        method: "GET",
        headers: { accept: "application/json" },
      }
    )
      .then((response) => {
        if (response?.status === 200) {
          return response.json();
        }
      })
      .then((response) => {
        dispatch(setProfileDetails({ profileDetails: response }));
        setInitialProfileDetails(response);
      });
  }, [user_id, dispatch]);

  const handleLogOut = () => {
    dispatch(setUserId({ userId: null }));
  };

  const handleEdit = () => {
    setIsEditActive(false);
    setIsSaveActive(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => setIsModalOpen(true);

  const handleSave = (event) => {
    event.preventDefault();
    fetch(
      `https://nextreach-backend-fxdmcnbgf3gsesht.southindia-01.azurewebsites.net/v1/web/profile/update/${user_id}`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: initialProfileDetails.name,
          business_name: initialProfileDetails.business_name,
          email: initialProfileDetails.email,
          city: initialProfileDetails.city,
          niche: initialProfileDetails.niche,
          category: initialProfileDetails.category,
          insta_username: initialProfileDetails.insta_username,
          yt_username: initialProfileDetails.yt_username,
          fb_username: initialProfileDetails.fb_username,
        }),
      }
    )
      .then((response) => {
        if (response?.status === 200) {
          return response.json();
        }
      })
      .then((response) => {
        setIsProfileUpdatedSuccessfully(response);
        setIsEditActive(true);
        setIsSaveActive(false);
        if (response?.success) {
          openModal();
        }
      });
  };

  const handleInputChange = (e, field) => {
    setInitialProfileDetails({
      ...initialProfileDetails,
      [field]: e.target.value,
    });
  };

  return (
    <>
      <Header bgColor="#FFF9F9" />
      <S.PersonalDetailsContainer>
        {user_id ? (
          <>
            <S.Container>
              <S.PersonalDetailsHeader>
                <img
                  src={person_icon}
                  alt="Person icon"
                  width={"40px"}
                  height={"40px"}
                />
                <S.Title>Profile Details</S.Title>
              </S.PersonalDetailsHeader>
              <form
                // onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.8rem",
                  marginTop: "1rem",
                  alignItems: "center",
                }}
              >
                <S.PersonalDetailsView>
                  <S.PersonalDetailLabel htmlFor="phone_number">
                    <S.PersonalDetailLabelIcon
                      src={mobile_number_icon}
                      alt="Phone number"
                    ></S.PersonalDetailLabelIcon>
                    <S.PersonalDetailLabelText>
                      Phone number
                    </S.PersonalDetailLabelText>
                  </S.PersonalDetailLabel>
                  <S.PersonalDetailInput
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    disabled={true}
                    style={{
                      backgroundColor: "#E9E9E9",
                    }}
                    value={`+91 ${initialProfileDetails?.phone_number}`}
                    required
                  />
                </S.PersonalDetailsView>
                <S.PersonalDetailsView>
                  <S.PersonalDetailLabel htmlFor="total_profile_visited">
                    <S.PersonalDetailLabelIcon
                      src={profile_icon}
                      alt="Total profile visit count"
                    ></S.PersonalDetailLabelIcon>
                    <S.PersonalDetailLabelText>
                      Total profile visit count
                    </S.PersonalDetailLabelText>
                  </S.PersonalDetailLabel>
                  <S.PersonalDetailInput
                    type="text"
                    id="total_profile_visited"
                    name="total_profile_visited"
                    disabled={true}
                    style={{
                      backgroundColor: "#E9E9E9",
                    }}
                    value={initialProfileDetails?.total_profile_visited}
                    required
                  />
                </S.PersonalDetailsView>
                <S.PersonalDetailsView>
                  <S.PersonalDetailLabel htmlFor="balance_profile_visits">
                    <S.PersonalDetailLabelIcon
                      src={balance_profile_visit_count}
                      alt="Balance profile visit count"
                    ></S.PersonalDetailLabelIcon>
                    <S.PersonalDetailLabelText>
                      Balance profile visit count
                    </S.PersonalDetailLabelText>
                  </S.PersonalDetailLabel>
                  <S.PersonalDetailInput
                    type="text"
                    id="balance_profile_visits"
                    name="balance_profile_visits"
                    disabled={true}
                    style={{
                      backgroundColor: "#E9E9E9",
                    }}
                    value={initialProfileDetails?.balance_profile_visits}
                    required
                  />
                </S.PersonalDetailsView>
                <S.PersonalDetailsView>
                  <S.PersonalDetailLabel htmlFor="name">
                    <S.PersonalDetailLabelIcon
                      src={profile_icon}
                      alt="Name"
                    ></S.PersonalDetailLabelIcon>
                    <S.PersonalDetailLabelText>Name</S.PersonalDetailLabelText>
                  </S.PersonalDetailLabel>

                  <S.EditPersonalDetailInputContainer>
                    <S.PersonalDetailInput
                      type="text"
                      id="name"
                      name="name"
                      value={initialProfileDetails?.name}
                      onChange={(e) => handleInputChange(e, "name")}
                      required
                      disabled={isEditActive}
                      style={{
                        backgroundColor: isEditActive ? "#E9E9E9" : "#FFF",
                      }}
                    />
                    <img
                      src={edit_icon}
                      alt="Edit icon"
                      style={{
                        position: "relative",
                        left: "-8%",
                        paddingTop: "8px",
                      }}
                      width={"16px"}
                      height={"16px"}
                    />
                  </S.EditPersonalDetailInputContainer>
                </S.PersonalDetailsView>
                <S.PersonalDetailsView>
                  <S.PersonalDetailLabel htmlFor="business_name">
                    <S.PersonalDetailLabelIcon
                      src={profile_icon}
                      alt="Business Name"
                    ></S.PersonalDetailLabelIcon>
                    <S.PersonalDetailLabelText>
                      Business Name
                    </S.PersonalDetailLabelText>
                  </S.PersonalDetailLabel>

                  <S.EditPersonalDetailInputContainer>
                    <S.PersonalDetailInput
                      type="text"
                      id="business_name"
                      name="business_name"
                      value={initialProfileDetails?.business_name}
                      onChange={(e) => handleInputChange(e, "business_name")}
                      required
                      disabled={isEditActive}
                      style={{
                        backgroundColor: isEditActive ? "#E9E9E9" : "#FFF",
                      }}
                    />
                    <img
                      src={edit_icon}
                      alt="Edit icon"
                      style={{
                        position: "relative",
                        left: "-8%",
                        paddingTop: "8px",
                      }}
                      width={"16px"}
                      height={"16px"}
                    />
                  </S.EditPersonalDetailInputContainer>
                </S.PersonalDetailsView>
                <S.PersonalDetailsView>
                  <S.PersonalDetailLabel htmlFor="email">
                    <S.PersonalDetailLabelIcon
                      src={email_icon}
                      alt="Email"
                    ></S.PersonalDetailLabelIcon>
                    <S.PersonalDetailLabelText>Email</S.PersonalDetailLabelText>
                  </S.PersonalDetailLabel>

                  <S.EditPersonalDetailInputContainer>
                    <S.PersonalDetailInput
                      type="text"
                      id="email"
                      name="email"
                      value={initialProfileDetails?.email}
                      onChange={(e) => handleInputChange(e, "email")}
                      required
                      disabled={isEditActive}
                      style={{
                        backgroundColor: isEditActive ? "#E9E9E9" : "#FFF",
                      }}
                    />
                    <img
                      src={edit_icon}
                      alt="Edit icon"
                      style={{
                        position: "relative",
                        left: "-8%",
                        paddingTop: "8px",
                      }}
                      width={"16px"}
                      height={"16px"}
                    />
                  </S.EditPersonalDetailInputContainer>
                </S.PersonalDetailsView>
                <S.PersonalDetailsView>
                  <S.PersonalDetailLabel htmlFor="city">
                    <S.PersonalDetailLabelIcon
                      src={city_icon}
                      alt="City"
                    ></S.PersonalDetailLabelIcon>
                    <S.PersonalDetailLabelText>City</S.PersonalDetailLabelText>
                  </S.PersonalDetailLabel>
                  {/* <S.DropdownContainer>
                    <S.Select
                      value={initialProfileDetails?.city}
                      onChange={(e) => handleInputChange(e, "city")}
                      disabled={isEditActive}
                      style={{
                        backgroundColor: isEditActive ? "#E9E9E9" : "#FFF",
                      }}
                    >
                      {Object.entries(City).map(([key, val]) => {
                        return <S.Option value={key}>{val}</S.Option>;
                      })}
                    </S.Select>
                  </S.DropdownContainer> */}
                  <FormControl
                    sx={{ m: 1 }}
                    size="small"
                    style={{ margin: 0, width: "97%" }}
                  >
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="City"
                      displayEmpty
                      value={initialProfileDetails?.city}
                      onChange={(e) => handleInputChange(e, "city")}
                      disabled={isEditActive}
                      input={<OutlinedInput />}
                      inputProps={{ "aria-label": "Without label" }}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            "& .MuiList-root": {
                              paddingTop: 0, // Remove padding-top
                              paddingBottom: 0, // Remove padding-bottom
                            },
                          },
                        },
                      }}
                      style={{
                        color: "#333",
                        fontFamily: "Avenir Next LT Pro",
                        fontStyle: "normal",
                        fontWeight: "400",
                        borderRadius: "12px",
                        backgroundColor: isEditActive ? "#E9E9E9" : "#FFFFFF",
                      }}
                    >
                      {Object.entries(City).map(([key, val]) => {
                        return (
                          <MenuItem
                            value={key}
                            style={{
                              color: "#333",
                              fontFamily: "Avenir Next LT Pro",
                              fontSize: "16px",
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "normal",
                              backgroundColor: "#FFF",
                            }}
                            sx={{
                              minHeight: "35px",
                            }}
                          >
                            {val}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </S.PersonalDetailsView>
                <S.PersonalDetailsView>
                  <S.PersonalDetailLabel htmlFor="niche">
                    <S.PersonalDetailLabelIcon
                      src={niche_icon}
                      alt="Niche"
                    ></S.PersonalDetailLabelIcon>
                    <S.PersonalDetailLabelText>Niche</S.PersonalDetailLabelText>
                  </S.PersonalDetailLabel>
                  {/* <S.DropdownContainer>
                    <S.Select
                      value={initialProfileDetails?.niche}
                      onChange={(e) => handleInputChange(e, "niche")}
                      disabled={isEditActive}
                      style={{
                        backgroundColor: isEditActive ? "#E9E9E9" : "#FFF",
                      }}
                    >
                      {Object.entries(Niche).map(([key, val]) => {
                        return <S.Option value={key}>{val}</S.Option>;
                      })}
                    </S.Select>
                  </S.DropdownContainer> */}

                  <FormControl
                    sx={{ m: 1 }}
                    size="small"
                    style={{ margin: 0, width: "97%" }}
                  >
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Niche"
                      displayEmpty
                      value={initialProfileDetails?.niche}
                      onChange={(e) => handleInputChange(e, "niche")}
                      disabled={isEditActive}
                      input={<OutlinedInput />}
                      inputProps={{ "aria-label": "Without label" }}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            "& .MuiList-root": {
                              paddingTop: 0, // Remove padding-top
                              paddingBottom: 0, // Remove padding-bottom
                            },
                          },
                        },
                      }}
                      style={{
                        color: "#333",
                        fontFamily: "Avenir Next LT Pro",
                        fontStyle: "normal",
                        fontWeight: "400",
                        borderRadius: "12px",
                        backgroundColor: isEditActive ? "#E9E9E9" : "#FFFFFF",
                      }}
                    >
                      {Object.entries(Niche).map(([key, val]) => {
                        return (
                          <MenuItem
                            value={key}
                            style={{
                              color: "#333",
                              fontFamily: "Avenir Next LT Pro",
                              fontSize: "16px",
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "normal",
                              backgroundColor: "#FFF",
                            }}
                            sx={{
                              minHeight: "35px",
                            }}
                          >
                            {val}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </S.PersonalDetailsView>
                <S.PersonalDetailsView>
                  <S.PersonalDetailLabel htmlFor="instagram_username">
                    <S.PersonalDetailLabelIcon
                      src={instagram_icon}
                      alt="Instagram"
                    ></S.PersonalDetailLabelIcon>
                    <S.PersonalDetailLabelText>
                      Instagram Username
                    </S.PersonalDetailLabelText>
                  </S.PersonalDetailLabel>
                  <S.EditPersonalDetailInputContainer>
                    <S.PersonalDetailInput
                      type="text"
                      id="instagram_username"
                      name="instagram_username"
                      value={initialProfileDetails?.insta_username}
                      onChange={(e) => handleInputChange(e, "insta_username")}
                      required
                      disabled={isEditActive}
                      style={{
                        backgroundColor: isEditActive ? "#E9E9E9" : "#FFF",
                      }}
                    />
                    <img
                      src={edit_icon}
                      alt="Edit icon"
                      style={{
                        position: "relative",
                        left: "-8%",
                        paddingTop: "8px",
                      }}
                      width={"16px"}
                      height={"16px"}
                    />
                  </S.EditPersonalDetailInputContainer>
                </S.PersonalDetailsView>{" "}
                <S.PersonalDetailsView>
                  <S.PersonalDetailLabel htmlFor="youtube_username">
                    <S.PersonalDetailLabelIcon
                      src={youtube_icon}
                      alt="Youtube"
                    ></S.PersonalDetailLabelIcon>
                    <S.PersonalDetailLabelText>
                      Youtube Username
                    </S.PersonalDetailLabelText>
                  </S.PersonalDetailLabel>
                  <S.EditPersonalDetailInputContainer>
                    <S.PersonalDetailInput
                      type="text"
                      id="yt_username"
                      name="yt_username"
                      value={initialProfileDetails?.yt_username}
                      onChange={(e) => handleInputChange(e, "yt_username")}
                      required
                      disabled={isEditActive}
                      style={{
                        backgroundColor: isEditActive ? "#E9E9E9" : "#FFF",
                      }}
                    />
                    <img
                      src={edit_icon}
                      alt="Edit icon"
                      style={{
                        position: "relative",
                        left: "-8%",
                        paddingTop: "8px",
                      }}
                      width={"16px"}
                      height={"16px"}
                    />
                  </S.EditPersonalDetailInputContainer>
                </S.PersonalDetailsView>{" "}
                <S.PersonalDetailsView>
                  <S.PersonalDetailLabel htmlFor="facebook_username">
                    <S.PersonalDetailLabelIcon
                      src={facebook_icon}
                      alt="Facebook"
                    ></S.PersonalDetailLabelIcon>
                    <S.PersonalDetailLabelText>
                      Facebook Username
                    </S.PersonalDetailLabelText>
                  </S.PersonalDetailLabel>

                  <S.EditPersonalDetailInputContainer>
                    <S.PersonalDetailInput
                      type="text"
                      id="facebook_username"
                      name="facebook_username"
                      value={initialProfileDetails?.fb_username}
                      onChange={(e) => handleInputChange(e, "fb_username")}
                      required
                      disabled={isEditActive}
                      style={{
                        backgroundColor: isEditActive ? "#E9E9E9" : "#FFF",
                      }}
                    />
                    <img
                      src={edit_icon}
                      alt="Edit icon"
                      style={{
                        position: "relative",
                        left: "-8%",
                        paddingTop: "8px",
                      }}
                      width={"16px"}
                      height={"16px"}
                    />
                  </S.EditPersonalDetailInputContainer>
                </S.PersonalDetailsView>{" "}
                <S.PersonalDetailsFooter>
                  <S.SaveButton
                    type="button"
                    active={isEditActive}
                    onClick={handleEdit}
                  >
                    Edit
                  </S.SaveButton>
                  <S.SaveButton
                    type="submit"
                    active={isSaveActive}
                    onClick={handleSave}
                  >
                    Save
                  </S.SaveButton>
                </S.PersonalDetailsFooter>
              </form>
              <ModalPopup
                isOpen={isModalOpen}
                onClose={closeModal}
                status={
                  isProfileUpdatedSuccessfully?.success ? "success" : "error"
                }
                heading={isProfileUpdatedSuccessfully?.header}
                subText={isProfileUpdatedSuccessfully?.message}
                buttonText={isProfileUpdatedSuccessfully?.button_text}
              />
            </S.Container>

            <S.LogoutContainer>
              <S.LogoutButton
                style={{ padding: "16px 25px" }}
                onClick={handleLogOut}
              >
                Log out
              </S.LogoutButton>
            </S.LogoutContainer>
          </>
        ) : (
          <div
            style={{
              padding: "2rem 0",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <S.Text>Please log in to access your profile.</S.Text>
            <S.LogoutContainer
              onClick={() => {
                navigate("/login_signup");
                window.scrollTo(0, 0);
              }}
            >
              <S.LogoutButton>Login/Signup</S.LogoutButton>
            </S.LogoutContainer>
          </div>
        )}
      </S.PersonalDetailsContainer>
      <PromotionalPopup />
      <Footer />
      <Whatsapp />
      <Navbar />
    </>
  );
};

export default ProfileDetails;
