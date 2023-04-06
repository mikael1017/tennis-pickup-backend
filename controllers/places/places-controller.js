import axios from "axios";

const placesController = (app) => {
  app.get("/places/", async (req, res) => {
    const { latitude, longitude, radius, apiKey } = req.query;
    const places = await getPlaces(latitude, longitude, radius, apiKey);
    res.send(places);
  });
};
const getPlacesByGeo = async (latitude, longitude, radius, apiKey) => {
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&key=${apiKey}`;
  const response = await axios.get(url);
  return response.data;
};
export default getPlaces;
