import { Container } from "react-bootstrap";

export default function TermsAndFAQ() {
    const collapseAccordion = (e: any) => {
        const id = e.target.getAttribute("data-bs-target");
        document.getElementById(id)?.classList.toggle("collapsed");
        document.getElementById(id)?.classList.toggle("collapse");

    }
    return (
        <Container className="termsAndFaq">
            <div className="py-4 pb-4 text-center card">
                <h2>TERMINOS Y CONDICIONES / Preguntas frecuentes</h2>
            </div>

            <div className="accordion" id="accordionExample" style={{ padding: "20px 10px" }}>
                <div className="accordion-item">
                    <h4 className="accordion-header" id="headingOne">
                        <div className="buttonAccordion accordion-button collapsed" onClick={(e) => collapseAccordion(e)} data-bs-target="collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            ¿Ofrecen planes de pago?
                        </div>
                    </h4>
                    <div id="collapseOne" className="accordion-collapse collapsed" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{}}>
                        <div className="accordion-body">
                            Si, podemos hacer planes de pago mediante una reserva. Por lo general, requerimos un depósito no reembolsable del 25% del precio del ejemplar y el pago completo dentro de un plazo maximo de 60 días. En caso usted haga la reserva y excede el plazo, el dinero se perderá. Contáctanos directamente si estás interesado.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h4 className="accordion-header" id="headingTwo">
                        <div className="buttonAccordion accordion-button collapsed" onClick={(e) => collapseAccordion(e)} data-bs-target="collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            ¿Qué formas de pago aceptan?
                        </div>
                    </h4>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Puede comprar su pedido a través de nuestra tienda online segura usando Paypal o Tarjeta de Crédito. También puede enviarnos pagos por BBVA, BCP, YAPE, PLIN, INTERBANK,Western Union, Paypal o Transferencia de dinero a la dirección de correo electrónico silvestercompanyinfo@gmail.com</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h4 className="accordion-header" id="headingThree">
                        <div className="buttonAccordion accordion-button collapsed" onClick={(e) => collapseAccordion(e)} data-bs-target="collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            ¿Cuál es el monto mínimo de un pedido para el extranjero?
                        </div>
                    </h4>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Para los pedidos enviados dentro de Perú no existe un monto mínimo sin embargo para pedidos internacionales, normalmente implementamos un mínimo de $ 3500 USD y no más de 6 ejemplares. Si tiene alguna duda envíenos un mensaje.</div>
                    </div>
                </div>


                <div className="accordion-item">
                    <h4 className="accordion-header" id="headingThree">
                        <div className="buttonAccordion accordion-button collapsed" onClick={(e) => collapseAccordion(e)} data-bs-target="collapse4" aria-expanded="false" aria-controls="collapseThree">
                            ¿Puedo recoger mi pedido en sus instalaciones?
                        </div>
                    </h4>
                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Sí, podemos organizar la recogida local gratuita. Por lo general, organizamos reuniones dentro del área metropolitana de Lima. Por favor contáctenos para mayor coordinación.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h4 className="accordion-header" id="headingThree">
                        <div className="buttonAccordion accordion-button collapsed" onClick={(e) => collapseAccordion(e)} data-bs-target="collapse5" aria-expanded="false" aria-controls="collapseThree">
                            ¿Cómo se realizan envíos internacionales?
                        </div>
                    </h4>
                    <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Todos los pedidos realizados fuera de Perú se envían utilizando los servicios de envío de animales vivos de los distintos exportadores. Todos los animales se embalan de forma segura. Podemos proporcionar certificados de cesión para importar su envío y certificados de salud avalados por Veterinarios. El envío internacional no es barato y el costo de envío generalmente comienza alrededor de $ 500 USD.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h4 className="accordion-header" id="headingThree">
                        <div className="buttonAccordion accordion-button collapsed" onClick={(e) => collapseAccordion(e)} data-bs-target="collapse6" aria-expanded="false" aria-controls="collapseThree">
                            ¿Cuál es la mejor forma de comunicarme con usted si tengo alguna pregunta?
                        </div>
                    </h4>
                    <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Nos alegra saber de usted, por lo que lo alentamos a que se comunique con nosotros por correo electrónico silvestercompanyinfo@gmail.com o envíenos un mensaje a través de Instagram (@silvestercompany, @silvestercompany.store) o Facebook (Silvester Company®). También puede enviarnos un mensaje de texto o llamarnos, pero debido a que a menudo estamos trabajando en las instalaciones, el correo electrónico o el mensaje de texto suelen ser la mejor manera de comunicarse con nosotros.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h4 className="accordion-header" id="headingThree">
                        <div className="buttonAccordion accordion-button collapsed" onClick={(e) => collapseAccordion(e)} data-bs-target="collapse7" aria-expanded="false" aria-controls="collapseThree">
                            Si adquiero un animal de Silvester Company®, ¿tiene alguna garantía de salud?
                        </div>
                    </h4>
                    <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Absolutamente, respaldamos a nuestros animales al 100%, cubrimos a tu nueva mascota con una garantía de salud de 30 días.Si cometes alguna negligencia en su cuidado o mantenimiento no podremos cubrir la garantia tenemos años de experiencia y sabemos cuando un animal fallece por causas naturales o externas.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h4 className="accordion-header" id="headingThree">
                        <div className="buttonAccordion accordion-button collapsed" onClick={(e) => collapseAccordion(e)} data-bs-target="collapse8" aria-expanded="false" aria-controls="collapseThree">
                            ¿Asistes a alguna exposición en Lima?
                        </div>
                    </h4>
                    <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Normalmente asistimos a varias exposiciones al año, sin embargo, debido a COVID19, esto se ha suspendido. Pero ya estamos deseando salir y volver a verlos a todos ustedes, esperamos con suerte sea pronto.
                        </div>
                    </div>
                </div>
            </div>


        </Container>
    )
}
