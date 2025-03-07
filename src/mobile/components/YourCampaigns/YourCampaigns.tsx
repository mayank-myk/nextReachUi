import React, { useEffect, useState } from "react";
import Header from "../../common/Header/Header.tsx";
import Footer from "../../common/Footer/Footer.tsx";
import * as S from "./YourCampaigns.style.js";
import Campaign from "./components/Campaign.tsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userIdSelector } from "../../../redux/selectors/profileDetailsSelector.js";
import { Status } from "../../constants/constants.js";
import Navbar from "../../common/Navbar/Navbar.tsx";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { OutlinedInput } from "@mui/material";
import Whatsapp from "../../common/Whatsapp/Whatsapp.tsx";
import PromotionalPopup from "../../../desktop/common/PromotionalPopup/PromotionalPopup.tsx";

const YourCampaigns = () => {
  const navigate = useNavigate();
  const [activeCampagin, setActiveCampagin] = useState("ALL");
  const [initialCampaigns, setInitialCampaigns] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const userId = useSelector(userIdSelector);

  useEffect(() => {
    if (!userId) return;
    fetch(
      `https://nextreach-backend-fxdmcnbgf3gsesht.southindia-01.azurewebsites.net/v1/web/campaign/all/${userId}`,
      {
        method: "GET",
        headers: { accept: "application/json" },
      }
    )
      .then((response) => {
        if (response?.status === 200) return response.json();
      })
      .then((response) => {
        setCampaigns(response);
        setInitialCampaigns(response);
      });
  }, [userId]);

  useEffect(() => {
    if (activeCampagin === "PROCESSING") {
      setCampaigns(
        [...initialCampaigns].filter(
          (campaign) => campaign.status === "PROCESSING"
        )
      );
    } else if (activeCampagin === "IN_PROGRESS") {
      setCampaigns(
        [...initialCampaigns].filter(
          (campaign) => campaign.status === "IN_PROGRESS"
        )
      );
    } else if (activeCampagin === "COMPLETED") {
      setCampaigns(
        [...initialCampaigns].filter(
          (campaign) => campaign.status === "COMPLETED"
        )
      );
    } else if (activeCampagin === "CANCELLED") {
      setCampaigns(
        [...initialCampaigns].filter(
          (campaign) => campaign.status === "CANCELLED"
        )
      );
    } else if (activeCampagin === "ALL") {
      setCampaigns([...initialCampaigns]);
    }
  }, [activeCampagin, initialCampaigns]);

  const handleCampaignChange = (event) => {
    setActiveCampagin(event.target.value);
  };

  return (
    <>
      <Header bgColor="#FFF9F9" />
      <S.Container>
        <S.YourCampaignsView>
          <S.YourCampaignsTitle>My Campaigns</S.YourCampaignsTitle>
          <S.YourCampaignsDescription>
            Check Status of your collab requests, track ongoing campaigns, make
            payments and much more.
          </S.YourCampaignsDescription>
        </S.YourCampaignsView>
        {!userId ? (
          <S.LoginView>
            <S.Text>
              Please log in to access all campaigns and view their details.
            </S.Text>
            <S.LogoutContainer>
              <S.LogoutBtn
                style={{ width: "213px" }}
                onClick={() => {
                  navigate("/login_signup?redirectFrom=your_campaigns");
                  window.scrollTo(0, 0);
                }}
              >
                Login/Signup
              </S.LogoutBtn>
            </S.LogoutContainer>
          </S.LoginView>
        ) : (
          <>
            {/* <S.DropdownContainer>
              <S.Select
                value={activeCampagin}
                onChange={(event) => handleCampaignChange(event)}
                aria-placeholder="Select your campaign"
              >
                {Object.entries(Status).map(([key, val]) => {
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
                value={activeCampagin}
                onChange={(event) => handleCampaignChange(event)}
                input={<OutlinedInput />}
                inputProps={{ "aria-label": "Without label" }}
                style={{
                  color: "#333",
                  fontFamily: "Avenir Next LT Pro",
                  fontStyle: "normal",
                  fontWeight: "400",
                  borderRadius: "12px",
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      "& .MuiList-root": {
                        paddingTop: 0, // Remove padding-top
                        paddingBottom: 0, // Remove padding-bottom
                      },
                    },
                  },
                  sx: {
                    "& .MuiPaper-root": {
                      left: "8px !important", // Shift the menu to the left by 5px
                    },
                  },
                }}
              >
                {Object.entries(Status).map(([key, val]) => {
                  return (
                    <MenuItem
                      value={key}
                      style={{
                        color: "#333",
                        fontFamily: "Avenir Next LT Pro",
                        fontSize: "20px",
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

            {(campaigns === null && activeCampagin === "ALL") ||
            (campaigns &&
              campaigns.length === 0 &&
              activeCampagin === "ALL") ? (
              <S.Text
                style={{
                  width: "80%",
                  color: "#9F9F9F",
                  fontFamily: "Avenir Next LT Pro",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  margin: "1rem 1rem 2rem 1rem",
                }}
              >
                It looks like you don't have any campaigns yet. Start by
                exploring influencer profiles and clicking the Collaborate
                button on their details page to create your first campaign!
              </S.Text>
            ) : (
              <S.CampaignContainer>
                {campaigns &&
                  campaigns.length > 0 &&
                  campaigns.map((campaign) => {
                    return <Campaign campaign={campaign}></Campaign>;
                  })}
              </S.CampaignContainer>
            )}
          </>
        )}
      </S.Container>
      <PromotionalPopup />
      <Footer />
      <Whatsapp />
      <Navbar />
    </>
  );
};

export default YourCampaigns;
