import { Container } from "react-bootstrap";

export default function ContactUs() {
    return (
        <Container className="contactPage animate__animated animate__bounce" >

            <div className="text-center mb-4">
                <img className="img-thumbnails mainImg"src="https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2020/10/Asset-17.png?w=937&ssl=1" alt="" />
            </div>

            <div className="row mt-5 formContact">
                <div className="no-bg details col-md-3 order-md-2 mb-4 card py-4 h-100" style={{padding: "30px"}}>
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        Mailing Address:
                    </h4>
                    <p>
                        The Urban Reptile
                        4-5694 Highway 7 East, Suite 330
                        Markham, ON, L3P 1B4 Canada
                        info@theurbanreptile.com
                    </p>
                </div>
                <div className="no-bg col-md-9 order-md-1 card" style={{padding: "0 20px"}}>
                    <h1 style={{padding: "30px 20px 0px 20px", fontSize: "4rem"}}>Contactanos, nos encataría escuchar acerca de ti</h1>
                    <form className="needs-validation">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName">Nombre</label>
                                <input type="text" className="form-control" id="firstName" placeholder="" required />
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName">Apellidos</label>
                                <input type="text" className="form-control" id="lastName" placeholder="" required />
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName">Teléfono</label>
                                <input type="tel" className="form-control" id="telefono" placeholder="985467898" required />
                                <div className="invalid-feedback">
                                    Valid phone is required.
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email">Correo</label>
                                <input type="email" className="form-control" id="email" placeholder="contacto@empresa.com" />
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mb-3">
                            <label htmlFor="message">Mensaje</label>
                            <textarea className="form-control" id="message" placeholder="Mensaje ..." required />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <button className="btn btn-primary btn-lg btn-block" type="submit">Enviar mensaje</button>
                    </form>
                </div>
            </div>

        </Container>
    )
}
