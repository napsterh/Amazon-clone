import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';



function ProductScreen(props) {

        const productDetails = useSelector((state) => state.productDetails);
        const { product, loading, error } = productDetails;
        console.log(product);
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(detailsProduct(props.match.params.id));
            return () => {
                //
            }
        }, [])

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
                                            Estado: {product.status}
                                        </li>
                                        <li>
                                            Cantidad: <select>
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                                <option value="">4</option>
                                            </select>
                                        </li>
                                        <li>
                                            <button className="button primary">Agregar al carrito</button>
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

