const mongoose=require('mongoose');

const connectDB=async()=>{
    try {
    const conn=await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true

    })
    console.log(`MongoD connected ${conn.connection.host}`.cyan.underline.bold)

    } catch (error) {
        
    }
}

module.exports=connectDB