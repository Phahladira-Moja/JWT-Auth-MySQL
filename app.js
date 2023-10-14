require("dotenv").config();
const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    success: 1,
    message: "This is working",
  });
});

app.listen(process.env.APP_PORT, () =>
  console.log("We are listening on port: ", process.env.APP_PORT)
);
