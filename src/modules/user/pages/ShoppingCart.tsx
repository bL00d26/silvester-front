import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ShoppingCart() {
    return (
        <Container className="shoppingCart">

            <div className="cart-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="table-cart">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Producto</th>
                                            <th>Cantidad</th>
                                            <th>Total</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="display-flex align-center">
                                                    <div className="img-product">
                                                        <img src="https://t1.ev.ltmcdn.com/es/posts/5/7/5/diferencia_entre_reptiles_y_anfibios_para_ninos_1575_600.jpg" alt="" className="mCS_img_loaded" />
                                                    </div>
                                                    <div className="name-product">
                                                        Gecko número 1
                                                        <br />
                                                        <span>G2356</span>
                                                    </div>
                                                    <div className="price">
                                                        S/. 1,250.00
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="product-count">
                                                <form action="#" className="count-inlineflex">
                                                    <div className="qtyminus">-</div>
                                                    <input type="text" name="quantity" defaultValue={1} className="qty" />
                                                    <div className="qtyplus">+</div>
                                                </form>
                                            </td>
                                            <td>
                                                <div className="total">
                                                    S/.1,250.00
                                                </div>
                                            </td>
                                            <td>
                                                <a href="#" >
                                                    <img src="images/icons/delete.png" alt="" className="mCS_img_loaded" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="display-flex align-center">
                                                    <div className="img-product">
                                                        <img src="https://t1.ev.ltmcdn.com/es/posts/5/7/5/diferencia_entre_reptiles_y_anfibios_para_ninos_1575_600.jpg" alt="" className="mCS_img_loaded" />
                                                    </div>
                                                    <div className="name-product">
                                                        Gecko número 2
                                                        <br />
                                                        <span>G1626</span>
                                                    </div>
                                                    <div className="price">
                                                        S/. 1,250.00
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="product-count">
                                                <form action="#" className="count-inlineflex">
                                                    <div className="qtyminus">-</div>
                                                    <input type="text" name="quantity" defaultValue={1} className="qty" />
                                                    <div className="qtyplus">+</div>
                                                </form>
                                            </td>
                                            <td>
                                                <div className="total">
                                                    S/.2,250.00
                                                </div>
                                            </td>
                                            <td>
                                                <a href="#" >
                                                    <img src="images/icons/delete.png" alt="" className="mCS_img_loaded" />
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="coupon-box">
                                    <form action="#" method="get" acceptCharset="utf-8">
                                        <div className="coupon-input">
                                            <input type="text" name="coupon code" placeholder="Código del cupón" />
                                            <button type="submit" className="round-black-btn">Aplicar cupón</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* /.table-cart */}
                        </div>
                        {/* /.col-lg-8 */}
                        <div className="col-lg-4">
                            <div className="cart-totals">
                                <h3>Detalle del pedido</h3>
                                <form action="#" method="get" acceptCharset="utf-8">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Subtotal</td>
                                                <td className="subtotal">S/.2,589.00</td>
                                            </tr>
                                            <tr>
                                                <td>Delivery</td>
                                                <td className="free-shipping">Delivery gratis</td>
                                            </tr>
                                            <tr className="total-row">
                                                <td>Total</td>
                                                <td className="price-total">S/4,591.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="btn-cart-totals">
                                        <Link to="/detalles-del-pedido" className="checkout round-black-btn" >Realizar pedido</Link>
                                    </div>
                                    {/* /.btn-cart-totals */}
                                </form>
                                {/* /form */}
                            </div>
                            {/* /.cart-totals */}
                        </div>
                        {/* /.col-lg-4 */}
                    </div>
                </div>
            </div>


        </Container>
    )
}
