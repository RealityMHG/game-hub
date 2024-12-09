import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "78d7f59fc0fe4f6681aa7d63253163c8",
  },
});
