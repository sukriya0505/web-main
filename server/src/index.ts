import "dotenv/config";
import express, { Application } from 'express';
import router from "./routes/user.routes";

const app: Application = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

app.get('/', (req, res) => {
    res.send("Hello World!");

});

app.listen(4444, () => {
    console.log(`Server running on localhost:4444`);
});