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
                        <li><a className="text-muted" href="#">Reptiles en venta</a></li>
                        <li><a className="text-muted" href="#">Centro de aprendizaje</a></li>
                        <li><a className="text-muted" href="#">Colección</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Envíos</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">Condiciones de envío</a></li>
                        <li><a className="text-muted" href="#">Información de pedido</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Información</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#"></a></li>
                        <li><a className="text-muted" href="#">Terminos y condiciones</a></li>
                    </ul>
                </div>
            </div>
        </footer>

    )
}

export default Footer