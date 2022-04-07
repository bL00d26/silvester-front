import Content from "../components/Content";

export default function EditShop() {
    return (

        <Content title="Datos de tu tienda">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title">Información general de tu negocio</h3>
                            </div>
                            <form>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="razon">Razon social</label>
                                        <input type="text" className="form-control" id="razon" placeholder="Ingresar Razón social" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="comercialName">Nombre comercial</label>
                                        <input type="text" className="form-control" id="comercialName" placeholder="Ingresar nombre comercial" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ruc">RUC</label>
                                        <input type="text" className="form-control" id="ruc" placeholder="Ingresar RUC" />
                                    </div>
                                    <div className="form-group">
                                        <div className="form-group">
                                            <label>Describe tu negocio</label>
                                            <textarea className="form-control" rows={3} placeholder="Ingresa una descripción" defaultValue={""} />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exampleInputFile">Logo de la tienda</label>
                                        <div className="input-group">
                                            <div className="custom-file">
                                                <input type="file" className="custom-file-input" id="exampleInputFile" />
                                                <label className="custom-file-label" htmlFor="exampleInputFile">Elegir logo</label>
                                            </div>
                                            <div className="input-group-append">
                                                <span className="input-group-text">Subir</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Guardar</button>
                                </div>
                            </form>
                        </div>


                        <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title">¿A que teléfonos te pueden llamar?</h3>
                            </div>
                            <form>
                                <div className="card-body">

                                    <div className="row">
                                        <div className="form-group  col-md-6">
                                            <label htmlFor="razon"> Teléfono fijo </label>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-phone" /></span>
                                                </div>
                                                <input type="tel" className="form-control" placeholder="Telefono celular" />
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="razon"> Teléfono celular </label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-phone" /></span>
                                                </div>
                                                <input type="tel" className="form-control" placeholder="Telefono celular" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="razon"> Página Web </label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-check" /></span>
                                                </div>
                                                <input type="web" className="form-control" placeholder="Ingresar página web" />
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="razon"> Correo de contacto </label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-envelope" /></span>
                                                </div>
                                                <input type="email" className="form-control" placeholder="Ingresar correo" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="razon"> WhatsApp </label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-check" /></span>
                                                </div>
                                                <input type="tel" className="form-control" placeholder="Ingresar WhatsApp" />
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="razon"> Facebook </label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-check" /></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Ingresar Facebook" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="razon"> Instagram </label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-check" /></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Ingresar Instagram" />
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="razon"> Twitter </label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-check" /></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Ingresar Twitter" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Guardar</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-6">

                        <div className="card card-red">
                            <div className="card-header">
                                <h3 className="card-title">Formas de pago</h3>
                            </div>
                            <form>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-11">
                                            <h4>Pago por Yape</h4>
                                        </div>
                                        <div className="col-sm-1 d-flex justify-content-end align-items-center">
                                            <div className="custom-control custom-switch custom-switch-off-alert custom-switch-on-danger">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                                <label className="custom-control-label" htmlFor="customSwitch1"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="exampleInputFile" />
                                            <label className="custom-file-label" htmlFor="exampleInputFile">Elegir qr de Yape</label>
                                        </div>
                                        <div className="input-group-append">
                                            <span className="input-group-text">Subir</span>
                                        </div>
                                    </div>
                                    <div className="text-left mt-2">
                                        <img className="profile-user-img img-fluid img-rounded" src="https://images.squarespace-cdn.com/content/v1/569ea3f0d8af102cbcb20d0e/1592845516406-8N02GLEFGUBMXYPWW1A8/IMG_4263-3.jpg" alt="qr" />
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-sm-11">
                                            <h4>Pago por Plin</h4>
                                        </div>
                                        <div className="col-sm-1 d-flex justify-content-end align-items-center">
                                            <div className="custom-control custom-switch custom-switch-off-alert custom-switch-on-danger">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch2" />
                                                <label className="custom-control-label" htmlFor="customSwitch2"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="exampleInputFile" />
                                            <label className="custom-file-label" htmlFor="exampleInputFile">Elegir qr de Plin</label>
                                        </div>
                                        <div className="input-group-append">
                                            <span className="input-group-text">Subir</span>
                                        </div>
                                    </div>
                                    <div className="text-left mt-2">
                                        <img className="profile-user-img img-fluid img-rounded" src="https://lealmarket.com/wp-content/uploads/2014/12/codigo-qr.jpg" alt="qr" />
                                    </div>


                                    <div className="row">
                                        <div className="form-group mt-3 col-sm-6">
                                            <label htmlFor="bcp"> N° de cuenta BCP</label>
                                            <input type="text" className="form-control" id="bcp" placeholder="Ingresar N° de cuenta bcp" />
                                        </div>
                                        <div className="form-group mt-3 col-sm-6">
                                            <label htmlFor="bcp"> N° de cuenta interbancaria BCP</label>
                                            <input type="text" className="form-control" id="bcp" placeholder="Ingresar N° de cuenta bcp" />
                                        </div>
                                        <div className="form-group mt-3 col-sm-6">
                                            <label htmlFor="bcp"> N° de cuenta BBVA</label>
                                            <input type="text" className="form-control" id="bcp" placeholder="Ingresar N° de cuenta bcp" />
                                        </div>
                                        <div className="form-group mt-3 col-sm-6">
                                            <label htmlFor="bcp"> N° de cuenta interbancaria BBVA</label>
                                            <input type="text" className="form-control" id="bcp" placeholder="Ingresar N° de cuenta bcp" />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-danger">Guardar</button>
                                </div>
                            </form>
                        </div>
                        <div className="card card-success">
                            <div className="card-header">
                                <h3 className="card-title">Ubicación de la tienda</h3>
                            </div>
                            <div className="card-body">
                                <input className="form-control form-control-lg" type="text" placeholder="Ingresar dirección" />

                                <div className="form-group">
                                    <div className="custom-control custom-switch custom-switch-off-success custom-switch-on-success">
                                        <input type="checkbox" className="custom-control-input" id="customSwitch3" />
                                        <br />
                                        <label className="custom-control-label" htmlFor="customSwitch3">Mostrar mapa en la tienda</label>
                                    </div>
                                </div>

                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-success">Guardar</button>
                            </div>
                            {/* /.card-body */}
                        </div>
                    </div>
                </div>

            </div>
        </Content>


    )
}
