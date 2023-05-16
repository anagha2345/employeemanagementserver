const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/ems')

//model
const Employee=mongoose.model('Employee',{
    id:String,
    uname:String,
    age:Number,
    designation:String,
    salary:Number

})

module.exports={
    Employee
}