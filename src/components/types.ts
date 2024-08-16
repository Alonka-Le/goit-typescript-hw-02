export interface Image {
  id: number;
  alt_description: string;
  description: string;
  likes: number;
  urls: {
    small: string;
    regular: string;
  };
}

export interface OpenModalProps {
  alt_description: string;
  description: string;
  likes: number;
  regular: string;
}
