import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.scss'
import logoImg from '../../../shared/assets/img/logo.png'
// ./../../../shared/assets/img/logo.png


const Footer = () => {
    return (
        <footer className="container py-5 footer">
            <div className="row">
                <div className="col-12 col-md">
                    <img src={logoImg} width="60px" alt="" />
                    <small className="d-block mb-3 text-muted">© 2017-2018</small>
                </div>
                <div className="col-6 col-md">
                    <h5>Empresa</h5>
                    <ul className="list-unstyled text-small">
                        <li>
                            <Link className="text-muted" to="/">Inicio</Link>
                        </li>
                        <li>
                            <a className="text-muted" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Reptiles</h5>
                    <ul className="list-unstyled text-small">
                        <li><Link className="text-muted" to="/reptiles-en-venta">Reptiles en venta</Link></li>
                        <li><Link className="text-muted" to="/centro-de-aprendizaje">Centro de aprendizaje</Link></li>
                        <li><Link className="text-muted" to="/cole">Colección</Link></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Envíos</h5>
                    <ul className="list-unstyled text-small">
                        <li><Link className="text-muted" to="/condiciones-de-envio">Condiciones de envío</Link></li>
                        <li><Link className="text-muted" to="/">Información de pedido</Link></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Información</h5>
                    <ul className="list-unstyled text-small">
                        <li><Link to="/condiciones-de-envio" className="text-muted" >Terminos y condiciones</Link></li>
                    </ul>
                </div>
            </div>
        </footer>

    )
}

export default Footer