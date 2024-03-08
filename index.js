const { connectToMongoose } = require("./database");
const { Sample } = require("./SampleModel");

connectToMongoose();



// Creating a sample data
const createSampleData = async () => {
     const users = [
          {
               name: "Aman",
               email: "aman@gmail.com",
               password: "aman123922"
          },
          {
               name: "Rohit",
               email: "rohit@gmail.com",
               password: "rohit12355"
          }
     ];

     try {
          await Sample.insertMany(users);
          console.log("Data is created sucessfully...");

     } catch (error) {
          console.log(`Error happens while creating sample data with: ${error}`)
     }
}

createSampleData();