import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Checkout() {
    return (
        <Container className="checkoutPage container wrapper">
            <div className="row" style={{ paddingTop: '25px', paddingBottom: '25px' }}>
                <div className="col-md-12">
                    <div id="mainContentWrapper">
                        <div className="col-md-12">
                            <h2 style={{ textAlign: 'center' }}>
                                Revisa tu pedido y confirma tu compra.
                            </h2>
                            <hr />
                            <div className="shopping_cart">
                                <form id="payment-form" className="form-horizontal">
                                    <div className="panel-group" id="accordion">
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title">
                                                    <a data-toggle="collapse" data-parent="#accordion">Revisa tu pedido</a>
                                                </h4>
                                            </div>
                                            <div id="collapseOne" className="panel-collapse collapsed in">
                                                <div className="panel-body">
                                                    <div className="items d-flex">
                                                        <div className="col-md-9">
                                                            <table className="table table-striped">
                                                                <tbody><tr>
                                                                    <td colSpan={2}>
                                                                        <b>Productos</b></td>
                                                                </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <ul>
                                                                                <li>Gecko número 1</li>
                                                                                <li>Descripción del producto</li>
                                                                            </ul>
                                                                        </td>
                                                                        <td>
                                                                            <b>S/.147.00</b>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <ul>
                                                                                <li>Gecko número 1</li>
                                                                                <li>Descripción del producto</li>
                                                                            </ul>
                                                                        </td>
                                                                        <td>
                                                                            <b>S/.347.00</b>
                                                                        </td>
                                                                    </tr>
                                                                </tbody></table>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div style={{ textAlign: 'center' }}>
                                                                <h3>Total de la Orden</h3>
                                                                <h3><span style={{ color: 'green' }}>S/.447.00</span></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion" >Información del contacto</a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" className="panel-collapse collapsed d-flex justify-content-center">
                                            <div className="card card-body col-6 text-center">
                                                <b>Por favor registrate para poder realizar el pedido.</b>
                                                <br /><br />
                                                <button className="btn btn-primary rounded mb-3">Registrarme ahora</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion" >¿Cómo quieres pagar?</a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" className="panel-collapse collapsed">
                                            <div className="panel-body">
                                                <ul className="finalList">
                                                    <li>
                                                        <div><input id="yape" type="radio" name="yape" /></div>
                                                        <label htmlFor="yape" className="buttons">
                                                            <img src="https://imgur.com/b0BP318.png" className="background-primary" width="100px" alt="" />
                                                            <h4>Yape del BCP</h4>
                                                            <p>Paga desde la aplicación Yape del BCP</p>
                                                        </label>

                                                    </li>
                                                    <li>
                                                        <div><input id="plin" type="radio" name="yape" /></div>
                                                        <label htmlFor="plin" className="buttons">
                                                            <img src="https://imgur.com/6BSFhOx.png" className="background-primary" width="100px" alt="" />
                                                            <h4>Plin</h4>
                                                            <p>Paga desde la aplicación Plin</p>
                                                        </label>
                                                    </li>
                                                </ul>

                                                {/*  */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel">
                                            <h4 className="panel-title">
                                                <div style={{ textAlign: 'center' }}>
                                                    <Link to="/confirmacion-de-pago" data-toggle="collapse" data-parent="#accordion"
                                                        className=" btn"
                                                        id="payInfo"
                                                        style={{ background: "#1bbb6b", color: "#fff", width: 'fit-content', fontSize: '1.65rem', borderRadius: "8px" }}>
                                                        Proceder con el pago »
                                                    </Link>
                                                </div>
                                            </h4>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    )
}
