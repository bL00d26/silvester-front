import Content from "../components/Content";

export default function ShopDetails() {
    return (

        <Content title="Detalles de la tienda">
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 h-100">
                            <div className="card card-primary card-outline pt-3">
                                <div className="card-body box-profile">
                                    <div className="text-center">
                                        <img className="profile-user-img img-fluid img-circle" src="https://imgur.com/X7yIs7Y.png" alt="User profile picture" />
                                    </div>
                                    <h3 className="profile-username text-center">Silvester</h3>
                                    <p className="text-muted text-center">Silvester SAC</p>
                                    <ul className="list-group list-group-unbordered mb-3">
                                        <li className="list-group-item">
                                            <p className="text-center">
                                                Descripcion de la tienda Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Enim, autem fuga pariatur officia quae praesentium. Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit. Ipsam, iure?
                                            </p>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Página web</b> <a className="float-right">www.silvester.com</a>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Teléfono fijo</b> <a className="float-right">432 2287</a>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Teléfono celular</b> <a className="float-right">982 246 287</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4 h-100">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Detalles</h3>
                                </div>
                                <div className="card-body">
                                    <strong><i className="fas fa-map-marker-alt mr-1" /> Dirección</strong>
                                    <p className="text-muted">Santiago de Surco, Lima. Perú.</p>
                                    <hr />
                                    <strong><i className="fas fa-book mr-1" /> Correo de contacto</strong>
                                    <p className="text-muted">
                                        <a href="mailto:contacto@silvester.com">
                                            contacto@silvester.com
                                        </a>
                                    </p>
                                    <hr />
                                    <strong><i className="fas fa-pencil-alt mr-1" /> WhatsApp</strong>
                                    <p className="text-muted">
                                        <a href="tel:51982334553">982 334 553</a>
                                    </p>
                                    <hr />
                                    <strong><i className="far fa-file-alt mr-1 mb-3" /> Redes sociales</strong>
                                    <br />
                                    <ul className="list-group list-group-unbordered">
                                        <li className="list-group-item">
                                            <b>Facebook</b> <a className="float-right">@silvester</a>
                                        </li>

                                        <li className="list-group-item">
                                            <b>Twitter</b> <a className="float-right">@silvester</a>
                                        </li>

                                        <li className="list-group-item">
                                            <b>Instagram</b> <a className="float-right">@silvester</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 h-100">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Medios de pago</h3>
                                </div>
                                <div className="card-body text-center">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <strong> <h4>Yape</h4> </strong>
                                            <div className="text-center">
                                                <img width="200px" className="img-fluid img-bordered mt-2" src="https://images.squarespace-cdn.com/content/v1/569ea3f0d8af102cbcb20d0e/1592845516406-8N02GLEFGUBMXYPWW1A8/IMG_4263-3.jpg" alt="User profile picture" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <strong> <h4>Plin</h4> </strong>
                                            <div className="text-center">
                                                <img width="200px" className="img-fluid img-bordered mt-2" src="https://images.squarespace-cdn.com/content/v1/569ea3f0d8af102cbcb20d0e/1592845516406-8N02GLEFGUBMXYPWW1A8/IMG_4263-3.jpg" alt="User profile picture" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-4 text-left">
                                            <strong><i className="far fa-file-alt mr-1 mb-1" /> Cuenta BCP</strong>
                                        </div>
                                        <div className="col-sm-8">5328272334234</div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-4 text-left">
                                        <strong><i className="far fa-file-alt mr-1 mb-1" /> Cuentaa BBVA</strong>
                                        </div>
                                        <div className="col-sm-8">1325328272334234</div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-4 text-left">
                                            <strong><i className="far fa-file-alt mr-1 mb-1" /> Cuenta Interbancaria BCP</strong>
                                        </div>
                                        <div className="col-sm-8">0015328272334234</div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-4 text-left">
                                        <strong><i className="far fa-file-alt mr-1 mb-1" /> Cuentaa Interbancaria BBVA</strong>
                                        </div>
                                        <div className="col-sm-8">0021325328272334234</div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Content>


    )
}
