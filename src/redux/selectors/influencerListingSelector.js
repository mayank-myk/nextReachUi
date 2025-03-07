export const getInfluencersListing = (state) => {
  return state?.influencersListing?.influencersListing;
};

export const getInfluencersListingFilters = (state) => {
  return state?.influencersListing?.influencersListing?.filters_applied;
};

export const getQueryString = (state) => {
  return state?.influencersListing?.queryString || "";
}

export const getPageNoSelector = (state) => {
  return state?.influencersListing?.pageNo;
}

export const getSortAppliedSelector = (state) => {
  return state?.influencersListing?.sortApplied;
}

export const getContentPrice = (state) => {
  return state?.influencersListing?.contentPrice
}

export const getIsFilterOpen = (state) => {
  return state?.influencersListing?.isFilterOpen
}

// export const getSelectedTheater = (state) => {
//   return state.booking?.selectedTheater;
// };

// export const getSelectedTheaterTime = (state) => {
//   return state.booking?.selectedTheaterTime;
// };

// export const getActiveTimeSlotInd = (state) => {
//   return state.booking?.activeTimeSlotInd;
// };

// export const getSelectedTheaterDate = (state) => {
//   return state.booking?.selectedTheaterDate;
// };

// export const getBookingDetails = (state) => {
//   return state.booking.bookingDetails;
// };

// export const getPersonalDetails = (state) => {
//   return state?.booking?.personalDetails;
// };

// export const getIsBookingDetailsValid = (state) => {
//   return state?.booking?.isBookingDetailsValid;
// };

// export const getIsOccasionPageValid = (state) => {
//   return state?.booking?.isOccasionPageValid;
// };

// export const getActiveCakes = (state) => {
//   return state.booking?.activeCakes;
// };

// export const getSelectedCakes = (state) => {
//   return state.booking?.selectedCakes;
// };

// export const getActiveDecorations = (state) => {
//   return state.booking.activeDecorations;
// };

// export const getActiveGifts = (state) => {
//   return state.booking.activeGifts;
// };

// export const getActiveServices = (state) => {
//   return state.booking.activeServices;
// };

// export const getBookingSummary = (state) => {
//   return state.booking.bookingSummary;
// };

// export const getBookingSummaryTheaterCost = (state) => {
//   return state.booking?.bookingSummary?.theaterCost;
// };

// export const getFogCount = (state) => {
//   return state.booking.fogCount;
// };

// export const getCouponInfo = (state) => {
//   return state.booking?.bookingSummary?.coupon;
// };

// export const getExtraNumberOfPeople = (state) => {
//   return state?.booking?.extraNumberOfPeople;
// };

// export const getBookingSummaryCakes = (state) => {
//   return state?.booking?.bookingSummary?.cake;
// };

// export const getBookingSummaryAddons = (state) => {
//   return state?.booking?.bookingSummary?.addOns;
// };

// export const getDecorationSelected = (state) => {
//   return state?.booking?.bookingSummary?.isDecorationSelected;
// };

// export const getSubTotalAmount = (state) => {
//   return state.booking.bookingSummary.subTotal;
// };

// export const getAdavanceAmount = (state) => {
//   return state?.booking?.selectedTheater?.advance;
// };

// export const getSelectedOccasion = (state) => {
//   return state?.booking?.selectedOccasion;
// };

// export const getTheaterTimeSlots = (state) => {
//   return state?.booking?.theaterTimeSlots;
// };

// export const getSelectedLocation = (state) => {
//   return state?.booking?.selectedLocation;
// };

// export const getSelectedLocationTheaterCodes = (state) => {
//   return state?.booking?.selectedLocation?.code;
// };

// export const getSelectedCity = (state) => {
//   return state?.booking?.selectedCity;
// };

// export const getCostPerExtraPerson = (state) => {
//   return state?.booking?.selectedTheater?.costPerExtraPerson;
// };

// export const getCostPerExtraPersonShort = (state) => {
//   return state?.booking?.selectedTheater?.costPerExtraPersonShort;
// };

// export const getLocationsCityWise = (state) => {
//   return state?.booking?.locationsCityWise;
// };

// export const getShortSlotSelected = (state) => {
//   return state?.booking?.shortSlotSelected;
// };

// export const getIsCouponAppliedSuccessfully = (state) => {
//   return state?.booking?.isCouponApplied;
// };

// export const getSelectedTimeSlotInd = (state) => {
//   return state?.booking?.selectedTimeSlotInd;
// };

// export const getBookingDetailsFormValid = (state) => {
//   return state?.booking?.bookingDetailsFormValid;
// };
