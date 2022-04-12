import { Link } from "react-router-dom";
import Content from "../components/Content";

export default function Login() {
    document.body.style.minWidth = "100%";
    return (
        <Content title="Login" type="auth">
            <div className="login-page" style={{ minHeight: '496.781px' }}>
                <div className="login-box">
                    <div className="login-logo">
                        <Link to="/"><b>Silvester</b></Link>
                    </div>
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Inicia sesíon para ver tu panel de control</p>
                            <form>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Correo" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Contraseña" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-7">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="remember" />
                                            <label htmlFor="remember" className="ml-2">
                                                Recuerdame
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>
                                    </div>
                                </div>
                            </form>
                            <div className="social-auth-links text-center mb-3">
                                <p>- O -</p>
                                <button className="btn btn-block btn-primary">
                                    <i className="fab fa-facebook mr-2" /> Logearse usando Facebook
                                </button>
                                <button className="btn btn-block btn-danger">
                                    <i className="fab fa-google-plus mr-2" />Logearse usando Google+
                                </button>
                            </div>
                            <p className="mb-1">
                                <Link to="/" rel="noreferrer" className="text-center">Olvidé mi contraseña</Link>
                            </p>
                            <Link to="/auth/signup" className="text-center">Deseo registrarme</Link>
                        </div>
                    </div>
                </div>
            </div>

        </Content>
    )
}
