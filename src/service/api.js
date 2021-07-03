import axios from 'axios';
const baseUrl = 'https://api.thecatapi.com/v1/'
export const getCategories =  async () => {

   try {
      const res =  await axios.get(`${baseUrl}categories `);
      return await res.data;
   }catch (error) {
       return error
   }


}