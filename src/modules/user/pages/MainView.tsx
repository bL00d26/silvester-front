import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainCarousel from "../components/MainCarousel/Carousel";
import { Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MainView() {
    return (
        <Container>
            <Stack gap={5}>
                <Row className="animate__animated animate__bounce">
                    <MainCarousel />
                </Row>
                <Row>
                    <Col className="aspect animate__animated animate__pulse" sm={4}>
                        <Link to="/centro-de-aprendizaje">
                            <Card className="overflow-hidden">
                                <img src="https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2020/10/Up-to-date-option.png?w=304&ssl=1" alt="" />
                            </Card>
                        </Link>
                    </Col>
                    <Col className="aspect animate__animated animate__pulse" sm={4}>
                        <Card className="iframeContainer overflow-hidden">
                            <iframe src="https://www.youtube.com/embed/xLJLQodOeTo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                        </Card>
                    </Col>
                    <Col className="aspect animate__animated animate__pulse" sm={4}>
                        <Card className="overflow-hidden">
                            <Link to="/centro-de-aprendizaje">
                                <img src="https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2020/10/Learning-Center-Image.png?w=304&ssl=1" alt="" />
                            </Link>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} className="animate__animated animate__fadeInUp">
                        <Card className={"p-4 bordered"}>
                            <h1>Bienvenido a Silvester Company®</h1>

                            <p>
                                Silvester Co.® es una empresa dedicada a la venta y conservación de distintas mascotas, particularmente de especies exóticas criadas en cautiverio, desde hermosos reptiles hasta increíbles mamíferos.
                            </p>
                            <p>
                                Nuestra meta en la sociedad peruana es promover la herpetocultura y conservación de especies. Silvester Company® propone una opción legal de adquirir reptiles exóticos y de esta manera acabar con el tráfico de fauna peruana que viene perjudicando ecosistemas y especies de nuestro país. Además, somos la primera tienda que ofrece la adopción y rehabilitación de perros y gatos sin ningún costo.
                            </p>
                            <p>
                                En Silvester Company® encontrarás las mejores genéticas de reptiles del continente latinoamericano y podrás sentirte protegido y respaldado por nuestro prestigio y garantía.
                            </p>
                        </Card>

                        <Card className={"p-4 mt-4 bordered"}>
                            <h2>Si has considerado ser dueño de una mascota exótica, considera esto ...</h2>
                            <p>
                                En Silvester Company® nos especializamos en reptiles y otras especies durante más de 5 años. Nos enorgullecemos de ofrecer reptiles que tienen la calidad de "cobertura" y un seguimiento con atención y servicio al cliente de primer nivel. Todo, desde nuestra garantía de salud de 30 días, soporte al cliente continuo y envío experimentado, nos esforzamos por hacer que la experiencia de cada cliente sea excelente.
                            </p>
                            <p>
                                Si eres dueño de una mascota, aficionado a lo exótico o un criador experto, creemos que tenemos reptiles de los que te enamorarás. Ofrecemos algunos de los proyectos de cría de vanguardia más sorprendentes, hasta reptiles y morfos que han sido populares durante décadas. Los invitamos a navegar por nuestra tienda física y virtual y con ello conocer más sobre nosotros y nuestro aporte a centros de rehabilitación animal, adopción de canes y muchas obras caritativas de Silvester Company®. Si está buscando que su colección crezca o adquirir una mascota no espere más y ¡Bienvenido a Silvester Company®!
                            </p>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8} className="animate__animated animate__fadeInUp">
                        <Card className={"p-4 h-100 bordered"}>
                            <h1>Historia</h1>

                            <p>
                                Silvester Company® es propiedad y está operado por Sergio Arrieta.
                                Sergio ha tenido una pasión por los reptiles desde que era un niño y su fascinación por cuidar a estos asombrosos animales solo se ha intensificado
                                con los años. Cuando era niño Sergio era un ávido coleccionista y consiguió su primer reptil cuando tenía solo 9 años.
                            </p>
                            <p>
                                Él tenía tantos reptiles como su madre le permitía, pero una vez que estaba solo, rápidamente comenzó a trabajar con muchos más y comenzó sus primeros proyectos de reproducción y fundó Silvester Company® en 2018.
                            </p>
                        </Card>
                    </Col>
                    <Col lg={4} className="animate__animated animate__fadeInUp">
                        <img className="img-thumbnail background-cover h-100" src="https://eoc.cat/wp-content/uploads/2019/09/patologias-de-los-reptiles.jpg" alt="" />
                    </Col>
                </Row>

                <Row>
                    <Col lg={12} className="animate__animated animate__fadeInUp">
                        <Card className={"p-4 h-100 bordered text-center"}>
                            <h1>Conoce a nuestro Equipo:</h1>

                            <p>
                                El equipo Silvester Company® es un grupo increíble de los que verdaderamente son la columna vertebral de nuestra empresa. Para nuestro gran equipo es una pasión el cuidado que brindamos a todos nuestros reptiles.
                            </p>



                            <Row>
                                <Col lg={12} className="mb-4 mt-3">
                                    <Card className={"p-4 h-100 bordered"}>
                                        <Row>

                                            <Col lg={3}>
                                                <img className="background-cover h-100" style={{ minHeight: 300 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKJPxxwPeNvISnBbZsZHe887Ws0FnrL7o0w&usqp=CAU" alt="" />
                                            </Col>
                                            <Col lg={9} style={{ textAlign: 'left' }} >
                                                <h1>Sergio Aref Arrieta, Dueño</h1>
                                                <p>
                                                    Propietario: Sergio Aref es un apasionado de los reptiles y lo ha sido toda su vida. Tiene un profundo conocimiento de la cría de reptiles, la genética y la industria de los reptiles. Antes de convertir su pasión en un emprendimiento, completó sus estudios superiores en la prestigiosa Universidad de Navarra. Aref trabajó en el Planetaria de Pamplona Iruña en España, donde ocupó el cargo de Administración para una institución financiera. </p>
                                                <p>
                                                    Actualmente vive en Lima, Perú. Se siente afortunado de haber convertido su pasatiempo y una pasión de toda la vida en un emprendimiento. Él es fundador de la empresa y participa activamente en todos los aspectos de Silvester Company®.
                                                </p>
                                            </Col>
                                        </Row>


                                    </Card>
                                </Col>
                                <Col lg={6} className="mb-4">
                                    <Card className={"p-4 h-100 bordered"}>


                                        <img style={{ maxWidth: 280, margin: 'auto' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKJPxxwPeNvISnBbZsZHe887Ws0FnrL7o0w&usqp=CAU" alt="" />

                                        <h1>Joaquin Arrieta</h1>
                                        <p>
                                            Miembro del equipo: Joaquin es un joven entusiasta, su especialidad en Silvester Co.® son los dragones barbudos y geckos crestados, Joaquin es pieza fundamental en el equipo de Silvester Company® El acompañó a Aref durante toda su aventura hasta el día de hoy.</p>

                                    </Card>
                                </Col>
                                <Col lg={6} className="mb-4">
                                    <Card className={"p-4 h-100 bordered"}>

                                        <img style={{ maxWidth: 280, margin: 'auto' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKJPxxwPeNvISnBbZsZHe887Ws0FnrL7o0w&usqp=CAU" alt="" />
                                        <h1>Sergio Arrieta</h1>
                                        <p>
                                            Miembro del equipo: Sergio, padre de Aref, al igual que Joaquin lo apoyan y son pieza clave del éxito de Silvester Company®, sin ellos Silvester no sería lo que es hoy en día. El junto a su hijo empezaron a compartir su pasión por los animales exóticos hace muchos años atrás y pudieron formar este asombroso proyecto. </p>
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>


                <Row>
                    <Col lg={8} className="animate__animated animate__fadeInUp">
                        <Card className={"p-4 h-100 bordered"}>
                            <h1>Nuestro Criadero</h1>

                            <p>
                                Cuando equipamos nuestras instalaciones por primera vez, nuestro pensamiento primordial fue, y continúa
                                siendo, "nada es demasiado bueno". Desde de los equipos y suministros que elegimos hasta
                                nuestras prácticas diarias, hemos sido incansables en nuestros esfuerzos para proporcionar el mejor entorno para nuestros animales. Nos hemos esforzado en adquirir reptiles de calidad superior o como le gusta decir a Aref “La Crème De La Crème”. </p>
                            <p>
                                Para lograr la calidad y profesionalidad que nos caracteriza hicimos estrategias y técnicas para que la  limpieza, la nutrición y las perfectas condiciones están a la orden del día.
                                en Silvester Company®. De modo que puede estar completamente seguro de que, desde su nacimiento,
                                su reptil ha disfrutado de una existencia sana y libre de estrés.
                            </p>
                            <p>
                                Nuestra instalación tiene aproximadamente 1000 m2 cuadrados y alberga a todos nuestros reptiles.
                            </p>
                        </Card>
                    </Col>
                    <Col lg={4} className="animate__animated animate__fadeInUp">
                        <img className="img-thumbnail background-cover w-100 h-100" src="https://i.pinimg.com/474x/24/50/15/24501537dc0027ef6bfe564617e77e69.jpg" alt="" />
                    </Col>
                </Row>


                <Row>
                    <Col lg={4} className="animate__animated animate__fadeInUp">
                        <img className="img-thumbnail background-cover h-100" src="https://eoc.cat/wp-content/uploads/2019/09/patologias-de-los-reptiles.jpg" alt="" />
                    </Col>
                    <Col lg={8} className="animate__animated animate__fadeInUp">
                        <Card className={"p-4 h-100 bordered"}>
                            <h1>NUESTROS REPTILES:</h1>

                            <p>
                                Nuestra colección está principalmente conformada por Geckos Leopardos, Geckos Crestados, Dragones barbudos y muchas otras especies de reptiles y artrópodos exóticos.
                                Como criadores de reptiles, entendemos que están entusiasmados con las muchas coloraciones y fases que tenemos disponibles para los geckos leopardo, geckos crestados, dragones barbudos y muchas otras especies. </p>
                            <p>Si está considerando construir una colección única con muchas morfologías distintas, o eres el aficionado que ama la búsqueda de animales de una naturaleza espectacular ... aquí está nuestra colección de lagartos verdaderamente geniales.
                            </p>
                            <p>
                                Sus características impresionarán a una amplia gama de coleccionistas y tienen la distinción muy especial añadida de ser algunos de los más raros y reconocidos del mundo.
                            </p>
                            <p>
                                Esperamos que comparta nuestro entusiasmo al conocer toda la colección.
                            </p>
                        </Card>
                    </Col>
                </Row>

                <Row className="card text-center animate__animated animate__fadeInUp">
                    <h1>Algunos de nuestros reptiles</h1>

                    <Col lg={12}>
                        <Row>
                            <Col sm={4} className="card border-0">
                                <img src="https://www.prensalibre.com/wp-content/uploads/2020/10/CSTUDIO-MIMASCOTA-OCTUBRE-5.jpg?quality=82&w=1024" alt="" />
                            </Col>
                            <Col sm={4} className="card border-0">
                                <img src="https://www.prensalibre.com/wp-content/uploads/2020/10/CSTUDIO-MIMASCOTA-OCTUBRE-5.jpg?quality=82&w=1024" alt="" />
                            </Col>
                            <Col sm={4} className="card border-0">
                                <img src="https://www.prensalibre.com/wp-content/uploads/2020/10/CSTUDIO-MIMASCOTA-OCTUBRE-5.jpg?quality=82&w=1024" alt="" />
                            </Col><Col sm={4} className="card border-0">
                                <img src="https://www.prensalibre.com/wp-content/uploads/2020/10/CSTUDIO-MIMASCOTA-OCTUBRE-5.jpg?quality=82&w=1024" alt="" />
                            </Col>
                            <Col sm={4} className="card border-0">
                                <img src="https://www.prensalibre.com/wp-content/uploads/2020/10/CSTUDIO-MIMASCOTA-OCTUBRE-5.jpg?quality=82&w=1024" alt="" />
                            </Col>
                            <Col sm={4} className="card border-0">
                                <img src="https://www.prensalibre.com/wp-content/uploads/2020/10/CSTUDIO-MIMASCOTA-OCTUBRE-5.jpg?quality=82&w=1024" alt="" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Stack>
        </Container>
    )
}
