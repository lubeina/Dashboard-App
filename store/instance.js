import axios from "axios";

export const instance = axios.create({
  baseURL:
    "https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&",
});

export default instance;
