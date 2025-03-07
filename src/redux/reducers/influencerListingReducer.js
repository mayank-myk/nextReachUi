const initialState = {};

const influencerListingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INFLUENCER_LISTING":
      return {
        ...state,
        influencersListing: action.payload,
      };
      case "SET_INFLUENCER_LISTING_FILTERS":
        return {
          ...state,
          influencersListing:{
            ...state.influencersListing,
            filters_applied: {
              ...state.influencersListing.filters_applied,
              ...action.payload
            }
          },
        };
      case "SET_QUERY_STRING":
        return {
          ...state, 
          queryString : action.payload
        }
    case "SET_PAGE_NO":
      return {
        ...state, 
        pageNo: action.payload
      }
    case "SET_SORT_APPLIED":
      return {
        ...state, 
        sortApplied: action.payload
      }
    case "SET_CONTENT_PRICE":
      return{
        ...state, 
        contentPrice: action.payload
      }
    case "SET_IS_FILTER_OPEN":
      return{
        ...state, 
        isFilterOpen: true
      }
    case "RESET_CONTENT_PRICE":
      return{
        ...state, 
        contentPrice: ""
      }
    case "RESET_INFLUENCER_LISTING":{
      return {
        ...state, 
        influencersListing: {}
      }
    }
    case "RESET_INFLUENCER_LISTING_FILTERS":{
      return {
           ...state,
          influencersListing:{
            ...state.influencersListing,
            filters_applied: {
              niche: null,
              "city": null,
              "reach_price": null,
              "follower_count": null,
              "avg_views": null,
              "engagement": null,
              "platform": null,
              "budget": null,
              "content_price": null,
              "gender": null,
              "collab_type": null,
              "age": null,
              "rating": null,
              "languages": null
            }
          },
      }
    }
     case "RESET_IS_FILTER_OPEN":
      return{
        ...state, 
        isFilterOpen: false
      }
    // case "SET_ACTIVE_TIME_SLOT_IND":
    //   return {
    //     ...state,
    //     activeTimeSlotInd: action.payload,
    //   };
    // case "SET_SELECTED_THEATER":
    //   return {
    //     ...state,
    //     selectedTheater: action.payload,
    //   };
    // case "SET_SELECTED_THEATER_TIME":
    //   return {
    //     ...state,
    //     selectedTheaterTime: action.payload,
    //   };
    // case "SET_SELECTED_THEATER_DATE":
    //   return {
    //     ...state,
    //     selectedTheaterDate: action.payload,
    //   };
    // case "SET_SELECTED_THEATER_MONTH":
    //   return {
    //     ...state,
    //     selectedTheaterDate: {
    //       ...state.selectedTheaterDate,
    //       month: action.payload,
    //     },
    //   };
    // case "SET_SELECTED_THEATER_DAY":
    //   return {
    //     ...state,
    //     selectedTheaterDate: {
    //       ...state.selectedTheaterDate,
    //       day: action.payload,
    //     },
    //   };
    // case "SET_SHORT_SLOT_SELECTED":
    //   return {
    //     ...state,
    //     shortSlotSelected: action.payload,
    //   };
    // case "SET_SELECTED_LOCATION":
    //   return {
    //     ...state,
    //     selectedLocation: action.payload,
    //   };
    // case "SET_SELECTED_CITY":
    //   return {
    //     ...state,
    //     selectedCity: action.payload,
    //   };
    // case "RESET_SELECTED_CITY":
    //   return {
    //     ...state,
    //     selectedCity: "",
    //   };
    // case "SET_SELECTED_OCCASION":
    //   return {
    //     ...state,
    //     selectedOccasion: action.payload,
    //   };
    // case "SET_BOOKING_DETAILS":
    //   return {
    //     ...state,
    //     bookingDetails: action.payload,
    //   };
    // case "SET_BOOKING_DETAILS_FORM_VALID":
    //   return {
    //     ...state,
    //     bookingDetailsFormValid: action.payload,
    //   };
    // case "SET_THEATER_TIME_SLOTS":
    //   return {
    //     ...state,
    //     theaterTimeSlots: action.payload,
    //   };
    // case "SET_EXTRA_NUMBER_OF_PEOPLE":
    //   return {
    //     ...state,
    //     extraNumberOfPeople: action.payload,
    //   };
    // case "RESET_EXTRA_NUMBER_OF_PEOPLE":
    //   return {
    //     ...state,
    //     extraNumberOfPeople: 0,
    //   };
    // case "RESET_BOOKING_DETAILS":
    //   return {
    //     ...state,
    //     bookingDetails: {},
    //   };
    // case "SET_PERSONAL_DETAILS":
    //   return {
    //     ...state,
    //     personalDetails: action.payload,
    //   };
    // case "RESET_SET_PERSONAL_DETAILS":
    //   return {
    //     ...state,
    //     personalDetails: {},
    // };
    // case "SET_IS_BOOKING_DETAILS_VALID":
    //   return {
    //     ...state,
    //     isBookingDetailsValid: action.payload,
    //   };
    // case "SET_IS_OCCASION_PAGE_VALID":
    //   return {
    //     ...state,
    //     isOccasionPageValid: action.payload,
    //   };
    // case "SET_BOOKING_SUMMARY":
    //   return {
    //     ...state,
    //     bookingSummary: action.payload,
    //   };
    // case "SET_BOOKING_SUMMARY_THEATER":
    //   return {
    //     ...state,
    //     bookingSummary: {
    //       ...state.bookingSummary,
    //       theaterCost: action.payload,
    //     },
    //   };
    // case "SET_BOOKING_SUMMARY_COUPON":
    //   return {
    //     ...state,
    //     bookingSummary: {
    //       ...state.bookingSummary,
    //       coupon: action.payload,
    //     },
    //   };
    // case "SET_BOOKING_SUMMARY_DECORATION":
    //   return {
    //     ...state,
    //     bookingSummary: {
    //       ...state.bookingSummary,
    //       isDecorationSelected: action.payload,
    //     },
    //   };
    // case "SET_BOOKING_SUMMARY_ADDONS":
    //   return {
    //     ...state,
    //     bookingSummary: {
    //       ...state.bookingSummary,
    //       addOns: action.payload,
    //     },
    //   };
    // case "SET_BOOKING_SUMMARY_ADVANCE":
    //   return {
    //     ...state,
    //     bookingSummary: {
    //       ...state.bookingSummary,
    //       advancePayment: action.payload,
    //     },
    //   };
    // case "SET_BOOKING_SUMMARY_CAKE":
    //   return {
    //     ...state,
    //     bookingSummary: {
    //       ...state.bookingSummary,
    //       cake: action.payload,
    //     },
    //   };
    // case "SET_SUBTOTAL_AMOUNT":
    //   return {
    //     ...state,
    //     bookingSummary: {
    //       ...state.bookingSummary,
    //       subTotal: action.payload,
    //     },
    //   };
    // case "SET_LOCATIONS_CITY_WISE":
    //   return {
    //     ...state,
    //     locationsCityWise: action.payload,
    //   };
    // case "RESET_LOCATIONS_CITY_WISE":
    //   return {
    //     ...state,
    //     locationsCityWise: [],
    //   };
    // case "SET_ACTIVE_CAKES":
    //   return {
    //     ...state,
    //     activeCakes: action.payload,
    //   };
    // case "SET_SELECTED_CAKES":
    //   return {
    //     ...state,
    //     selectedCakes: action.payload,
    //   };
    // case "SET_ACTIVE_DECORATIONS":
    //   return {
    //     ...state,
    //     activeDecorations: action.payload,
    //   };
    // case "SET_ACTIVE_GIFTS":
    //   return {
    //     ...state,
    //     activeGifts: action.payload,
    //   };
    // case "SET_ACTIVE_SERVICES":
    //   return {
    //     ...state,
    //     activeServices: action.payload,
    //   };
    // case "SET_COUPON_APPLIED_SUCCESSFULLY":
    //   return {
    //     ...state,
    //     isCouponApplied: action.payload,
    //   };
    // case "SET_SELECTED_TIME_SLOT_IND":
    //   return {
    //     ...state,
    //     selectedTimeSlotInd: action.payload,
    //   };
    // case "RESET_ACTIVE_CAKES":
    //   return {
    //     ...state,
    //     activeCakes: [],
    //   };
    // case "RESET_BOOKING_SUMMARY_ADDONS":
    //   return {
    //     ...state,
    //     bookingSummary: {},
    //   };
    // case "RESET_ACTIVE_DECORATIONS":
    //   return {
    //     ...state,
    //     activeDecorations: [],
    //   };
    // case "RESET_ACTIVE_GIFTS":
    //   return {
    //     ...state,
    //     activeGifts: [],
    //   };
    // case "RESET_ACTIVE_SERVICES":
    //   return {
    //     ...state,
    //     activeServices: [],
    //   };
    // case "RESET_SELECTED_OCCASION":
    //   return {
    //     ...state,
    //     selectedOccasion: {},
    //   };
    // case "RESET_SELECTED_THEATER_TIME":
    //   return {
    //     ...state,
    //     selectedTheaterTime: "",
    //   };
    // case "RESET_SELECTED_THEATER_DATE":
    //   return {
    //     ...state,
    //     selectedTheaterDate: "",
    //   };
    // case "SET_FOG_COUNT":
    //   return {
    //     ...state,
    //     fogCount: action.payload,
      // };
    default:
      return state;
  }
};

export default influencerListingReducer;
