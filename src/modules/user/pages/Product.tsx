import Container from "react-bootstrap/Container";


export default function Product() {

    return (
        <Container className="product-page px-3">
            <div className="card">
                <div className="container-fliud">
                    <div className="wrapper row">
                        <div className="preview col-md-6">
                            <div className="preview-pic tab-content">
                                <div className="tab-pane active" id="pic-1"><img src="https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21D3.jpg" /></div>
                                {/* <div className="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" /></div>
                                <div className="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
                                <div className="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
                                <div className="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div> */}
                            </div>
                            <ul className="preview-thumbnail nav nav-tabs">
                                <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src="https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21D3.jpg" /></a></li>
                                <li><a data-target="#pic-2" data-toggle="tab"><img src="https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21D3.jpg" /></a></li>
                                <li><a data-target="#pic-3" data-toggle="tab"><img src="https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21D3.jpg" /></a></li>
                                <li><a data-target="#pic-4" data-toggle="tab"><img src="https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21D3.jpg" /></a></li>
                                <li><a data-target="#pic-5" data-toggle="tab"><img src="https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21D3.jpg" /></a></li>
                            </ul>
                        </div>
                        <div className="details col-md-6">
                            <h3 className="product-title">Lagartija ejemplo</h3>

                            <p className="product-description">Un impresionante ejemplo de esta hermosa morfo.</p>
                            <h4 className="price">current price: <span><h1>S/. 180</h1></span></h4>

                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th scope="row">ID</th>
                                        <td>TUR-BD-21D3</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Tipo</th>
                                        <td>Dragón barbudo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Sexo</th>
                                        <td>Femenino</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Eclosión</th>
                                        <td>22 de Octubre del 2021</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Peso (g)</th>
                                        <td>90</td>
                                    </tr>
                                </tbody>
                            </table>



                            <div className="action">
                                <button className="add-to-cart" type="button">add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    )
}
