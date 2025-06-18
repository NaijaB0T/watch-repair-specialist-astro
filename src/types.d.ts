export interface Specialist {
  unique_id: string;
  source_url: string;
  name: string;
  website: string;
  phone: string;
  rating: number;
  review_count: number;
  image_url: string;
  address: {
    street_address: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
  };
  google_maps_url: string;
  nearby_specialists_ids: string[];
}
