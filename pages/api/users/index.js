import connectMongo from "../../../database/conn"
import { getUsers } from "../../../database/controller";

export default async function handler(req, res) {
    connectMongo().catch(()=>res.status(405).json({error:'Error in the Connection'}))

    const {method} = req

    switch(method){
        case 'GET':
            getUsers(req,res)
            res.status(200).json({method,nombre:'GET Request'});
            break;
        case 'POST':
            res.status(200).json({method,nombre:'POST Request'});
            break;
        case 'PUT':
            res.status(200).json({method,nombre:'PUT Request'});
            break;
        case 'DELETE':
            res.status(200).json({method,nombre:'DELETE Request'});
            break;
        default:
            res.setHeader('Allow',['GET','POST','PUT','DELETE'])
            res.status(405).end('Method${method}Not Alloed')

        }



    res.status(200).json({ name: 'John Doe' })
  }
   