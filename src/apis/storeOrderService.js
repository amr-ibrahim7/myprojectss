const BASE_URL = "https://backend.trustaqar.com/api";

export const storeOrderForm = async (formData) => {
  const form = new FormData();
  Object.keys(formData).forEach((key) => {
    form.append(key, formData[key]);
  });

  try {
    const response = await fetch(`${BASE_URL}/store-order`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: form,
    });

    const result = await response.json();
    // console.log("Response from API:", result);
    if (!response.ok) {
      throw new Error(result.message || `Error: ${response.status}`);
    }
    return result.message;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
};
