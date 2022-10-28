import { getNew } from "../../lib/redis";


export default async function handler(req, res){
    const responseData = {
        success: false,
        products: [],
        number: 0
    }
    try{
       const data = await getNew();
        responseData.success = true;
        responseData.products= JSON.parse(data);
        responseData.number = JSON.parse(data).length
        res.json(responseData);
    }catch(error){
        responseData.error = error.message;
        res.status(500).json(responseData)
    }
}