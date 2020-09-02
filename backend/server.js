import express from 'express';
const cors = require('cors');
import data from './models'

const app = express();

app.use(cors());
app.get("/api/products", (req, res) => {

    res.send(data.products);
});

app.listen(5000, () => {
    console.log("el servidor esta ejecutando en http://localhost:5000")
});