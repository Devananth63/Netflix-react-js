import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import DBConnector from "../config/dbconnector.js";
import HTRoute from '../routes/HTRoutes.js';
dotenv.config();
DBConnector();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json({ limit: '50mb' })); // Increase payload limit to 50MB
app.use(express.urlencoded({ extended: true, limit: '50mb' })); // Increase payload limit to 50MB

app.use("/api/", HTRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
