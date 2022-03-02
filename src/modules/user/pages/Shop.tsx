import Container from "react-bootstrap/Container";
import ProductCard from "../components/ProductCard/ProductCard";


export default function Shop() {

    const productArr = [
        {
            id: "1",
            code: "TRS-SD2-FT2",
            title: "Lagarto de sombra",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            price: 100.0,
            previewImages: [
                "https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21A5.jpg",
                "https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21B2.jpg"
            ],
            available: true
        },
        {
            id: "2",
            code: "MAS-SD2-FT2",
            title: "Lagarto Prueba 2",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            price: 100.0,
            previewImages: [
                "https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21A5.jpg",
                "https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21B2.jpg"
            ],
            available: false
        },
        {
            id: "3",
            code: "MAS-SD2-FT2",
            title: "Lagarto Prueba 2",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            price: 100.0,
            previewImages: [
                "https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21A5.jpg",
                "https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21B2.jpg"
            ],
            available: true
        },
        {
            id: "4",
            code: "MAS-SD2-FT2",
            title: "Lagarto Prueba 2",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            price: 100.0,
            previewImages: [
                "https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21A5.jpg",
                "https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21B2.jpg"
            ],
            available: false
        },
        {
            id: "5",
            code: "MAS-SD2-FT2",
            title: "Lagarto Prueba 2",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            price: 100.0,
            previewImages: [
                "https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21A5.jpg",
                "https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21B2.jpg"
            ],
            available: false
        },
        {
            id: "6",
            code: "MAS-SD2-FT2",
            title: "Lagarto Prueba 2",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            price: 100.0,
            previewImages: [
                "https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21A5.jpg",
                "https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21B2.jpg"
            ],
            available: true
        },
        {
            id: "7",
            code: "MAS-SD2-FT2",
            title: "Lagarto Prueba 2",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            price: 100.0,
            previewImages: [
                "https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21A5.jpg",
                "https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21B2.jpg"
            ],
            available: true
        },
        {
            id: "8",
            code: "MAS-SD2-FT2",
            title: "Lagarto Prueba 2",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            price: 100.0,
            previewImages: [
                "https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21A5.jpg",
                "https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21B2.jpg"
            ],
            available: true
        },
        {
            id: "9",
            code: "MAS-SD2-FT2",
            title: "Lagarto Prueba 2",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            price: 100.0,
            previewImages: [
                "https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21A5.jpg",
                "https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21B2.jpg"
            ],
            available: true
        },
        {
            id: "10",
            code: "MAS-SD2-FT2",
            title: "Lagarto Prueba 2",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            price: 100.0,
            previewImages: [
                "https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21A5.jpg",
                "https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21B2.jpg"
            ],
            available: true
        },
        {
            id: "11",
            code: "MAS-SD2-FT2",
            title: "Lagarto Prueba 2",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            price: 100.0,
            previewImages: [
                "https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21A5.jpg",
                "https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21B2.jpg"
            ],
            available: false
        },
        {
            id: "12",
            code: "MAS-SD2-FT2",
            title: "Lagarto Prueba 2",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            price: 100.0,
            previewImages: [
                "https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21A5.jpg",
                "https://i0.wp.com/theurbanreptile.com/wp-content/uploads/2022/01/TUR-BD-21B2.jpg"
            ],
            available: true
        }
    ]

    return (
        <Container className="px-3">
            <div className="card-deck row gx-3 gy-3">
                {
                    productArr.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))
                }
            </div>
        </Container>
    )
}
