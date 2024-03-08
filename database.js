const mongoose = require("mongoose");

const connectionURI = "mongodb+srv://amanraj123922:Aman_Raj%40123922@cluster0.lnefzhq.mongodb.net/"

// Aman_Raj%40123922 
const connectToMongoose = async () => {
     try {
          await mongoose.connect(connectionURI);
          console.log("connection sucessful to mongodb");
     } catch (error) {
          console.log(`Error happens while connecting to mongoose with: ${error}`);
     };
};


module.exports = { connectToMongoose };