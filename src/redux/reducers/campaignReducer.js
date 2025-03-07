const initialState = {};

const campaignReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_CAMPAIGN_ID":
      return {
        ...state,
        ...action.payload,
      };
    case "SET_CAMPAIGN_OVERVIEW_DETAILS":
      return {
        ...state,
        campaignOverviewDetails: action.payload,
      };
    default:
      return state;
  }
};

export default campaignReducer;
