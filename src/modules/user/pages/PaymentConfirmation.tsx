import { Container } from "react-bootstrap";

export default function PaymentConfirmation() {
    return (
        // USE THIS CLASS IF IS A YAPE PAYMENT AT LEVEL OF PaymentConfirmation  "yape-container"
        <Container className="PaymentConfirmation container wrapper yape-container">
            <div className="row" style={{ paddingTop: '25px', paddingBottom: '25px' }}>
                <div className="col-md-12">
                    <div className="mainContentWrapper">
                        <div className="col-md-12">
                            <h2 style={{ textAlign: 'center' }}>
                                Confirma tu compra
                            </h2>
                            <hr />
                            <div className="qr-payment text-center">

                                <img src="https://s3.amazonaws.com/mitiendape/uploads/tienda_000634/yape_checkout.png?rnd=zrvZaLHSf3twXdy9" alt="" />
                                <p>Ingresa a <strong>Yape</strong> desde tu celular,
                                    escanea este código QR,
                                    o haz el pago al número
                                    <strong>998145485</strong>
                                    agregándolo como contacto.</p>

                                <p>
                                    Ingresa el siguiente monto a transferir
                                    <strong>S/ 769.20</strong>,
                                    añade este código
                                    <strong>YP634LQTW</strong>
                                    como nota y dale Pagar.
                                </p>
                            </div>



                            <form id="payment-form" className="form-horizontal">
                                <div className="panel-group" id="accordion">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                Resumen de la compra
                                            </h4>
                                        </div>
                                        <div id="collapseOne" className="panel-collapse collapsed in">
                                            <div className="panel-body">
                                                <div className="col-12">
                                                    <table className="table table-striped">
                                                        <tbody>
                                                            <tr>
                                                                <td><b>Productos</b></td>
                                                                <td><b>Precio</b></td>
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
                                                <div className="col-12 mt-4 mb-5">
                                                    <div style={{ textAlign: 'center' }}>
                                                        <h3>Total de la Orden</h3>
                                                        <h3><strong>S/.447.00</strong></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel">
                                        <h4 className="panel-title">
                                            <div style={{ textAlign: 'center' }}>
                                                <button
                                                    className="btn btn-success"
                                                    id="payInfo">
                                                    Ir a la página principal
                                                </button>
                                            </div>
                                        </h4>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    )
}
