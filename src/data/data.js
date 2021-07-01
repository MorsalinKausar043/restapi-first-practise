const mongoose = require('mongoose');
const validator = require('validator');

const dataSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true ,
        minlenght : [3 , "not avilable charecter"] ,
        trim : true,
        uppercase : true
    },
    number : {
        type : Number ,
        minlenght : 10,
        unique : true,
        required : true
    },
    email : {
        type : String,
        required : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('invalid email')
            }
        }
    },
    address : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
})


const StudentList = new mongoose.model("StudentList" , dataSchema) ;

module.exports = StudentList ;

