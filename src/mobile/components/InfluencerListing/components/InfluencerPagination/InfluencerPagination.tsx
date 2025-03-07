import React, { useEffect, useState } from "react";
import sort_icon from "../../../../../assets/TopRatedInfluencers/icons/sort_icon.svg";
import filter_icon from "../../../../../assets/TopRatedInfluencers/icons/filter_icon.svg";
import close_icon from "../../../../../assets/icons/close_icon.svg";
import logo from "../../../../../assets/next_reach_ai_logo_orange.svg";
import coin_icon from "../../../../../assets/icons/coin_icon_4.png";
import * as S from "./InfluencerPagination.style";
import InfluencerCard from "../InflucenerCard/InfluencerCard.tsx";
import {
  resetIsFilterOpen,
  // setContentPrice,
  setInfluencerListing,
  setIsFilterOpen,
} from "../../../../../redux/actions/influencerListingActions.js";
import { useDispatch, useSelector } from "react-redux";
import { userIdSelector } from "../../../../../redux/selectors/profileDetailsSelector.js";
import {
  // getContentPrice,
  getInfluencersListing,
} from "../../../../../redux/selectors/influencerListingSelector.js";
import {
  AverageView,
  City,
  CollabType,
  EngagementRate,
  FollowersCount,
  Gender,
  Language,
  Niche,
  Platform,
  ReachPrice,
  SortApplied,
} from "../../../../../desktop/constants/constants.js";
import { Budget } from "../../../../constants/constants.js";

