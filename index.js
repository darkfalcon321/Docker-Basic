const express = require("express");
const mongoose = require("mongoose");
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require("./config/config");
const app = express();
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
const connectWithRetry = () => {
    mongoose
    .connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log("successfully connected to DB"))
    .catch((e) => {
        console.log(e)
        setTimeout(connectWithRetry, 3000)
    });
};

connectWithRetry();


app.get("/", (req, res) => {
    res.send("<h1>New update -> DB</h1>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`))