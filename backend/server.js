import express from 'express';
const cors = require('cors');
import data from './models'

const app = express();

app.use(cors());


app.use("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId);
    if(product)
        res.send(product);
    else
        res.status(404).send({msg: "Producto no encontrado."})
});

app.get("/api/products", (req, res) => {

    res.send(data.products);
});

app.listen(5000, () => {
    console.log("el servidor esta ejecutando en http://localhost:5000")
});