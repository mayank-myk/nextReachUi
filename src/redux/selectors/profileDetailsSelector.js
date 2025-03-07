export const userIdSelector = (state) => {
  return state.profileDetails.userId;
};

export const profileDetailsSelector = (state) =>{
  return state.profileDetails.profileDetails;
}