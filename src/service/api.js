import axios from 'axios';
const baseUrl = 'https://api.thecatapi.com/v1/';

export const getCategories =  async () => {

   try {
      const res =  await axios.get(`${baseUrl}categories `);
      return await res.data;
   }catch (error) {
       return error
   }


}

export const getCategoryImages =  async (page, cat_id) => {

   try {
      const res =  await axios.get(`${baseUrl}images/search?limit=10&page=${page}&category_ids=${cat_id} `);
      return await res.data;
   }catch (error) {
       return error
   }


}

