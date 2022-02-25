import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainCarousel from "../components/MainCarousel/Carousel";
import { Card, Stack } from "react-bootstrap";

export default function MainView() {
    return (
        <Container>
            <Stack gap={5}>
                <Row>
                    <MainCarousel />
                </Row>
                <Row>
                    <Col className="aspect" sm={4}>
                        <Card className="overflow-hidden">
                            <img src="https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2020/10/Up-to-date-option.png?w=304&ssl=1" alt="" />
                        </Card>
                    </Col>
                    <Col className="aspect" sm={4}>
                        <Card className="iframeContainer overflow-hidden">
                            <iframe src="https://www.youtube.com/embed/hS7gTKubSqk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                        </Card>
                    </Col>
                    <Col className="aspect" sm={4}>
                        <Card className="overflow-hidden">
                            <img src="https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2020/10/Learning-Center-Image.png?w=304&ssl=1" alt="" />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8}>
                        <Card className={"p-4 bordered"}>
                            <h1>Welcome to The Urban Reptile</h1>
                            <h3>If you’ve considered owning the ultimate reptile, consider this…</h3>
                            <p>
                                Here at The Urban Reptile we have been breeding and selling reptiles for over 20-years. We pride ourselves in offering reptiles that are are “cover-shot” quality and following up with first-rate customer care and service. Everything from our 30 day health guarantee, ongoing customer support and experienced shipping – we strive to make every client experience an excellent one.
                            </p>
                            <p>
                                If you’re a pet owner or startup hobbyist right through to an expert breeder we believe we have reptiles that you will fall in love with. We offer some of the most amazing cutting edge breeding projects, right through to reptiles and morphs that have been popular for years.   We invite you to browse our collections and learn more about what’s happening with us. And if you’re looking to make your collection grow by one, we hope you will make it one of these. Welcome to The Urban Reptile!
                            </p>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <h4>Check It Out!!</h4>
                    </Col>
                </Row>
            </Stack>
        </Container>
    )
}
