const mongoose=require('mongoose');
const {schema,model}=mongoose;
const userSchema=new schema({
    name:String,
    email:String,
    password:String,
});

userSchema.methods.matchPassword=function(enterPassword){
    return enterPassword===this.password;
};

module.exports=model('User',userSchema)