const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const router = require("./Routes/Store-Routes");
app.use("/Schnucks", router);
mongoose.connect("mongodb+srv://Jose-V:Josevargas123144!@cluster0.qwyfktd.mongodb.net/Schnuks?retryWrites=true&w=majority"
).then(() => console.log("Connected To Database"))
.then(() => {
    app.listen(3001)
}).catch((err) => console.log(err));