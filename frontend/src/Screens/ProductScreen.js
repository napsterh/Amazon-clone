import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';



function ProductScreen(props) {

        const [qty, setQty] = useState(1);
        const productDetails = useSelector((state) => state.productDetails);
        const { product, loading, error } = productDetails;
        console.log(product);
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(detailsProduct(props.match.params.id));
            return () => {
                //
            }
        }, []);

        const handleAddToCart = () => {
            props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
        }

        return (
            <div>
                <div className="back-to-result">
                    <Link to="/">Regresar</Link>
                </div>
                {loading? <div>Cargando...</div> :
                    error? <div>{error}</div> :
                    (
                        <>
                            <div className="banner-container">
                                <Link to="/">
                                    <img className="banner" src='/img/banner-global.png' alt=""></img>
                                </Link>
                            </div>
                            <div className="details">
                                <div className="details-image">
                                    <img src={product.image} alt="product"/>
                                </div>
                                <div className="details-info">
                                    <ul>
                                        <li>
                                            <h4>{product.name}</h4>
                                        </li>
                                        <li>
                                            {product.rating} Estrellas ({product.view} Vistas)
                                        </li>
                                        <li>
                                            <div>Descuento {product.descuento}%</div>
                                        </li>
                                        <li>
                                            <b>S./{product.price}</b>
                                        </li>
                                        <li>
                                            {product.description}
                                        </li>
                                    </ul>
                                    <a href={product.uri_web} className="button-web">
                                        Ir a Web
                                    </a>
                                </div>
                                <div className="details-action">
                                    <ul>
                                        <li>
                                            Precio: {product.price}
                                        </li>
                                        <li>
                                            Estado: {product.countInStock > 0 ? "En stock" : "Sin stock"}
                                        </li>
                                        <li>
                                            Cantidad: <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                                                { [...Array(product.countInStock).keys()].map(x =>
                                                    <option key={x+1} value={x+1}>{x+1}</option>
                                                ) }
                                            </select>
                                        </li>
                                        <li>
                                            {product.countInStock > 0 && (
                                            <button onClick={handleAddToCart} className="button primary">Agregar al carrito</button>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        )
}

export default ProductScreen;

