import axios from "axios";

interface Picture {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  slug: string;
}

interface FetchPicturesResponse {
  results: Picture[];
  total_pages: number;
}

const fetchPictures = async (
  searchValue: string,
  page: number = 1,
  per_page: number = 5
): Promise<FetchPicturesResponse> => {
  const accessKey = "mKl4HWZDm9TQAX7hIWMXYsezaqscAetuYufJQcGi1yA";
  const res = await axios.get<FetchPicturesResponse>("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
    params: {
      query: searchValue,
      page,
      per_page,
    },
  });
  return res.data;
};

export default fetchPictures;
