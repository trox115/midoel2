import { getFeatured } from "../../lib/redis";

export default async function handler(req, res){
  const responseData = {
         success: false,
         products: [],
         number: 0
     }
  try{
    const response = await getFeatured();
    console.log(response);
    responseData.success = true;
    responseData.products= JSON.parse(response);
    responseData.number =JSON.parse(response);
    res.json(responseData);
  }catch(error){
        responseData.error = error.message;
        res.status(500).json(responseData)
    }
}