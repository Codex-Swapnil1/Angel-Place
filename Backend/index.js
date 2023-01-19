const express = require("express");
const { connection } = require("./config/db");
const{userRouter}=require("./routes/user.route")
const cors = require("cors");
// const { userRouter } = require("./routes/User.route");
// const { authenticate } = require("./middlewares/auhtenticate.mw");
// const { postRouter } = require("./routes/Post.route");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/user",userRouter)





app.listen(8080, async (req, res) => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
    console.log({ err: "Error while connecting to DB" });
  }
  console.log("Running at PORT 8080");
});
