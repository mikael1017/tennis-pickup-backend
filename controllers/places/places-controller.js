import axios from "axios";

const getPlaces = async (latitude, longitude, radius, apiKey) => {
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&key=${apiKey}`;
  const response = await axios.get(url);
  return response.data;
};
export default getPlaces;
