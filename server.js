import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import MiniAdminRoute from "./Routes.js";

const app = express();
const PORT = 6005;

app.use(express.json());
app.use(cors());
app.use("/api", MiniAdminRoute);

app.get("/", function(req, res) {
    res.send("hi");
});

mongoose.connect("mongodb+srv://ITMonksSolutions:ITMonksSolutions@cluster0.tgtwepd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("db connected");
    app.listen(PORT, () => {
        console.log(`server running successfully on ${PORT}`);
    });
})
.catch((error) => {
    console.error("db connection error:", error);
});
