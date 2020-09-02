import React  from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';

function HomeScreen(props) {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("http://localhost:5000/api/products");
            setProduct(data);
        }
        fetchData();
        return () => {
            //
        }
    }, [])

    return (
        <div>
            <div className="banner-container banner-home">
                <Link to="/">
                    <img className="banner" src='/img/banner-global.png' alt=""></img>
                </Link>
            </div>
            <ul className="products">
                {
                products.map(product =>
                    <li key={product._id} className="card-home">
                        <div>
                            <div className="product">
                                    <Link to={'/product/' + product._id}>
                                        <img className="product-image" src={product.image} alt="product" />
                                    </Link>
                                <div className="product-name">{product.name}</div>
                                <div className="product-brand">{product.description}</div>
                                <div className="product-price">S./{product.price}</div>
                                <div className="product-rating">{product.rating} estrellas ({product.view} vistas)</div>
                                <div className="product-descuento">Descuento {product.descuento}%</div>
                            </div>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default HomeScreen;
