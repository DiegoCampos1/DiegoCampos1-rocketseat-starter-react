import axios from "axios";

const api2 = axios.create({
  baseURL: "https://api.mercadolibre.com/items",
});

export default api2;
