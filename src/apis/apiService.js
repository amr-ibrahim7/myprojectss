import axios from "axios";

const BASE_URL = "https://backend.trustaqar.com/api";

// دالة جلب البيانات العامة
// data fetch data
export const fetchData = async (endpoint, language, params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`, {
      headers: {
        lang: language,
      },
      params: params,
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
};
