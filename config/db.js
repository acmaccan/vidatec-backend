const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = () => {
  try {
    mongoose.connect(process.env.MONGODB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      server: {
        socketOptions: { keepAlive: 300000, connectTimeoutMS: 300000 }
      },
      replicaSet: {
        socketOptions: { keepAlive: 300000, connectTimeoutMS: 300000 }
      }
    });
    console.log('Database connection ok');
  } catch (error) {
    console.log(error);
    throw new Error('Error database connection');
  }
};

module.exports = {
  dbConnection,
};
