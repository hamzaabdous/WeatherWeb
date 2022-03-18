import axios from "axios";

const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
const apiKey = "2140d960d56c9d073b6091ff8394acb3";

export const getWeatherDataByCity = async (cityname) => {
  try {
    const { data } = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getWeatherDataByCoord = async (lat, lon) => {
  try {
    const { data } = await axios.get(
      baseUrl + `&lat=${lat}&lon=${lon}&appid=${apiKey}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
