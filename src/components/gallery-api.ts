import axios from "axios";
import { Image } from "./types";

axios.defaults.baseURL = "https://api.unsplash.com";
const API_KEY = "j7KREmx57rDC9GV5z8ZPDh25pUoqfyKxKoxzmOgnzUg";

interface FetchImgResponse {
  results: Image[];
  total: number;
  total_pages: number;
}

export const fetchImg = async (
  query: string,
  page: number
): Promise<FetchImgResponse> => {
  try {
    const { data } = await axios.get<FetchImgResponse>("/search/photos", {
      params: {
        client_id: API_KEY,
        query: query,
        page: page,
        per_page: 12,
      },
    });

    return data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
