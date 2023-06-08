const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});

const app=require('./app');
const db=process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD);
//console.log(app.get('env'));

mongoose.connect(db,{
    useNewUrlParser:true
    //useCreateIndex:true, 
    //useFinfAndModify:false
}).then(con=>{
    console.log("below is")
    console.log(con.connection);
    console.log('DB CONNECTION SUCCESSFUL!')
})

 


console.log(process.env);
const port=process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`running on ${port}..`);
})  