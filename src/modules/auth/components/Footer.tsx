import { Link } from 'react-router-dom'
import '../styles/footer.scss'
import logoImg from '../../../shared/assets/img/logo.png'

const Footer = () => {
    return (
        <footer className="main-footer">
            <strong>Copyright © 2014-2022 <a href="https://silvester-shop.com">Silvester.com</a>.</strong>
            All rights reserved.
            <div className="float-right d-none d-sm-inline-block">
                <b>Version</b> 3.2.0
            </div>
        </footer>

    )
}

export default Footer