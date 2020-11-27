const  { Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    
    username: String,
    email: String,
    password: String
})
userSchema.methods.encryptPassword = async (password)=>{
    const salt = await bcrypt.genSalt(10);
  return  await bcrypt.hash(password,salt);
}

module.exports = model('User',userSchema);