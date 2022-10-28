import { getHeader } from "../../lib/redis";

export default async function handler(req, res){
    const responseData = {
        success: false,
        header: {},
        footer: {},
        number: 0
    }
    try{
       const data = await getHeader();
        responseData.success = true;
        responseData.header= JSON.parse(data.data);
        responseData.footer = JSON.parse(data.footer);
        res.json(responseData);
    }catch(error){
        responseData.error = error.message;
        res.status(500).json(responseData)
    }
}