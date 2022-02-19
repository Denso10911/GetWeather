import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/",
});

export const weatherAPI = {
  getLocation(cityNameInput) {
    return instance.get(
      `geo/1.0/direct?q=${cityNameInput}&limit=1&appid=5421867f9d50d00be45654af1ffcc8f4`
    );
  },
  getWeather(lat, lon) {
    return instance.get(
      `data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=5421867f9d50d00be45654af1ffcc8f4`
    );
  },
};
