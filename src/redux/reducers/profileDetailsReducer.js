const initialState = {};

const profileDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_ID":
      return {
        ...state,
        ...action.payload,
      };
    case "SET_PROFILE_DETAILS":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default profileDetailsReducer;
