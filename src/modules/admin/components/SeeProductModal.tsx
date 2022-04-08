

export const SeeProductModal = () => {
    let productDescription =
        `<h1>Sample content state</h1> 
    <br />
    <p>Descripción del producto...</p> 
    <ul>
        <li>Poliester</li>
        <li>Algodon</li>
    </ul>`;

    return (
        <div className="modal fade" id="modal-see">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Previsualización del Producto</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="card-body">
                                <div className="card card-solid">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12 col-sm-6">
                                                <h3 className="d-inline-block d-sm-none">LOWA Men’s Renegade GTX Mid Hiking Boots Review</h3>
                                                <div className="col-12">
                                                    <img src="https://imgur.com/biwSSQ8.jpg" className="product-image" alt="Product Image" />
                                                </div>
                                                <div className="col-12 product-image-thumbs">
                                                    <div className="product-image-thumb active"><img src="https://imgur.com/biwSSQ8.jpg" alt="Product Image" /></div>
                                                    <div className="product-image-thumb"><img src="https://imgur.com/AM6Apkl.jpg" alt="Product Image" /></div>
                                                    <div className="product-image-thumb"><img src="https://imgur.com/VHU2wxq.jpg" alt="Product Image" /></div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <h3 className="my-3">Nombre del producto</h3>
                                                <p>Descripción corta del producto...</p>
                                                <hr />
                                                <h4>Colores disponibles</h4>
                                                <div className="btn-group btn-group-toggle">
                                                    <label className="btn btn-default text-center active">
                                                        Verde
                                                        <br />
                                                        <i className="fas fa-circle fa-2x text-green" />
                                                    </label>
                                                    <label className="btn btn-default text-center">
                                                        Azul
                                                        <br />
                                                        <i className="fas fa-circle fa-2x text-blue" />
                                                    </label>
                                                    <label className="btn btn-default text-center">
                                                        Morado
                                                        <br />
                                                        <i className="fas fa-circle fa-2x text-purple" />
                                                    </label>
                                                </div>
                                                <div className="bg-gray py-2 px-3 mt-4">
                                                    <h2 className="mb-0">
                                                        $280.00
                                                    </h2>
                                                    <h4 className="mt-0">
                                                        <small>Antes: $580.00 </small>
                                                    </h4>
                                                </div>
                                                <div className="mt-4">
                                                    <div className="btn btn-primary btn-lg btn-flat disabled">
                                                        <i className="fas fa-cart-plus fa-lg mr-2" />
                                                        Agregar al carrito
                                                    </div>
                                                </div>
                                                <div className="mt-4 product-share">
                                                    <a href="https://facebook.com" className="text-gray">
                                                        <i className="fab fa-facebook-square fa-2x" />
                                                    </a>
                                                    <a href="https://facebook.com" className="text-gray">
                                                        <i className="fab fa-twitter-square fa-2x" />
                                                    </a>
                                                    <a href="https://facebook.com" className="text-gray">
                                                        <i className="fas fa-envelope-square fa-2x" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <label htmlFor="inputSKU">Descripción larga del producto:</label>
                                <div className="card card-body" dangerouslySetInnerHTML={{ __html: productDescription }}>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
