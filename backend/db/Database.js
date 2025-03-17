const mongoose = require("mongoose"); 

// Define the function to establish a connection to the MongoDB database
const connectDatabase = () => {
    mongoose
        .connect(process.env.DB_URL) // No need to specify useNewUrlParser or useUnifiedTopology (handled automatically by mongoose)
        .then((data) => {
            console.log(`MongoDB connected with server: ${data.connection.host}`);
        })
        .catch((err) => {
            // Log an error message if the connection fails
            console.error(`Database connection failed: ${err.message}`);
            process.exit(1); // Exit with a failure code (1 indicates an error occurred)
        });
};

module.exports = connectDatabase;