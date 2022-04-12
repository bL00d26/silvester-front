import { Link } from "react-router-dom";
import Content from "../components/Content";

export default function Signup() {
    document.body.style.minWidth = "100%";
    return (
        <Content title="Signup" type="auth">
            <div className="register-page">
                <div className="register-box">
                    <div className="card card-outline card-primary">
                        <div className="card-header text-center">
                            <Link to="/" className="h1"><b>Silvester</b></Link>
                        </div>
                        <div className="card-body">
                            <p className="login-box-msg">Registrate para poder administrar tu contenido</p>
                            <form action="../../index.html" method="post">
                                <div className="row">
                                    <div className="input-group mb-3 col-md-6 col-xs-12">
                                        <input type="text" className="form-control" placeholder="Nombres completos" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-user" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3 col-md-6 col-xs-12">
                                        <input type="text" className="form-control" placeholder="Dirección" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-user" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="input-group mb-3 col-md-6 col-xs-12">
                                        <input type="text" className="form-control" placeholder="Calle / Av #" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-user" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3 col-md-6 col-xs-12">
                                        <input type="text" className="form-control" placeholder="Ciudad" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-user" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3 col-md-6 col-xs-12">
                                        <input type="text" className="form-control" placeholder="Distrito" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-user" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3 col-md-6 col-xs-12">
                                        <input type="text" className="form-control" placeholder="Teléfono" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-user" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="input-group mb-3">
                                        <input type="email" className="form-control" placeholder="Correo" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-envelope" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="password" className="form-control" placeholder="Escribe tu contraseña" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-lock" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="password" className="form-control" placeholder="Repite tu contraseña nuevamente" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-lock" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
                                            <label htmlFor="agreeTerms" className="ml-2">
                                                Acepto los <Link to="/condiciones-de-envio">terminos y condiciones</Link>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary btn-block">Registrarme</button>
                                    </div>
                                </div>
                            </form>
                            <br />
                            <div className="social-auth-links text-center">
                                <button className="btn btn-block btn-primary">
                                    <i className="fab fa-facebook mr-2" />
                                    Registrarme usando Facebook
                                </button>
                                <button className="btn btn-block btn-danger">
                                    <i className="fab fa-google-plus mr-2" />
                                    Registrarme usando Google+
                                </button>
                            </div>
                            <Link to="/auth/login" className="text-center">Ya tengo una cuenta</Link>
                        </div>
                    </div>
                </div>
            </div>

        </Content>
    )
}
