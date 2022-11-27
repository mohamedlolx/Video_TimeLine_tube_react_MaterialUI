import axios from "axios";

const Base_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: { maxResults: "50" },
  headers: {
    "X-RapidAPI-Key": "7ffa0a18d5msh51c384d30df9544p1eace8jsn1fc2731651ae",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${Base_URL}/${url}`, options);
  return data;
};
