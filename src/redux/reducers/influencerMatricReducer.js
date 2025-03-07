const initialState = { };

const influencerMatricReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INFLUENCER_MATRIC":
      return {
        ...state,
        influencerMatric: action.payload,
      };
    case "SET_COLLAB_OPTION":
      return {
        ...state,
        collabOption: action.payload,
      };
    case "RESET_COLLAB_OPTION":
      return {
        ...state,
        collabOption: "",
      };
    default:
      return state;
  }
};

export default influencerMatricReducer;
