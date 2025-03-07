export const setInfluencerMatric = (influencerMatric) => {
  return {
    type: "SET_INFLUENCER_MATRIC",
    payload: influencerMatric,
  };
};


export const setCollabOption = (collabOption) => {
  return {
    type: "SET_COLLAB_OPTION",
    payload: collabOption,
  };
};


export const resetCollabOption =  () =>{
  return {
    type: "RESET_COLLAB_OPTION"
  }
}


// export const setLoginDetails = (phoneNumber) => {
//   return {
//     type: "SET_LOGIN_DETAILS",
//     payload: phoneNumber,
//   };
// };

// export const setUpdateBookingDetails = (updateBookingDetails) => {
//   return {
//     type: "SET_UPDATE_BOOKING_DETAILS",
//     payload: updateBookingDetails,
//   };
// };

// export const setUpdateBookingDetail = (updateBookingDetail) => {
//   return {
//     type: "SET_UPDATE_BOOKING_DETAIL",
//     payload: updateBookingDetail,
//   };
// };

// export const resetUpdateBookingDetail = () => {
//   return {
//     type: "RESET_UPDATE_BOOKING_DETAIL"
//   };
// };

// export const setGalleryImages = (galleryImages) => {
//   return {
//     type: "SET_GALLERY_IMAGES",
//     payload: galleryImages,
//   };
// };

// export const resetGalleryImages = () => {
//   return {
//     type: "RESET_GALLERY_IMAGES",
//   };
// };
