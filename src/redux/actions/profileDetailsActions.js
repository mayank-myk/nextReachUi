export const setUserId = (userIdData) => {
  return {
    type: "SET_USER_ID",
    payload: userIdData,
  };
};


export const setProfileDetails = (profileDetails) =>{
  return{
    type:"SET_PROFILE_DETAILS",
    payload: profileDetails
  }
}