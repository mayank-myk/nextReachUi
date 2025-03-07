const initialState = {};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_HOME_META_DATA":
      return {
        ...state,
        metaData: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
