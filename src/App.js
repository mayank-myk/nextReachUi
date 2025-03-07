import React, {useEffect} from "react";
import './App.css';
import 'react-multi-carousel/lib/styles.css'
import { Routes, Route } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import DiscoverPage from './desktop/components/DiscoverPage/DiscoverPage.tsx';
import Home from './desktop/components/Home/Home.tsx';
import InfluencerListing from "./desktop/components/InfluencerListing/InfluencerListing.tsx";
import ForInfluencers from "./desktop/components/ForInfluencers/ForInfluencers.tsx";
import Blogs from './desktop/components/Blogs/Blogs.tsx';
import Blog from "./desktop/components/Blogs/components/Blog.tsx";
import SuccessStories from './desktop/components/SuccessStories/SuccessStories.tsx';
import NextReachAcademy from "./desktop/components/NextReachAcademy/NextReachAcademy.tsx";
import YourCampaigns from "./desktop/components/Campaigns/YourCampaigns.tsx";
import NotFound from "./desktop/components/NotFound/NotFound.tsx";
import ProfileDetails from './desktop/components/PersonalDetails/ProfileDetails.tsx';
import LoginSignup from './desktop/components/Login_Signup/Login_Signup.tsx';
import ContactUs from './desktop/components/ContactUs/ContactUs.tsx';
import CampaignOverview from './desktop/components/CampaignOverview/CampaignOverview.tsx';
import InfluencerMatric from "./desktop/components/InfluencerMatric/InfluencerMatric.tsx";
import TermsAndConditions from "./desktop/components/TermsAndConditions/TermsAndConditions.tsx";
import PrivacyPolicy from "./desktop/components/PrivacyPolicy/PrivacyPolicy.tsx";

import MobileHome from './mobile/components/Home/MobileHome.tsx';
import MobileDiscoverPage from "./mobile/components/DiscoverPage/MobileDiscoverPage.tsx";
import MobileBlogs from "./mobile/components/Blogs/Blogs.tsx";
import MobileBlog from "./mobile/components/Blogs/components/Blog.tsx";
import MobileSuccesStories from "./mobile/components/SuccessStories/SuccessStories.tsx";
import MobileYourCampaigns from "./mobile/components/YourCampaigns/YourCampaigns.tsx";
import MobileProfileDetails from "./mobile/components/PersonalDetails/ProfileDetails.tsx";
import MobileLoginSignup from "./mobile/components/Login_Signup/Login_Signup.tsx";
import MobileContactUs from "./mobile/components/ContactUs/ContactUs.tsx";
import MobileNextReachAcademy from "./mobile/components/NextReachAcademy/NextReachAcademy.tsx";
import MobileInfluencerListing from "./mobile/components/InfluencerListing/InfluencerListing.tsx";
import MobileCampaignOverview from "./mobile/components/CampaignOverview/CampaignOverview.tsx";
import MobileInfluencerMatric from "./mobile/components/InfluencerMatric/InfluencerMatric.tsx";
import MobileNotFound from "./mobile/components/NotFound/NotFound.tsx"
import MobilePrivacyPolicy from './mobile/components/PrivacyPolicy/PrivacyPolicy.tsx';
import MobileTermsAndConditions from "./mobile/components/TermsAndConditions/TermsAndConditions.tsx";
import MobileForInfluencers from "./mobile/components/ForInfluencers/ForInfluencers.tsx";
import { useDispatch, useSelector } from "react-redux";
import { setHomeMetaData } from "./redux/actions/homeAction.js";
import { resetCollabOption } from "./redux/actions/influencerMatricActions.js";
import { userIdSelector } from "./redux/selectors/profileDetailsSelector.js";

// Create a theme to pass to the provider
const theme = createTheme();

function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 
  const userId = useSelector(userIdSelector) || 1;
  const dispatch = useDispatch();
  
  useEffect(()=>{
    fetch(
      `https://nextreach-backend-fxdmcnbgf3gsesht.southindia-01.azurewebsites.net/v1/web/home/metadata?client_id=${userId}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        dispatch(setHomeMetaData(response));
      });
    dispatch(resetCollabOption());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Routes>
      <Route path="/" element={isMobile ? <MobileHome /> : <Home />} />
      <Route path="/discover" element={isMobile ? <MobileDiscoverPage/> : <DiscoverPage />} />
      <Route path="/top_rated_influencers" element={isMobile ? <MobileInfluencerListing /> : <InfluencerListing />} />
      <Route path="/for_influencers" element={isMobile ?  <MobileForInfluencers />  : <ForInfluencers />} />
      <Route path="/blogs" element={isMobile ? <MobileBlogs /> : <Blogs />} />
      <Route path="/blog/:url" element={isMobile ? <MobileBlog /> : <Blog />} />
      <Route path="/success_stories" element={isMobile ? <MobileSuccesStories/> : <SuccessStories />} />
      <Route path="/next_reach_academy" element={isMobile ? <MobileNextReachAcademy/> : <NextReachAcademy />} />
      <Route path="/your_campaigns" element={isMobile ? <MobileYourCampaigns/> : <YourCampaigns/>}/>
      <Route path="/profile_details" element={isMobile ? <MobileProfileDetails/> : <ProfileDetails/>}/>
      <Route path="/login_signup" element={isMobile ? <MobileLoginSignup/> : <LoginSignup />}/>
      <Route path="/contact_us" element={isMobile ? <MobileContactUs/> : <ContactUs/>}/>
      <Route path="/terms_and_conditions" element={isMobile ? <MobileTermsAndConditions/> : <TermsAndConditions/>}/>
      <Route path="/privacy_policy" element={isMobile? <MobilePrivacyPolicy /> : <PrivacyPolicy/>}/>
      <Route path="/campaign_overview/:campaignId" element={isMobile ? <MobileCampaignOverview/> : <CampaignOverview/>} />
      <Route path="/influencer_matric/:influencerId" element={isMobile? <MobileInfluencerMatric/> : <InfluencerMatric/>} />
      <Route path="*" element={isMobile? <MobileNotFound/> : <NotFound />} />
    </Routes>
  );
}

export default App;