const InfluencerPagination = ({
  niche: prevNiche,
  city: prevCity,
  followers: prevFollowers,
  platform: prevPlatform,
  budget: prevBudget,
  handlePreviousPage,
  handleNextPage,
}) => {
  // const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSortOpen, setIsSortOpen] = React.useState(false);
  const [niche, setNiche] = useState(prevNiche ? [prevNiche] : []);
  const [city, setCity] = useState(prevCity);
  const [reachPrice, setReachPrice] = useState("");
  const [followers, setFollowers] = useState(prevFollowers);
  const [averageView, setAverageView] = useState("");
  const [engagementRate, setEngagementRate] = useState("");
  const [platform, setPlatform] = useState(prevPlatform);
  const [collabType, setCollabType] = useState("");
  const [gender, setGender] = useState("");
  const [budget, setBudget] = useState(prevBudget);
  // const [age, setAge] = useState();
  // const [rating, setRating] = useState();
  const [languages, setLanguages] = useState([]);
  const [selectedOption, setSelectedOption] = useState("RECOMMENDED");
  const influencerListing = useSelector(getInfluencersListing);
  const [isClearAllVisible, setIsClearAllVisible] = useState(false);
  const [params, setParams] = useState({});

  const dispatch = useDispatch();
  const userId = useSelector(userIdSelector) || "";
  // const content_price = useSelector(getContentPrice) || "";
  // const page_no = useSelector(getPageNoSelector);
  const [activeContentPrice, setActiveContentPrice] = useState(prevBudget);
  const [activeFilter, setActiveFilter] = useState("Niche");
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    matched_influencer_list,
    unmatched_influencer_list,
    coin_balance,
    page_number,
    result_start_number,
    result_end_number,
    result_total_count,
    result_count_further_page,
  } = influencerListing || {};

  const handleContentPrice = (key) => {
    setActiveContentPrice(key);
    // dispatch(setContentPrice(key));
    setParams((prevParams) => ({
      ...prevParams,
      budget: key,
    }));
  };

  const handleMenuToggle = () => {
    if (isSortOpen) setIsSortOpen(!isSortOpen);
    setIsOpen(!isOpen);
    if (!isOpen) dispatch(setIsFilterOpen());
    else dispatch(resetIsFilterOpen());
  };

  const handleSortMenuToggle = () => {
    if (isOpen) setIsOpen(!isOpen);
    setIsSortOpen(!isSortOpen);
  };

  const handleFilters = () => {
    let queryString = Object.keys(params)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      )
      .join("&");

    const nicheString =
      niche && niche.length > 0
        ? niche.map((eachNiche) => `niche=${eachNiche}`).join("&")
        : "";

    const languageString =
      languages && languages.length > 0
        ? languages.map((language) => `languages=${language}`).join("&")
        : "";

    if (selectedOption) {
      queryString += `&sort_applied=${selectedOption}`;
    }

    fetch(
      `https://nextreach-backend-fxdmcnbgf3gsesht.southindia-01.azurewebsites.net/v1/web/influencer/discover?client_id=${
        userId ? userId : 1
      }&page_number=${page_number}&page_size=20&${nicheString}&${queryString}&${languageString}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    )
      .then((response) => {
        if (response?.status === 200) return response.json();
      })
      .then((response) => {
        if (isOpen) handleMenuToggle();
        dispatch(setInfluencerListing({ ...response }));
      });
  };

  useEffect(() => {
    handleFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeContentPrice, selectedOption]);

  useEffect(() => {
    if (city) {
      setParams((prevParams) => ({
        ...prevParams,
        city: city,
      }));
    }
    if (reachPrice) {
      setParams((prevParams) => ({
        ...prevParams,
        reach_price: reachPrice,
      }));
    }
    if (followers) {
      setParams((prevParams) => ({
        ...prevParams,
        follower_count: followers,
      }));
    }
    if (averageView) {
      setParams((prevParams) => ({
        ...prevParams,
        avg_views: averageView,
      }));
    }
    if (engagementRate) {
      setParams((prevParams) => ({
        ...prevParams,
        engagement: engagementRate,
      }));
    }
    if (platform) {
      setParams((prevParams) => ({
        ...prevParams,
        platform: platform,
      }));
    }
    if (collabType) {
      setParams((prevParams) => ({
        ...prevParams,
        collab_type: collabType,
      }));
    }
    if (gender) {
      setParams((prevParams) => ({
        ...prevParams,
        gender: gender,
      }));
    }
    // if (age) {
    //   setParams((prevParams) => ({
    //     ...prevParams,
    //     age: age,
    //   }));
    // }
    // if (rating) {
    //   setParams((prevParams) => ({
    //     ...prevParams,
    //     rating: rating,
    //   }));
    // }
    if (budget) {
      setParams((prevParams) => ({
        ...prevParams,
        budget: budget,
      }));
    }
  }, [
    city,
    reachPrice,
    followers,
    averageView,
    engagementRate,
    platform,
    collabType,
    gender,
    budget,
    // content_price,
  ]);

  const clearAllFilters = () => {
    setParams({});
    setNiche([]);
    setCity("");
    setReachPrice("");
    setFollowers("");
    setAverageView("");
    setEngagementRate("");
    setPlatform("");
    setBudget("");
    setCollabType("");
    setGender("");
    setLanguages([]);
    setActiveContentPrice("");
  };

  useEffect(() => {
    if (
      niche.length > 0 ||
      city ||
      reachPrice ||
      averageView ||
      platform ||
      followers ||
      engagementRate ||
      collabType ||
      gender ||
      languages.length > 0 ||
      activeContentPrice
    ) {
      setIsClearAllVisible(true);
    } else {
      setIsClearAllVisible(false);
    }
  }, [
    niche,
    city,
    reachPrice,
    averageView,
    platform,
    followers,
    engagementRate,
    collabType,
    gender,
    languages,
    activeContentPrice,
  ]);

  const handleActiveFilter = (filter) => {
    setActiveFilter(filter);
  };

  const handleNicheCheckboxChange = (event, key) => {
    if (event.target.checked) {
      // checkbox checked
      setNiche((prevNiche) => {
        return [...prevNiche, key];
      });
    } else {
      // checkbox unchecked
      setNiche((prevNiche) => {
        return [...prevNiche.filter((niche) => niche !== key)];
      });
    }
  };

  const handleLanguagesCheckboxChange = (event, key) => {
    if (event.target.checked) {
      // checkbox checked
      setLanguages((prevLanguages) => {
        return [...prevLanguages, key];
      });
    } else {
      // checkbox unchecked
      setLanguages((prevLanguages) => {
        return [...prevLanguages.filter((language) => language !== key)];
      });
    }
  };

  const handleChange = (event, key) => {
    if (key === "city") {
      setCity(event.target.value);
    } else if (key === "reach_price") {
      setReachPrice(event.target.value);
    } else if (key === "followers") {
      setFollowers(event.target.value);
    } else if (key === "average_view") {
      setAverageView(event.target.value);
    } else if (key === "engagement_rate") {
      setEngagementRate(event.target.value);
    } else if (key === "platform") {
      setPlatform(event.target.value);
    } else if (key === "collab_type") {
      setCollabType(event.target.value);
    } else if (key === "gender") {
      setGender(event.target.value);
    }
    // else if (key === "age") {
    //   setAge(event.target.value);
    // } else if (key === "rating") {
    //   setRating(event.target.value);
    // }
  };

  const handleSortByChange = (e) => {
    setSelectedOption(e.target.value);
    setIsSortOpen(!isSortOpen);
  };

  if (!influencerListing) return;

  return (
    <S.Container>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <S.CoinHeader>
          <S.CoinBalanceContainer>
            <S.CoinBalanceText>Coin Balance</S.CoinBalanceText>
            <>
              <img
                src={coin_icon}
                alt="coin_icon"
                width={"16px"}
                height={"16px"}
              />{" "}
              <S.Price>{coin_balance}</S.Price>
            </>
          </S.CoinBalanceContainer>
          <S.ShowingResultContainer>
            <>
              Showing {result_start_number}-{result_end_number} out of{" "}
              {result_total_count} matches
            </>
          </S.ShowingResultContainer>
        </S.CoinHeader>
        <S.Header
          style={{
            overflowX: "auto", // Enables horizontal scroll
            whiteSpace: "nowrap", // Prevents wrapping of filter items
            flexShrink: 0, // Prevents shrinking of the Header
            maxWidth: "100%",
          }}
        >
          <S.CommonFilter
            style={{
              backgroundColor: "rgb(159, 159, 159)",
            }}
          >
            Budget
          </S.CommonFilter>
          {Object.entries(Budget).map(([key, val], ind) => {
            return (
              <S.CommonFilter
                active={activeContentPrice === key}
                onClick={() => handleContentPrice(key)}
              >
                {val}
              </S.CommonFilter>
            );
          })}
        </S.Header>
      </div>

      <S.SortFilterHeader>
        <S.SortContainer onClick={handleSortMenuToggle}>
          <img src={sort_icon} alt="Sort icon" />
          SORT{" "}
        </S.SortContainer>
        <S.SortContainer onClick={handleMenuToggle}>
          <img src={filter_icon} alt="Filter icon" />
          Filter
        </S.SortContainer>
        <S.OverlayMenu isOpen={isOpen}>
          <S.OverlayHeader>
            <img src={logo} alt="NextReach.ai" width={"22px"} height={"18px"} />
            <img
              src={close_icon}
              alt="Close icon"
              width={"20px"}
              height={"20px"}
              onClick={handleMenuToggle}
            />
          </S.OverlayHeader>

          <S.FiltersContainer>
            <S.FiltersHeader>
              <>Filters</>
              {isClearAllVisible && (
                <S.ClearAll onClick={clearAllFilters}>CLEAR ALL</S.ClearAll>
              )}
            </S.FiltersHeader>
            <S.Filters>
              <S.FiltersTitleContainer>
                <S.FilterTitle
                  style={{
                    backgroundColor:
                      activeFilter === "Niche" ? "#E66A44" : "#E9E9E9",
                    color: activeFilter === "Niche" ? "#FFFFFF" : "#000000",
                  }}
                  onClick={() => handleActiveFilter("Niche")}
                >
                  Niche
                </S.FilterTitle>
                <S.FilterTitle
                  style={{
                    backgroundColor:
                      activeFilter === "Region" ? "#E66A44" : "#E9E9E9",
                    color: activeFilter === "Region" ? "#FFFFFF" : "#000000",
                  }}
                  onClick={() => handleActiveFilter("Region")}
                >
                  Region
                </S.FilterTitle>{" "}
                <S.FilterTitle
                  style={{
                    backgroundColor:
                      activeFilter === "ReachPrice" ? "#E66A44" : "#E9E9E9",
                    color:
                      activeFilter === "ReachPrice" ? "#FFFFFF" : "#000000",
                  }}
                  onClick={() => handleActiveFilter("ReachPrice")}
                >
                  Reach Price
                </S.FilterTitle>
                <S.FilterTitle
                  style={{
                    backgroundColor:
                      activeFilter === "Followers" ? "#E66A44" : "#E9E9E9",
                    color: activeFilter === "Followers" ? "#FFFFFF" : "#000000",
                  }}
                  onClick={() => handleActiveFilter("Followers")}
                >
                  Followers
                </S.FilterTitle>
                <S.FilterTitle
                  style={{
                    backgroundColor:
                      activeFilter === "AverageView" ? "#E66A44" : "#E9E9E9",
                    color:
                      activeFilter === "AverageView" ? "#FFFFFF" : "#000000",
                  }}
                  onClick={() => handleActiveFilter("AverageView")}
                >
                  Average View
                </S.FilterTitle>
                <S.FilterTitle
                  style={{
                    backgroundColor:
                      activeFilter === "EngagementRate" ? "#E66A44" : "#E9E9E9",
                    color:
                      activeFilter === "EngagementRate" ? "#FFFFFF" : "#000000",
                  }}
                  onClick={() => handleActiveFilter("EngagementRate")}
                >
                  Engagement %
                </S.FilterTitle>
                <S.FilterTitle
                  style={{
                    backgroundColor:
                      activeFilter === "Platform" ? "#E66A44" : "#E9E9E9",
                    color: activeFilter === "Platform" ? "#FFFFFF" : "#000000",
                  }}
                  onClick={() => handleActiveFilter("Platform")}
                >
                  Platform
                </S.FilterTitle>
                <S.FilterTitle
                  style={{
                    backgroundColor:
                      activeFilter === "Type" ? "#E66A44" : "#E9E9E9",
                    color: activeFilter === "Type" ? "#FFFFFF" : "#000000",
                  }}
                  onClick={() => handleActiveFilter("Type")}
                >
                  Type
                </S.FilterTitle>
                <S.FilterTitle
                  style={{
                    backgroundColor:
                      activeFilter === "Gender" ? "#E66A44" : "#E9E9E9",
                    color: activeFilter === "Gender" ? "#FFFFFF" : "#000000",
                  }}
                  onClick={() => handleActiveFilter("Gender")}
                >
                  Gender
                </S.FilterTitle>
                {/* <S.FilterTitle
                  style={{
                    backgroundColor:
                      activeFilter === "Age" ? "#E66A44" : "#E9E9E9",
                    color: activeFilter === "Age" ? "#FFFFFF" : "#000000",
                  }}
                  onClick={() => handleActiveFilter("Age")}
                >
                  Age
                </S.FilterTitle>
                <S.FilterTitle
                  style={{
                    backgroundColor:
                      activeFilter === "Rating" ? "#E66A44" : "#E9E9E9",
                    color: activeFilter === "Rating" ? "#FFFFFF" : "#000000",
                  }}
                  onClick={() => handleActiveFilter("Rating")}
                >
                  Rating
                </S.FilterTitle> */}
                <S.FilterTitle
                  style={{
                    backgroundColor:
                      activeFilter === "Languages" ? "#E66A44" : "#E9E9E9",
                    color: activeFilter === "Languages" ? "#FFFFFF" : "#000000",
                  }}
                  onClick={() => handleActiveFilter("Languages")}
                >
                  Languages
                </S.FilterTitle>
              </S.FiltersTitleContainer>
              <S.FiltersValueContainer
                style={{
                  overflowY: "auto", // Enables vertical scroll if content overflows
                  whiteSpace: "nowrap", // Prevents wrapping of filter items if needed
                  flexShrink: 0, // Prevents the container from shrinking
                  maxHeight: "500px", // Set a max height for the container (you can adjust this value)
                  paddingRight: "10px",
                }}
              >
                {activeFilter === "Niche"
                  ? Object.entries(Niche).map(([key, val]) => {
                      return (
                        <S.EachFilterContainer>
                          <label>
                            <input
                              type="checkbox"
                              name="niche"
                              value={key}
                              checked={niche.includes(key)}
                              onChange={(event) =>
                                handleNicheCheckboxChange(event, key)
                              }
                            />{" "}
                            {val}
                          </label>
                        </S.EachFilterContainer>
                      );
                    })
                  : null}
                {activeFilter === "Region"
                  ? Object.entries(City).map(([key, val]) => {
                      return (
                        <S.EachFilterContainer>
                          <label>
                            <input
                              type="radio"
                              name="city"
                              value={key}
                              checked={city === key}
                              onChange={(event) => handleChange(event, "city")}
                            />{" "}
                            {val}
                          </label>
                        </S.EachFilterContainer>
                      );
                    })
                  : null}
                {activeFilter === "ReachPrice"
                  ? Object.entries(ReachPrice).map(([key, val]) => {
                      return (
                        <S.EachFilterContainer>
                          <label>
                            <input
                              type="radio"
                              name="reach_price"
                              value={key}
                              checked={reachPrice === key}
                              onChange={(event) =>
                                handleChange(event, "reach_price")
                              }
                            />{" "}
                            {val}
                          </label>
                        </S.EachFilterContainer>
                      );
                    })
                  : null}
                {activeFilter === "Followers"
                  ? Object.entries(FollowersCount).map(([key, val]) => {
                      return (
                        <S.EachFilterContainer>
                          <label>
                            <input
                              type="radio"
                              name="followers"
                              value={key}
                              checked={followers === key}
                              onChange={(event) =>
                                handleChange(event, "followers")
                              }
                            />{" "}
                            {val}
                          </label>
                        </S.EachFilterContainer>
                      );
                    })
                  : null}
                {activeFilter === "AverageView"
                  ? Object.entries(AverageView).map(([key, val]) => {
                      return (
                        <S.EachFilterContainer>
                          <label>
                            <input
                              type="radio"
                              name="average_view"
                              value={key}
                              checked={averageView === key}
                              onChange={(event) =>
                                handleChange(event, "average_view")
                              }
                            />{" "}
                            {val}
                          </label>
                        </S.EachFilterContainer>
                      );
                    })
                  : null}
                {activeFilter === "EngagementRate"
                  ? Object.entries(EngagementRate).map(([key, val]) => {
                      return (
                        <S.EachFilterContainer>
                          <label>
                            <input
                              type="radio"
                              name="engagement_rate"
                              value={key}
                              checked={engagementRate === key}
                              onChange={(event) =>
                                handleChange(event, "engagement_rate")
                              }
                            />{" "}
                            {val}
                          </label>
                        </S.EachFilterContainer>
                      );
                    })
                  : null}
                {activeFilter === "Platform"
                  ? Object.entries(Platform).map(([key, val]) => {
                      return (
                        <S.EachFilterContainer>
                          <label>
                            <input
                              type="radio"
                              name="platform"
                              value={key}
                              checked={platform === key}
                              onChange={(event) =>
                                handleChange(event, "platform")
                              }
                            />{" "}
                            {val}
                          </label>
                        </S.EachFilterContainer>
                      );
                    })
                  : null}
                {activeFilter === "Type"
                  ? Object.entries(CollabType).map(([key, val]) => {
                      return (
                        <S.EachFilterContainer>
                          <label>
                            <input
                              type="radio"
                              name="collab_type"
                              value={key}
                              checked={collabType === key}
                              onChange={(event) =>
                                handleChange(event, "collab_type")
                              }
                            />{" "}
                            {val}
                          </label>
                        </S.EachFilterContainer>
                      );
                    })
                  : null}
                {activeFilter === "Gender"
                  ? Object.entries(Gender).map(([key, val]) => {
                      return (
                        <S.EachFilterContainer>
                          <label>
                            <input
                              type="radio"
                              name="gender"
                              value={key}
                              checked={gender === key}
                              onChange={(event) =>
                                handleChange(event, "gender")
                              }
                            />{" "}
                            {val}
                          </label>
                        </S.EachFilterContainer>
                      );
                    })
                  : null}
                {activeFilter === "Languages"
                  ? Object.entries(Language).map(([key, val]) => {
                      return (
                        <S.EachFilterContainer>
                          <label>
                            <input
                              type="checkbox"
                              name="languages"
                              value={key}
                              checked={languages.includes(key)}
                              onChange={(event) =>
                                handleLanguagesCheckboxChange(event, key)
                              }
                            />{" "}
                            {val}
                          </label>
                        </S.EachFilterContainer>
                      );
                    })
                  : null}
              </S.FiltersValueContainer>
            </S.Filters>
            <S.FiltersFooter>
              <S.FilterActionClose onClick={handleMenuToggle}>
                CLOSE
              </S.FilterActionClose>
              <S.FilterActionApply onClick={handleFilters}>
                APPLY
              </S.FilterActionApply>
            </S.FiltersFooter>
          </S.FiltersContainer>
        </S.OverlayMenu>
        <S.OverlayMenuSort isSortOpen={isSortOpen}>
          <S.OverlayHeader>
            <S.SortByText>Sort By</S.SortByText>
            <img
              src={close_icon}
              alt="Close icon"
              width={"20px"}
              height={"20px"}
              onClick={handleSortMenuToggle}
            />
          </S.OverlayHeader>

          <S.FiltersContainer>
            <S.SortValueContainer>
              {Object.entries(SortApplied).map(([key, val]) => {
                return (
                  <S.EachSortContainer>
                    <label
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      {val}
                      <input
                        type="radio"
                        name="sort_by"
                        value={key}
                        checked={selectedOption === key}
                        onChange={handleSortByChange}
                      />{" "}
                    </label>
                  </S.EachSortContainer>
                );
              })}
            </S.SortValueContainer>
          </S.FiltersContainer>
        </S.OverlayMenuSort>
      </S.SortFilterHeader>
      <S.InfluencerPaginationView>
        {matched_influencer_list &&
          matched_influencer_list.length > 0 &&
          matched_influencer_list.map((influencer) => {
            return <InfluencerCard influencer={influencer} />;
          })}
      </S.InfluencerPaginationView>

      {page_number === 1 && matched_influencer_list.length === 0 && (
        <div
          style={{
            textAlign: "center",
            marginBottom: "1rem",
            color: "rgb(230, 106, 68)",
            fontFamily: "Avenir Next LT Pro",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          Looks like no influencers match your selected filters.
        </div>
      )}

      {unmatched_influencer_list && unmatched_influencer_list.length > 0 && (
        <>
          <div
            style={{
              fontSize: "16px",
              padding: "0rem 1rem",
              fontWeight: "700",
            }}
          >
            Here are some additional influencer suggestions you might find
            interesting!
          </div>
          <S.InfluencerPaginationView>
            {unmatched_influencer_list.map((influencer) => {
              return <InfluencerCard influencer={influencer} />;
            })}
          </S.InfluencerPaginationView>
        </>
      )}

      {result_total_count === 0 ? (
        <h2 style={{ textAlign: "center" }}>
          No matched results found. Try removing some filters to broaden your
          search.
        </h2>
      ) : (
        <S.PaginationFooter>
          <S.PreviousBtn
            disabled={page_number === 1}
            onClick={handlePreviousPage}
          >
            <span>&lt;</span>
            Previous
          </S.PreviousBtn>
          <S.ActivePage>Page {page_number}</S.ActivePage>
          <S.NextBtn
            disabled={result_count_further_page === 0}
            onClick={handleNextPage}
          >
            Next
            <span>&gt;</span>
          </S.NextBtn>
        </S.PaginationFooter>
      )}
    </S.Container>
  );
};

export default InfluencerPagination;
