import Carousel from 'react-bootstrap/Carousel'

const MainCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2021/02/Specialty-reptile-home-banner.png?w=965&ssl=1"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2021/02/Bearded-Dragon-Home-Banner.png?w=965&ssl=1"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2021/02/Asset-92.png?w=965&ssl=1"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default MainCarousel