import React, { useState, useEffect } from "react";
import Header from "../../common/Header/Header.tsx";
import Footer from "../../common/Footer/Footer.tsx";
import CampaignOverviewHeader from "./components/CampaignOverviewHeader/CampaignOverviewHeader.tsx";
import CampaignStages from "./components/CampaignStages/CampaignStages.tsx";
import CampaignOverviewDetails from "./components/CampaignOverviewDetails/CampaignOverviewDetails.tsx";
import Rating from "./components/Rating/Rating.tsx";
import { useNavigate, useParams } from "react-router-dom";
import ModalPopup from "../../common/ModalPopup/ModalPopup.tsx";
import Whatsapp from "../../common/Whatsapp/Whatsapp.tsx";
import PromotionalPopup from "../../common/PromotionalPopup/PromotionalPopup.tsx";

const CampaignOverview = () => {
  const { campaignId } = useParams();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [campaignDetails, setCampaignDetails] = useState() || {};

  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!campaignDetails || Object.keys(campaignDetails)?.length === 0) {
      fetch(
        `https://nextreach-backend-fxdmcnbgf3gsesht.southindia-01.azurewebsites.net/v1/web/campaign/detail/${campaignId}`
      )
        .then((response) => {
          return response.json();
        })
        .then((campaignDetails) => {
          if (
            campaignDetails &&
            "success" in campaignDetails &&
            !campaignDetails["success"]
          ) {
            setError(true);
            openModal();
          }
          setCampaignDetails(campaignDetails);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [campaignDetails, campaignId]);

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/your_campaigns");
    window.scrollTo(0, 0);
  };

  if (!campaignDetails) return;

  return (
    <>
      <Header />
      <CampaignOverviewHeader
        influencerDetails={campaignDetails?.influencer_basic_detail}
      />
      <CampaignStages campaignDetails={campaignDetails} />
      <CampaignOverviewDetails
        pendingDeliverables={campaignDetails?.pending_deliverables}
        postInsights={campaignDetails?.post_insights}
      />
      {campaignDetails?.stage === "COMPLETED" ? (
        <Rating
          rating={campaignDetails?.rating}
          review={campaignDetails?.review}
        />
      ) : null}

      <PromotionalPopup />
      <Footer />
      <Whatsapp />
      {error ? (
        <ModalPopup
          isOpen={isModalOpen}
          onClose={closeModal}
          buttonText={campaignDetails?.button_text}
          status="error"
          heading={campaignDetails?.header}
          subText={campaignDetails?.message}
        />
      ) : null}
    </>
  );
};

export default CampaignOverview;
