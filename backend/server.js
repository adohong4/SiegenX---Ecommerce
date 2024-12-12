const app = require("./src/app");
const express = require('express');
const cors = require('cors');

require('dotenv').config();

const PORT = process.env.PORT;

app.use(express.json())
app.use(cors());

const server = app.listen(PORT, () => {
    console.log(`Server Start on http://localhost:${PORT}`)
})