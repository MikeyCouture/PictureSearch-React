import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 6524243b1c058c99e8bb916eca67ad5b47ca167f29d574e5e95f8d491ea228d2"
    }
});