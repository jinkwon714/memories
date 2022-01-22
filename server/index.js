import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// to connect server application to the real database -> mongodb needed
// mongoDB Atals cloud, that's what I will use/ mongoDB cloud hosts data

const CONNECTION_URL =
  "mongodb+srv://jin:jin714@cluster0.yo8ep.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port${PORT}`))
  )
  .catch((error) => console.log(error.message));

// useFindAndModify: causing some crashes for some reason - need to study why
// mongoose.set("useFindAndModify", false);
