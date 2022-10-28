import { getAllProducts } from "../../lib/redis";

export default async function handler(req, res){
    const responseData = {
        success: false,
        products: [],
        number: 0
    }
    const { slug } = req?.query ?? {} 
    try{
      const data = await getAllProducts();
      const newData = JSON.parse(data);
      const product = newData.find((product) => product.slug === slug);
      responseData.success = true;
      responseData.products= [product];
      responseData.length = 1;
      res.json(responseData);
    }catch(error){
        responseData.error = error.message;
        res.status(500).json(responseData)
    }
}