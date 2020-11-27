import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/test',{ useUnifiedTopology: true ,useNewUrlParser: true
, useCreateIndex:true
}).then(db=> console.log("Data base is connected"),)
    .catch(err => console.log(err));
    
 
