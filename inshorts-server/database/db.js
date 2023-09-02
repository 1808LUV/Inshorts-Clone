import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-hgkftyi-shard-00-00.zrqyrh3.mongodb.net:27017,ac-hgkftyi-shard-00-01.zrqyrh3.mongodb.net:27017,ac-hgkftyi-shard-00-02.zrqyrh3.mongodb.net:27017/INSHORTS-CLONE?ssl=true&replicaSet=atlas-fxfa3h-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL, {useNewURLParser : true});
       console.log('Database connected successfully');
    }catch (error) {
        console.log('Error while connecting with the database', error);
    }
}

export default Connection;