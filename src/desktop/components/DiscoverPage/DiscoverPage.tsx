import React, { useEffect } from "react";
import Header from "../../common/Header/Header.tsx";
import Footer from "../../common/Footer/Footer.tsx";
import CategoryView from "./components/CategoryView/CategoryView.tsx";
import CityView from "./components/CityView/CityView.tsx";
import FollowersView from "./components/FollowersView/FollowersView.tsx";
import BugetView from "./components/BugetView/BugetView.tsx";
import PlatformView from "./components/PlatformView/PlatformView.tsx";
import DiscoverPageHeaderView from "./components/DiscoverPageHeaderView/DiscoverPageHeaderView.tsx";
import {
  resetContentPrice,
  resetInfluencerListingFilters,
  setPageNo,
  setQueryString,
  setStoreSortApplied,
} from "../../../redux/actions/influencerListingActions.js";
import { useDispatch } from "react-redux";
import Whatsapp from "../../common/Whatsapp/Whatsapp.tsx";
import PromotionalPopup from "../../common/PromotionalPopup/PromotionalPopup.tsx";

function DiscoverPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetContentPrice());
    dispatch(resetInfluencerListingFilters());
    dispatch(setStoreSortApplied("RECOMMENDED"));
    dispatch(setQueryString(""));
    dispatch(setPageNo(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <DiscoverPageHeaderView />
      <CategoryView />
      <BugetView />
      <CityView />
      <FollowersView />
      <PlatformView />
      <PromotionalPopup />
      <Footer />
      <Whatsapp />
    </>
  );
}

export default DiscoverPage;
