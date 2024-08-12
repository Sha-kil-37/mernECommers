import axios from "axios";
//
const baseUrl = `http://localhost:8000/api/v1`; // base url
// get all product category
export const getProductCategory = async () => {
  const url = `${baseUrl}/get-product-category`;
  return await axios
    .get(url)
    .then((res) => res)
    .catch((error) => error);
};
// get all product
export const getAllProduct = async (productsLoderData) => {
  const { searchText, perPage, pageNumber } = productsLoderData;
  if (searchText) {
    const url = `${baseUrl}/get-all-product/${searchText}/${perPage}/${pageNumber}`;
    return await axios
      .get(url)
      .then((res) => res)
      .catch((error) => error);
  } else {
    const url = `${baseUrl}/get-all-product/${null}/${perPage}/${pageNumber}`;
    return await axios
      .get(url)
      .then((res) => res)
      .catch((error) => error);
  }
  //
};
