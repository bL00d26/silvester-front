import { FC } from 'react'
import { Link } from 'react-router-dom'


type Product = {
    id: string,
    code: string,
    title: string,
    description: string,
    price: number,
    previewImages: string[],
    available: boolean
}
interface ProductProps {
    product: Product,
}

const ProductCard: FC<ProductProps> = ({ product }) => {
    const { id, title, price, previewImages, code, available } = product;
    return (
        <div className="col-3">
            <div className={`product-grid card  ${available ? '' : 'sold-out'}`}>
                <div className="product-image">
                    <Link to={`/product/${id}`} className="image-container">
                        {
                            previewImages.map((image, index) => (
                                <img key={index} alt="" className={`pic-${index + 1}`} src={image} />
                            ))
                        }
                    </Link>
                    <ul className="social">
                        <li>
                            <div className="ancle">
                                <i className="bi bi-cart-plus" />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="product-content">
                    <h3 className="title">
                        <Link to={`/product/${id}`} >{title}</Link>
                    </h3>
                    <span className="price">S/. {price}</span>
                    <small className="code">{code}</small>
                    <button className="add-to-cart">{available ? 'Comprar ahora' : 'Agotado'}</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard