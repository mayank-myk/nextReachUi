import React, { useEffect, useState } from "react";
import Header from "../../common/Header/Header.tsx";
import Footer from "../../common/Footer/Footer.tsx";
import ListingPage from "./components/ListingPage/ListingPage.tsx";
import InfluencerHeaderView from "./components/InfluencerHeaderView/InfluencerHeaderView.tsx";
import Navbar from "../../common/Navbar/Navbar.tsx";
import { setInfluencerListing } from "../../../redux/actions/influencerListingActions.js";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getInfluencersListing } from "../../../redux/selectors/influencerListingSelector.js";
import { userIdSelector } from "../../../redux/selectors/profileDetailsSelector.js";
import Whatsapp from "../../common/Whatsapp/Whatsapp.tsx";
import Loader from "../../../desktop/common/Loader/Loader.tsx";
import PromotionalPopup from "../../../desktop/common/PromotionalPopup/PromotionalPopup.tsx";

function InfluencerListing() {
  const dispatch = useDispatch();
  const location = useLocation();
  const influencerListing = useSelector(getInfluencersListing);
  const userId = useSelector(userIdSelector);
  const queryParams = new URLSearchParams(location.search);
  const niche = queryParams.get("Niche"); // Access 'key' parameter
  const city = queryParams.get("City");
  const followers = queryParams.get("Followers");
  const platform = queryParams.get("Platform");
  const budget = queryParams.get("Budget");

  const [params, setParams] = useState({});
  const [activePageNo, setActivePageNo] = useState(1);
  const [sortApplied, setSortApplied] = useState("RECOMMENDED");
  const [loading, setLoading] = useState(false);

  const { result_count_further_page, page_number = 1 } =
    influencerListing || {};

  const handlePreviousPage = () => {
    if (page_number !== 1) setActivePageNo((prev_page_no) => prev_page_no - 1);
    window.scrollTo(0, 0);
  };

  const handleNextPage = () => {
    if (result_count_further_page !== 0)
      setActivePageNo((prev_page_no) => prev_page_no + 1);
    window.scrollTo(0, 0);
  };

  console.log("## ", setSortApplied);

  useEffect(() => {
    if (city) {
      setParams((prevParams) => ({
        ...prevParams,
        city: city,
      }));
    }
    if (followers) {
      setParams((prevParams) => ({
        ...prevParams,
        follower_count: followers,
      }));
    }

    if (platform) {
      setParams((prevParams) => ({
        ...prevParams,
        platform: platform,
      }));
    }

    if (budget) {
      setParams((prevParams) => ({
        ...prevParams,
        budget: budget,
      }));
    }
  }, [city, followers, platform, budget]);

  useEffect(() => {
    let queryString = Object.keys(params)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      )
      .join("&");
    const nicheString = niche ? `niche=${niche}` : "";

    if (sortApplied) {
      queryString += `&sort_applied=${sortApplied}`;
    }
    setLoading(true);
    fetch(
      `https://nextreach-backend-fxdmcnbgf3gsesht.southindia-01.azurewebsites.net/v1/web/influencer/discover?client_id=${
        userId ? userId : 1
      }&page_number=${activePageNo}&page_size=20&${nicheString}&${queryString}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    )
      .then((response) => {
        setLoading(false);
        if (response?.status === 200) return response.json();
      })
      .then((response) => {
        setLoading(false);
        dispatch(setInfluencerListing({ ...response }));
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [params, niche, sortApplied, dispatch, activePageNo, userId]);

  return (
    <>
      {loading && <Loader />}
      <Header bgColor="#FFF9F9" />
      <InfluencerHeaderView />
      <ListingPage
        niche={niche}
        city={city}
        followers={followers}
        platform={platform}
        budget={budget}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
      />
      <PromotionalPopup />
      <Footer />
      <Whatsapp />
      <Navbar />
    </>
  );
}

export default InfluencerListing;
