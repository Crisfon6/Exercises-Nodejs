import { Router } from "express";
const router = Router();

//database connection
import {connect} from '../database';
import { ObjectID } from "mongodb";

router.get('/',async (req,res)=>{
    const db = await connect();
    const result = await db.collection('task').find({}).toArray();
    // console.log(result);
    
    res.json(result)
})
router.post ( '/',async (req,res)=>{
    const db = await connect();
    // res.send("Task crated")
    // const {title,description} = req.body;
    const  task = {
        title : req.body.title,
        description: req.body.description
    };
    const result = await db.collection('task').insertOne(task);
    res.json(result.ops[0])
    
})
router.get('/:id',async (req,res)=>{
    const db = await connect();
    const {id} = req.params;
    const result = await db.collection('task').findOne({_id: ObjectID(id)});
    res.send(result);
})
router.put('/:id',async(req,res)=>{
    const db = await connect();
    const {id} = req.params;
    const updateTask = {
        title : req.body.title,
        description: req.body.description
    }
     await db.collection('task').updateOne({_id: ObjectID(id)},{$set :updateTask});
    res.json({message: `Task update ${id}`,});
});
router.delete('/:id',async (req,res)=>{
    const db = await connect();
    const {id} = req.params;
    const result = await db.collection('task').deleteOne({_id: ObjectID(id)});
    res.json(
        {
            message: `Task ${id} deleted`,
            result
        }
    );
})
export default router;