export interface Specialist {
  unique_id: string;
  source_url: string;
  name: string;
  website: string;
  phone: string;
  rating: number | null;
  review_count: number | null;
  image_url: string;
  address?: { // Made address optional
    street_address: string | null;
    city: string | null;
    state: string | null;
    postal_code: string | null;
    country: string | null;
  };
  google_maps_url: string;
  nearby_specialists_ids: string[];
}
