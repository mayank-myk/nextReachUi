export const setInfluencerListing = (influencerListing) => {
  return {
    type: "SET_INFLUENCER_LISTING",
    payload: influencerListing,
  };
};

export const setInfluencerListingFilters = (influencerListingFilters) => {
  return {
    type: "SET_INFLUENCER_LISTING_FILTERS",
    payload: influencerListingFilters,
  };
};


export const setQueryString = (queryString) => {
  return {
    type: "SET_QUERY_STRING",
    payload: queryString,
  };
};


export const setPageNo = (pageNo) =>{
  return{
    type: "SET_PAGE_NO",
    payload: pageNo
  }
}

export const setStoreSortApplied = (sortApplied) =>{
  return{
    type: "SET_SORT_APPLIED",
    payload: sortApplied
  }
}

export const setContentPrice = (contentPrice) =>{
  return{
    type: "SET_CONTENT_PRICE",
    payload: contentPrice
  }
}

export const resetContentPrice = () => {
  return {
    type: "RESET_CONTENT_PRICE"
  }
}

export const resetInfluencerListing = () =>{
  return {
    type: "RESET_INFLUENCER_LISTING"
  }
}

export const resetInfluencerListingFilters = () =>{
  return {
    type: "RESET_INFLUENCER_LISTING_FILTERS"
  }
}

export const setIsFilterOpen = ()=> {
 return {
    type: "SET_IS_FILTER_OPEN",
  }
}

export const resetIsFilterOpen = ()=> {
 return {
    type: "RESET_IS_FILTER_OPEN"
  }
}
// export const setTheaterInfo = (theaterInfo) => {
//   return {
//     type: "SET_THEATER_INFO",
//     payload: theaterInfo,
//   };
// };

// export const setActiveTimeSlotInd = (activeTimeSlotInd) => {
//   return {
//     type: "SET_ACTIVE_TIME_SLOT_IND",
//     payload: activeTimeSlotInd,
//   };
// };

// export const setFogCount = (fogCount) => {
//   console.log("set works ", fogCount);
//   return {
//     type: "SET_FOG_COUNT",
//     payload: fogCount,
//   };
// };

// export const setSelectedTheater = (theaterDetails) => {
//   return {
//     type: "SET_SELECTED_THEATER",
//     payload: theaterDetails,
//   };
// };

// export const setSelectedTheaterTime = (theaterTime) => {
//   return {
//     type: "SET_SELECTED_THEATER_TIME",
//     payload: theaterTime,
//   };
// };

// export const setSelectedTimeSlotInd = (timeSlotInd) => {
//   return {
//     type: "SET_SELECTED_TIME_SLOT_IND",
//     payload: timeSlotInd,
//   };
// };

// export const setSelectedTheaterMonth = (selectedTheaterMonth) => {
//   return {
//     type: "SET_SELECTED_THEATER_MONTH",
//     payload: selectedTheaterMonth,
//   };
// };

// export const setSelectedTheaterDay = (selectedTheaterDay) => {
//   return {
//     type: "SET_SELECTED_THEATER_DAY",
//     payload: selectedTheaterDay,
//   };
// };

// export const setShortSlotSelected = (shortSlotSelected) => {
//   return {
//     type: "SET_SHORT_SLOT_SELECTED",
//     payload: shortSlotSelected,
//   };
// };

// export const setSelectedTheaterDate = (theaterDate) => {
//   return {
//     type: "SET_SELECTED_THEATER_DATE",
//     payload: theaterDate,
//   };
// };

// export const setSelectedLocation = (location) => {
//   return {
//     type: "SET_SELECTED_LOCATION",
//     payload: location,
//   };
// };

// export const setSelectedOccasion = (occasion) => {
//   return {
//     type: "SET_SELECTED_OCCASION",
//     payload: occasion,
//   };
// };

// export const setBookingDetails = (bookingDetails) => {
//   return {
//     type: "SET_BOOKING_DETAILS",
//     payload: bookingDetails,
//   };
// };

