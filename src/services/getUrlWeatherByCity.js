import {url_base_weather, api_key} from './../constants/api_url';
const getUrlWeatherBYCity = city => {
    return `${url_base_weather}?q=${city}&appid=${api_key}`; 

}
export default getUrlWeatherBYCity;