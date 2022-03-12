import { Container } from "react-bootstrap";

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
                                        <div className="panel">
                                            <h4 className="panel-title">
                                                <div style={{ textAlign: 'center', width: '100%' }}>
                                                    <a style={{ width: 'fit-content', fontSize: '1.3rem', borderRadius: '8px' }} data-toggle="collapse" data-parent="#accordion" className=" btn btn-success" >
                                                        Continuar con la información de pago
                                                    </a>
                                                </div>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion" >Información del contacto</a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" className="panel-collapse collapsed">
                                            <div className="panel-body">
                                                <b>Ayudanos a mantener tu pedido seguro, coloca tu información exacta</b>
                                                <br /><br />
                                                <table className="table table-striped" style={{ fontWeight: 'bold' }}>
                                                    <tbody><tr>
                                                        <td style={{ width: '175px' }}>
                                                            <label htmlFor="id_email">Email:</label></td>
                                                        <td>
                                                            <input className="form-control" id="id_email" name="email" type="text" />
                                                        </td>
                                                    </tr>
                                                        <tr>
                                                            <td style={{ width: '175px' }}>
                                                                <label htmlFor="id_first_name">Nombres:</label></td>
                                                            <td>
                                                                <input className="form-control" id="id_first_name" name="first_name" type="text" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: '175px' }}>
                                                                <label htmlFor="id_last_name">Apellidos:</label></td>
                                                            <td>
                                                                <input className="form-control" id="id_last_name" name="last_name" type="text" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: '175px' }}>
                                                                <label htmlFor="id_address_line_1">Dirección:</label></td>
                                                            <td>
                                                                <input className="form-control" id="id_address_line_1" name="address_line_1" type="text" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: '175px' }}>
                                                                <label htmlFor="id_address_line_2">Calle / Av  #:</label></td>
                                                            <td>
                                                                <input className="form-control" id="id_address_line_2" name="address_line_2" type="text" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: '175px' }}>
                                                                <label htmlFor="id_city">Ciudad:</label></td>
                                                            <td>
                                                                <input className="form-control" id="id_city" name="city" type="text" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: '175px' }}>
                                                                <label htmlFor="id_postalcode">Distrito:</label></td>
                                                            <td>
                                                                <input className="form-control" id="id_postalcode" name="postalcode" type="text" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: '175px' }}>
                                                                <label htmlFor="id_phone">Teléfono:</label></td>
                                                            <td>
                                                                <input className="form-control" id="id_phone" name="phone" type="text" />
                                                            </td>
                                                        </tr>
                                                    </tbody></table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel">
                                            <h4 className="panel-title">
                                                <div style={{ textAlign: 'center' }}>
                                                    <a data-toggle="collapse" data-parent="#accordion"
                                                        className=" btn btn-success"
                                                        id="payInfo"
                                                        style={{ width: 'fit-content', fontSize: '1.3rem', borderRadius: "8px" }}>
                                                        Realizar el pedido »
                                                    </a>
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
