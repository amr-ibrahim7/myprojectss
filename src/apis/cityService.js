import { fetchData } from "./apiService";

// data fetching city
export const fetchCities = async (language) => {
  try {
    const result = await fetchData("cities", language);
    return result.data || [];
  } catch (error) {
    console.error("Error fetching cities:", error);
    throw error;
  }
};
