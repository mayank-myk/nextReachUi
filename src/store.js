
import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import profileDetailsReducer from "./redux/reducers/profileDetailsReducer";
import campaignReducer from "./redux/reducers/campaignReducer";
import influencerListingReducer from "./redux/reducers/influencerListingReducer";
import influencerMatricReducer from "./redux/reducers/influencerMatricReducer";
import homeReducer from "./redux/reducers/homeReducer";

const persistConfig = {
  key: "root", // Key to identify storage in localStorage
  storage, // Use localStorage as default storage
  whitelist: [
    "campaign", 
    "profileDetails",  
    "influencersListing",
    "influencerMatric", 
    "home"
  ], // Reducers to persist (optional)
};


const rootReducer = combineReducers({
  profileDetails: profileDetailsReducer, 
  campaign: campaignReducer,
  influencersListing: influencerListingReducer,
  influencerMatric: influencerMatricReducer,
  home: homeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {};
const middleware = [thunk];
export const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
