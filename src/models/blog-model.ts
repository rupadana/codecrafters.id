interface AuthorModel {
  id: number;
  name: string;
  email: string;
  email_verified_at: null;
}

interface Thumbnail {
  id: number;
  model_type: string;
  model_id: number;
  uuid: string;
  collection_name: string;
  name: string;
  file_name: string;
  mime_type: string;
  disk: string;
  conversions_disk: string;
  size: number;
  manipulations: string;
  custom_properties: string;
  generated_conversions: string;
  responsive_images: string;
  order_column: number;
  created_at: Date;
  updated_at: Date;
}

export interface BlogModel {
  id: number;
  user_id: number;
  title: string;
  slug: string;
  description: string;
  content: string | TrustedHTML;
  featured_image: string;
  parent_id: number | null;
  status: string;
  published_at: string | null;
  author: AuthorModel;
  thumbnail: Thumbnail;
}
