import {Router} from 'express';

const router = Router();
//ROUTES
router.get('/',(req,res)=>res.send({message:"HEllo world"}))



export default router;