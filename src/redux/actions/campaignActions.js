export const setActiveCampaignId = (activeCampaignId) => {
  return {
    type: "SET_ACTIVE_CAMPAIGN_ID",
    payload: activeCampaignId,
  };
};


export const setCampaignOverviewDetails = (campaignOverviewDetails) =>{
  return {
    type: "SET_CAMPAIGN_OVERVIEW_DETAILS",
    payload: campaignOverviewDetails
  }
}