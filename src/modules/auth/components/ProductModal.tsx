
import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
// import draftToMarkdown from 'draftjs-to-markdown';

export const ProductModal = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const text = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    return (
        <div className="modal fade" id="modal-xl">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Agregar/Editar Producto</h4>
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
                                            <input type="file" multiple className="custom-file-input" id="exampleInputFile" />
                                            <label className="custom-file-label" htmlFor="exampleInputFile">Elige las imágenes de tu producto</label>
                                        </div>
                                        <div className="input-group-append">
                                            <span className="input-group-text">Upload</span>
                                        </div>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <label htmlFor="inputSKU">Descripción:</label>
                                    <Editor
                                        editorState={editorState}
                                        editorClassName="editor-class card card-body"
                                        onEditorStateChange={setEditorState}
                                        placeholder="Ingresa el detalle de tu producto ..."
                                    />
                                </div>
                                <button className="btn btn-danger" onClick={(e) => {
                                    e.preventDefault()
                                    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
                                }}>
                                    Ver detalle en consola
                                </button>
                                <h2>Previsualización html</h2>
                                <div className="card card-body">
                                    {text}
                                </div>
                            </div>
                        </form>

                    </div>
                    <div className="modal-footer justify-content-end">
                        <button type="button" className="btn btn-primary">Agregar producto</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
