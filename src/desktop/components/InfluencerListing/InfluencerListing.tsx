import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import Header from "../../common/Header/Header.tsx";
import ListingPage from "./components/ListingPage/ListingPage.tsx";
import InfluencerHeaderView from "./components/InfluencerHeaderView/InfluencerHeaderView.tsx";
import {
  setInfluencerListing,
  setPageNo,
  setQueryString,
  setStoreSortApplied,
} from "../../../redux/actions/influencerListingActions.js";
import { useDispatch, useSelector } from "react-redux";
import { userIdSelector } from "../../../redux/selectors/profileDetailsSelector.js";
import {
  getInfluencersListing,
  // getInfluencersListingFilters,
  getPageNoSelector,
  getQueryString,
  getSortAppliedSelector,
} from "../../../redux/selectors/influencerListingSelector.js";
import Footer from "../../common/Footer/Footer.tsx";
import Whatsapp from "../../common/Whatsapp/Whatsapp.tsx";
import Loader from "../../common/Loader/Loader.tsx";
import PromotionalPopup from "../../common/PromotionalPopup/PromotionalPopup.tsx";

function InfluencerListing() {
  const dispatch = useDispatch();
  // const location = useLocation();
  const influencerListing = useSelector(getInfluencersListing);
  // const filters_applied = useSelector(getInfluencersListingFilters) || {};
  let queryString = useSelector(getQueryString) || "";
  const userId = useSelector(userIdSelector) || null;
  const pageNo = useSelector(getPageNoSelector) || 1;
  const storeSortApplied = useSelector(getSortAppliedSelector) || "RECOMMENDED";

  const [activePageNo, setActivePageNo] = useState(pageNo);
  const [sortApplied, setSortApplied] = useState(storeSortApplied);
  const [loading, setLoading] = useState(false);
  const { result_count_further_page, page_number = 1 } =
    influencerListing || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePreviousPage = () => {
    if (page_number !== 1) {
      setActivePageNo((prev_page_no) => prev_page_no - 1);
      dispatch(setPageNo(activePageNo - 1));
    }
    if (queryString.includes("&pageNo")) {
      let queryStr = queryString.replace(`&pageNo=${activePageNo}`, "");
      queryStr = queryStr + `&pageNo=${activePageNo - 1}`;
      dispatch(setQueryString(queryStr));
    } else {
      let queryStr = queryString + `&pageNo=${activePageNo - 1}`;
      dispatch(setQueryString(queryStr));
    }

    window.scrollTo(0, 0);
  };

  const handleNextPage = () => {
    if (result_count_further_page !== 0) {
      setActivePageNo((prev_page_no) => prev_page_no + 1);
      dispatch(setPageNo(activePageNo + 1));
    }

    if (queryString.includes("&pageNo")) {
      let queryStr = queryString.replace(`&pageNo=${activePageNo}`, "");
      queryStr = queryStr + `&pageNo=${activePageNo + 1}`;
      dispatch(setQueryString(queryStr));
    } else {
      let queryStr = queryString + `&pageNo=${activePageNo + 1}`;
      dispatch(setQueryString(queryStr));
    }
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://nextreach-backend-fxdmcnbgf3gsesht.southindia-01.azurewebsites.net/v1/web/influencer/discover?client_id=${
        userId ? userId : 1
      }&page_number=${activePageNo}&page_size=20&${queryString}`,
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
  }, [dispatch, queryString, activePageNo, userId, sortApplied]);

  const handleSortByChange = (e) => {
    setSortApplied(e.target.value);
    dispatch(setStoreSortApplied(e.target.value));

    if (queryString.includes("sort_applied")) {
      let queryStr = queryString.replace(
        `&sort_applied=${storeSortApplied}`,
        ""
      );
      queryStr = queryStr + `&sort_applied=${e.target.value}`;
      dispatch(setQueryString(queryStr));
    } else {
      let queryStr = queryString + `&sort_applied=${e.target.value}`;
      dispatch(setQueryString(queryStr));
    }
  };

  return (
    <>
      {loading && <Loader />}
      <Header bgColor="#FFF9F9" />
      <InfluencerHeaderView />
      <ListingPage
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handleSortByChange={handleSortByChange}
      />
      <PromotionalPopup />
      <Footer />
      <Whatsapp />
    </>
  );
}

export default InfluencerListing;
