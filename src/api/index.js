import axios from 'axios';
export async function getWeatherData(endpoint, place_id, measurementSystem) {

    const options = {
        method: 'GET',
        url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
        params: {
            place_id,
            language: 'en',
            units: measurementSystem
        },
        headers: {
            'x-rapidapi-key': '639ae7f118msh4d3eee52031192dp1408a1jsn327348c93841',
            'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }

}