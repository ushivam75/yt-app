import React from "react";
import axios from "axios";

const KEY = "AIzaSyCCTY0UoesxF6B2SO5H4Awxe-KJJ-gH2KM";

export default axios.create({
  baseURL: `https://www.googleapis.com/youtube/v3`,
  params: {
    part: "snippet",
    type: "video",
    maxResult: 5,
    key: KEY,
  },
});
