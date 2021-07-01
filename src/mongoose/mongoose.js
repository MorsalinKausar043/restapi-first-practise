const mongoose = require("mongoose") ;

mongoose.connect("mongodb://localhost:27017/student-api" , {useCreateIndex : true , useFindAndModify : true , useNewUrlParser : true , useUnifiedTopology : true}).then(() => console.log("mongoose is complete and this port is 27017")).catch((error) => console.log(`not connect because ${error}`))