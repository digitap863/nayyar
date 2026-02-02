import cors from "cors";
import "dotenv/config";
import express from "express";
import morgan from "morgan";
import { dbConnect } from "./config/db.mjs";
import router from "./routes/routes.mjs";
import serviceRoutes from "./routes/serviceRoutes.mjs";

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(morgan("dev"));
app.use("/api/uploads", express.static("uploads"));



dbConnect()
app.use("/api/", router)
app.use("/api/", serviceRoutes)



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});