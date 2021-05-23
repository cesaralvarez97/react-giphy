import { API_KEY, API_URL } from "./settings";

export default function getGifs({ keyword = "morty" } = {}) {
  const apiURL = `${API_URL}gifs/search?api_key=${API_KEY}=${keyword}&limit=25&offset=0&rating=g&lang=en`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((image) => {
        const { title, id } = image;
        const { url } = image.images.downsized_medium;
        return { title, id, url };
      });
      return gifs;
    });
}
