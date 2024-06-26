const express = require('express');
const connectDB = require('./db/db_connection');
const  router = require('./routes/V1');
const app = express()

app.listen(4080,
    () => {
        console.log("server is starting");
    }
)
app.use(express.json())

app.use("/v1",router)


connectDB()