// export const setBookingDetailsFormValid = (isFormValid) => {
//   return {
//     type: "SET_BOOKING_DETAILS_FORM_VALID",
//     payload: isFormValid,
//   };
// };

// export const setTheaterTimeSlots = (theaterTimeSlots) => {
//   return {
//     type: "SET_THEATER_TIME_SLOTS",
//     payload: theaterTimeSlots,
//   };
// };

// export const setPersonalDetails = (personalDetails) => {
//   return {
//     type: "SET_PERSONAL_DETAILS",
//     payload: personalDetails,
//   };
// };

// export const setIsBooking = (isBookingDetailsValid) => {
//   return {
//     type: "SET_IS_BOOKING_DETAILS_VALID",
//     payload: isBookingDetailsValid,
//   };
// };

// export const setIsOccasionPageValid = (isOccasionPageValid) => {
//   return {
//     type: "SET_IS_OCCASION_PAGE_VALID",
//     payload: isOccasionPageValid,
//   };
// };

// export const setBookingSummary = (bookingSummary) => {
//   return {
//     type: "SET_BOOKING_SUMMARY",
//     payload: bookingSummary,
//   };
// };

// export const setBookingSummaryTheaterCost = (theaterDeatils) => {
//   return {
//     type: "SET_BOOKING_SUMMARY_THEATER",
//     payload: theaterDeatils,
//   };
// };

// export const setBookingSummaryCoupon = (coupon) => {
//   return {
//     type: "SET_BOOKING_SUMMARY_COUPON",
//     payload: coupon,
//   };
// };

// export const setBookingSummaryDecoration = (isDecorationSelected) => {
//   return {
//     type: "SET_BOOKING_SUMMARY_DECORATION",
//     payload: isDecorationSelected,
//   };
// };

// export const setCouponAppliedSuccessfully = (isCouponApplied) => {
//   return {
//     type: "SET_COUPON_APPLIED_SUCCESSFULLY",
//     payload: isCouponApplied,
//   };
// };

// export const setBookingSummaryAddons = (addOns) => {
//   return {
//     type: "SET_BOOKING_SUMMARY_ADDONS",
//     payload: addOns,
//   };
// };

// export const setBookingSummaryAdvance = (advance) => {
//   return {
//     type: "SET_BOOKING_SUMMARY_ADVANCE",
//     payload: advance,
//   };
// };

// export const setBookingSummaryCake = (cake) => {
//   return {
//     type: "SET_BOOKING_SUMMARY_CAKE",
//     payload: cake,
//   };
// };

// export const setActiveCakes = (activeCakes) => {
//   return {
//     type: "SET_ACTIVE_CAKES",
//     payload: activeCakes,
//   };
// };

// export const setSelectedCakes = (selectedCakes) => {
//   return {
//     type: "SET_SELECTED_CAKES",
//     payload: selectedCakes,
//   };
// };

// export const setActiveDecorations = (activeDecorations) => {
//   return {
//     type: "SET_ACTIVE_DECORATIONS",
//     payload: activeDecorations,
//   };
// };

// export const setActiveGifts = (activeGifts) => {
//   return {
//     type: "SET_ACTIVE_GIFTS",
//     payload: activeGifts,
//   };
// };

// export const setActiveServices = (activeServices) => {
//   return {
//     type: "SET_ACTIVE_SERVICES",
//     payload: activeServices,
//   };
// };

// export const resetBookingSummaryAddons = () => {
//   return {
//     type: "RESET_BOOKING_SUMMARY_ADDONS",
//   };
// };

// export const resetPersonalDetails = () => {
//   return {
//     type: "RESET_SET_PERSONAL_DETAILS",
//   };
// };

// export const resetActiveCakes = () => {
//   return {
//     type: "RESET_ACTIVE_CAKES",
//   };
// };

// export const resetActiveDecorations = () => {
//   return {
//     type: "RESET_ACTIVE_DECORATIONS",
//   };
// };

// export const resetActiveGifts = () => {
//   return {
//     type: "RESET_ACTIVE_GIFTS",
//   };
// };

