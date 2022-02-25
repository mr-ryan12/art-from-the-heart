export interface AppState {
  categories: Array<string>;
}

export interface CategoriesProps {
  categories: Array<string>;
}

export interface CategoryCardProps {
  category: string;
}

export interface ErrorHandlingProps {
  message: string;
}

export interface ArtDetailsProps {
  artDetails: ArtDetails;
  isLiked: boolean | undefined;
}

interface ArtDetails {
  id: number;
  _score: number;
  thumbnail: {
    alt_text: string;
    width: number;
    lqip: string;
    height: number;
  };
  date_start: number;
  date_end: number;
  title: string;
  image_id: string;
  artist_title: string;
}