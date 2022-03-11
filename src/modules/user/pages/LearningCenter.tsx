import { Card, Stack } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import data from '../temp/temporal_data.json'

export default function LearningCenter() {
    const news = data.learning_center.news;
    return (
        <Container>
            <Stack gap={5} className="bordered" style={{ background: "#4dd875", padding: "10px" }}>

                <Row className="text-center mt-4">
                    <h1 style={{ color: "#fff" }}>CENTRO DE APRENDIZAJE DE SILVESTER COMPANY®</h1>
                </Row>
                <Row>
                    <Col lg={8} >
                        <Card className={"p-4 h-100 bordered"}>
                            <h2>
                                Bienvenido al Centro de Aprendizaje de Reptiles Urbanos. Aquí encontrará información útil sobre la comprensión de la genética, el cuidado y la cría de Geckos leopardo y Geckos crestados. Vuelve pronto para ver nuevos artículos sobre dragones barbudos y otros reptiles.
                            </h2>
                        </Card>
                    </Col>
                    <Col lg={4} className="">
                        <img className="img-thumbnail background-cover h-100" src="https://eoc.cat/wp-content/uploads/2019/09/patologias-de-los-reptiles.jpg" alt="" />
                    </Col>
                </Row>

                <Row>
                    {
                        news.map(({ id, title, image, description, link }) => (
                            <Col lg={12} key={id} className="mb-3">
                                <Card className={"p-4 h-100 bordered text-center"}>
                                    <Row>
                                        <Col lg={4}>
                                            <img className="img-thumbnail" style={{ minHeight: 300 }}
                                                src={image} alt="" />
                                        </Col>
                                        <Col lg={8} style={{ textAlign: 'left' }} >
                                            <h1>{title}</h1>
                                            <p dangerouslySetInnerHTML={{ __html: description }}></p>
                                            <Link to={link}>Leer más</Link>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Stack>
        </Container>
    )
}
