export interface CampaignOverviewModel {
  id: number;
  last_updated_at: string;
  campaign_managed_by: string;
  influencer_basic_detail: {
    id: number;
    name: string;
    profile_picture: string;
    niche: string;
    city: string;
    profile_visited: true;
    views_charge: number;
    content_charge: number;
    instagram_followers: string;
    youtube_followers: string;
  };
  stage: string;
  type_of_content: string;
  rating: number;
  review: string;
  influencer_finalization_date: string;
  content_shoot_date: string;
  content_post: {
    date: string;
    insta_post_link: number;
    youtube_post_link: number;
    fb_post_link: number;
    billing_info: {
      billing_amount: number;
      billing_payment_at: string;
      billing_payment_status: string;
    };
  };
  first_billing: {
    campaign_metrics: {
      views: number;
      likes: number;
      comments: number;
      shares: number;
    };
    billing_info: {
      billing_amount: number;
      billing_payment_at: string;
      billing_payment_status: string;
    };
  };
  second_billing: {
    campaign_metrics: {
      views: number;
      likes: number;
      comments: number;
      shares: number;
    };
    billing_info: {
      billing_amount: number;
      billing_payment_at: string;
      billing_payment_status: string;
    };
  };
  post_insights: string[];
  pending_deliverables: string[];
}

export interface InfluencerDetailsModel {
  id: number;
  name: string;
  profile_picture: string;
  niche: string;
  city: string;
  profile_visited: boolean;
  views_charge: number;
  content_charge: number;
  instagram_followers: null;
  youtube_followers: null;
}
