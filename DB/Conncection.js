const mongoose = require('mongoose');

const URI ="mongodb+srv://UTD:utd123@cluster0.aphc3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('Conexión exitosa');
};

module.exports = connectDB;
