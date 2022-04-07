
export const CreateProductModal = () => {
    return (
        <div className="modal fade" id="modal-xl">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Agregar Producto</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="inputName">Nombre:</label>
                                    <input type="text" className="form-control" id="inputName" placeholder="Ingresar nombre" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="inputSKU">Número o código de referencia:</label>
                                    <input type="text" className="form-control" id="inputSKU" placeholder="SKU" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputFile">Subir imagen del producto</label>
                                    <div className="input-group">
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="exampleInputFile" />
                                            <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                                        </div>
                                        <div className="input-group-append">
                                            <span className="input-group-text">Upload</span>
                                        </div>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <label htmlFor="inputSKU">Descripción:</label>
                                    <textarea id="summernote">
                                        Texto de ejemplo
                                    </textarea>
                                </div>

                            </div>
                        </form>

                    </div>
                    <div className="modal-footer justify-content-between">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary">Agregar producto</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