// export const resetActiveServices = () => {
//   return {
//     type: "RESET_ACTIVE_SERVICES",
//   };
// };

// export const setSubtotalAmount = () => {
//   return (dispatch, getState) => {
//     const bookingSummaryTheaterCost = getBookingSummaryTheaterCost(
//       getState()
//     ) || { name: "", price: 0, decorCost: 0 };
//     const fogCount = getFogCount(getState());
//     const bookingSummaryCakes = getBookingSummaryCakes(getState()) || []; // Get current value from state using selector
//     const bookingSummaryAddons = getBookingSummaryAddons(getState()) || []; // Get current value from state using selector
//     let subTotal = bookingSummaryAddons?.reduce((acc, el) => {
//       console.log("lll", acc, el);
//       if(el.name.includes("Fog Entry")){
//         return (acc += el.price * fogCount);
//       }
//       return (acc += el.price);
//     }, 0);
//     subTotal += bookingSummaryCakes?.reduce((acc, el) => {
//       return (acc += el.price);
//     }, 0);

//     subTotal +=
//       bookingSummaryTheaterCost?.price + bookingSummaryTheaterCost?.decorCost;
//     dispatch({
//       type: "SET_SUBTOTAL_AMOUNT",
//       payload: subTotal,
//     });
//   };
// };

// export const setSelectedCity = (location, cityName = "") => {
//   return (dispatch, getState) => {
//     let selectedCity = "";
//     if (cityName) {
//       selectedCity = cityName;
//     } else {
//       const serviceAvailableAtCities =
//         serviceAvailableAtCitiesSelector(getState()) || [];

//       for (let i = 0; i < serviceAvailableAtCities.length; i++) {
//         let locationsArr = serviceAvailableAtCities[i]?.locations || [];
//         for (let j = 0; j < locationsArr.length; j++) {
//           if (locationsArr[j]?.locationName === location?.locationName) {
//             selectedCity = serviceAvailableAtCities[i]?.cityName;
//           }
//         }
//       }
//     }
//     dispatch({
//       type: "SET_SELECTED_CITY",
//       payload: selectedCity,
//     });
//   };
// };

// export const setExtraNumberOfPeople = (extraNumberOfPeople) => {
//   return {
//     type: "SET_EXTRA_NUMBER_OF_PEOPLE",
//     payload: extraNumberOfPeople,
//   };
// };

// export const resetLocationsCityWise = () => {
//   return {
//     type: "RESET_LOCATIONS_CITY_WISE",
//   };
// };

// export const resetSelectedCity = () => {
//   return {
//     type: "RESET_SELECTED_CITY",
//   };
// };

// export const setLocationsCityWise = () => {
//   return (dispatch, getState) => {
//     const locations = serviceAvailableAtCitiesSelector(getState()) || [];
//     const selectedCity = getSelectedCity(getState()) || "";

//     const fetchedLocations =
//       (locations &&
//         locations.length > 0 &&
//         locations?.filter((location) => {
//           if (location.cityName === selectedCity) {
//             return location.locations;
//           }
//         })) ||
//       [];

//     dispatch({
//       type: "SET_LOCATIONS_CITY_WISE",
//       payload: fetchedLocations?.[0]?.locations || [],
//     });
//   };
// };

// export const resetExtraNumberOfPeople = () => {
//   return {
//     type: "RESET_EXTRA_NUMBER_OF_PEOPLE",
//   };
// };

// export const resetBookingDetails = () => {
//   return {
//     type: "RESET_BOOKING_DETAILS",
//   };
// };

// export const resetSelectedOccasion = () => {
//   return {
//     type: "RESET_SELECTED_OCCASION",
//   };
// };
// export const resetSelectedTheaterTime = () => {
//   return {
//     type: "RESET_SELECTED_THEATER_TIME",
//   };
// };
// export const resetSelectedTheaterDate = () => {
//   return {
//     type: "RESET_SELECTED_THEATER_DATE",
//   };
// };
