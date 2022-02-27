export interface AppState {
  categories: Array<string>;
  darkMode: string;
  isDarkModeOn: boolean;
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

export interface ArtViewState {
  userLikesPhoto: boolean | undefined;
  singlePiece: undefined | ArtViewImageDetails | any;
  isLoading: boolean;
  artPieces: {
    id: number;
    image_src: string;
    description: string;
    title: string;
    date_start: number;
    image_id: string;
    artist_title: string;
  }[];
  randomImageId: string;
  error: string;
}

interface ArtViewImageDetails {
  id: number;
  image_src: string;
  description: string;
  title: string;
  date_start: number;
  date_end: number;
  image_id: string;
  artist_title: string;
  thumbnail: {
    alt_text: string;
    height: number;
    lqip: string;
    width: number;
  }
}

export interface ArtViewProps {
  category: string;
}

export interface FeaturedArtProps {
  randomImageId: string;
  findPiece: (value: boolean) => void;
  userLikesPhoto: boolean | undefined;
}

export interface UserChoicesProps {
  findPiece: (value: boolean) => void;
}