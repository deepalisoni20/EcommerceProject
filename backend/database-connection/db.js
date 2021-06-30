import mongoose from 'mongoose';


const Connection = async (username,password) =>{
  const URL = `mongodb+srv://${username}:${password}@cluster0.upmaq.mongodb.net/Megamart?retryWrites=true&w=majority`;
 try{
    await mongoose.connect(URL,{
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    });
    console.log('Database connected successfully');
  }catch(error){
    console.log("Error:", error.messaage);
  }
}

export default Connection;