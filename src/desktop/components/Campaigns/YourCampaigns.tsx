import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Header from "../../common/Header/Header.tsx";
import Footer from "../../common/Footer/Footer.tsx";
import * as S from "./YourCampaigns.style.js";
import Campaign from "./components/Campaign.tsx";
import { userIdSelector } from "../../../redux/selectors/profileDetailsSelector.js";
import { useNavigate } from "react-router-dom";
import Whatsapp from "../../common/Whatsapp/Whatsapp.tsx";
import PromotionalPopup from "../../common/PromotionalPopup/PromotionalPopup.tsx";

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

  const handleCampaignChange = (campaign) => {
    setActiveCampagin(campaign);
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
          <>
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
          </>
        ) : (
          <>
            <S.Header>
              <S.Title
                style={{
                  borderBottom:
                    activeCampagin === "ALL" ? "3px solid #E66A44" : null,
                }}
                onClick={() => handleCampaignChange("ALL")}
              >
                All
              </S.Title>
              <S.Title
                style={{
                  borderBottom:
                    activeCampagin === "PROCESSING"
                      ? "3px solid #E66A44"
                      : null,
                }}
                onClick={() => handleCampaignChange("PROCESSING")}
              >
                Processing
              </S.Title>
              <S.Title
                style={{
                  borderBottom:
                    activeCampagin === "IN_PROGRESS"
                      ? "3px solid #E66A44"
                      : null,
                }}
                onClick={() => handleCampaignChange("IN_PROGRESS")}
              >
                In-Progress
              </S.Title>
              <S.Title
                style={{
                  borderBottom:
                    activeCampagin === "COMPLETED" ? "3px solid #E66A44" : null,
                }}
                onClick={() => handleCampaignChange("COMPLETED")}
              >
                Completed
              </S.Title>
              <S.Title
                style={{
                  borderBottom:
                    activeCampagin === "CANCELLED" ? "3px solid #E66A44" : null,
                }}
                onClick={() => handleCampaignChange("CANCELLED")}
              >
                Cancelled
              </S.Title>
            </S.Header>

            {(campaigns === null && activeCampagin === "ALL") ||
            (campaigns &&
              campaigns.length === 0 &&
              activeCampagin === "ALL") ? (
              <S.Text
                style={{
                  width: "50%",
                  color: "#9F9F9F",
                  fontFamily: "Avenir Next LT Pro",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
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
    </>
  );
};

export default YourCampaigns;
