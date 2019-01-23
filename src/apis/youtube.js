import axios from "axios";

const KEY = "AIzaSyCZTci0rfMTmRoqchq8AokhTmEEWrd2R3c";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY
  }
});
