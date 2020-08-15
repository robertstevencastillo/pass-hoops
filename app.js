const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();
const contact = require("./routes/contact");

const PORT = process.env.PORT || 5000;
require("dotenv").config();

// Parse Data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//HTTP request logger
app.use(morgan("tiny"));

//Routes
app.use("/contact", contact);

//Step 3 - deployment
//FOR DEPLOYMENT - HEROKU
//Serve Static assets if in production
if (process.env.NODE_ENV === "production") {
  //Set Static folder
  app.use(express.static("client/build"));

  app.get("*", (request, response) => {
    response.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//LISTEN
app.listen(PORT, console.log(`Server is starting at: ` + PORT));
