const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const DB_OPTIONS = {
      dbName: "preparationdb",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    const conn = await mongoose.connect(process.env.MONGOOSE_URI, DB_OPTIONS);
    console.log("connection connected==>", conn.connection.host);
  } catch (error) {
    console.log("error in db", error.message);
    process.exit();
  }
};
module.exports = connectDB;
