import { getAllProducts } from "../../lib/redis";

export default async function handler(req, res){
    const responseData = {
        success: false,
        products: [],
        number: 0
    }
    try{
       const data = await getAllProducts();
        responseData.success = true;
        responseData.products= JSON.parse(data);
        responseData.length = JSON.parse(data).length
        res.json(responseData);
    }catch(error){
        responseData.error = error.message;
        res.status(500).json(responseData)
    }
}