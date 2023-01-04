const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const blogRoutes = require("./routes/blogroute");
const userRoutes = require("./routes/userroutes");
const commentRoutes = require("./routes/commentroute");
const app = express();
const PORT = 5548;
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
dotenv.config();
mongoose.set("strictQuery", false);
mongoose.connect(process.env.URI, {
  useNewUrlParser:true,
  useUnifiedTopology:true,
  autoIndex:true,
});
app.use("/api", blogRoutes);
app.use("/api", userRoutes);
app.use("/api", commentRoutes);
app.use(
  router.get("/api", (req, res) => {
    res.send("api built by ualid");
  })
);
app.listen(process.env.PORT, () => {
  console.log(`you can now listening to the app on port ${PORT}`);
});
