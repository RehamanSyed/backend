const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGOOSE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connection connected==>", conn.connection.host);

  } catch (error) {
    console.log("error in db", error.message);
    process.exit();
  }
};
module.exports = connectDB;
