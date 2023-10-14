require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");

app.use(express.json());

app.use("/api/users", userRouter);

app.get("/api", (req, res) => {
  res.json({
    success: 1,
    message: "This is working",
  });
});

app.listen(process.env.APP_PORT, () =>
  console.log("We are listening on port: ", process.env.APP_PORT)
);
