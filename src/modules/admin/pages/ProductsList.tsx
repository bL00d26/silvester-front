import Content from "../components/Content";
import { ProductModal } from "../components/ProductModal";
import { SeeProductModal } from "../components/SeeProductModal";

export default function ProductsList() {
    return (
        <Content title="Lista de ventas">
            <div className="row">
                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Productos</h3>
                            <div className="card-tools">
                                <button className="btn btn-small btn-success" data-toggle="modal" data-target="#modal-xl">Agregar producto</button>
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <table className="table table-striped projects">
                                <thead>
                                    <tr>
                                        <th style={{ width: '3%' }}>
                                            N°
                                        </th>
                                        <th style={{ width: '5%' }}>
                                            Imágen
                                        </th>
                                        <th style={{ width: '6%' }}>
                                            Orden
                                        </th>
                                        <th>
                                            Nombre del producto
                                        </th>
                                        <th style={{ width: '6%' }}>
                                            Precio
                                        </th>
                                        <th style={{ width: '5%' }}>
                                            Stock
                                        </th>
                                        <th style={{ width: '4%' }}>
                                            Estado
                                        </th>
                                        <th style={{ width: '15%' }}>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        [1, 2, 3, 4, 5, 6, 7, 8].map(el => (
                                            <tr>
                                                <td>
                                                    #{el}
                                                </td>
                                                <td>
                                                    <div className="list-inline-item">
                                                        <img alt="Avatar" className="table-avatar" src="https://imgur.com/X7yIs7Y.png" />
                                                    </div>
                                                </td>
                                                <td>
                                                    {el}
                                                </td>
                                                <td>
                                                    <a>
                                                        Nombre del producto ejemplo número
                                                    </a>
                                                    <br />
                                                    <small>
                                                        Creado 01-01-2022
                                                    </small>
                                                </td>
                                                <td>
                                                    S/. 100.00
                                                </td>
                                                <td>
                                                    80
                                                </td>
                                                <td className="project-state">
                                                    <span className="badge badge-success">Activo</span>
                                                </td>
                                                <td className="project-actions text-right">
                                                    <button className="btn btn-primary btn-sm" data-toggle="modal" data-target="#modal-see">
                                                        <i className="fas fa-folder">
                                                        </i>
                                                        Ver
                                                    </button>
                                                    <button className="btn btn-info btn-sm" data-toggle="modal" data-target="#modal-xl">
                                                        <i className="fas fa-pencil-alt">
                                                        </i>
                                                        Editar
                                                    </button>
                                                    <button className="btn btn-danger btn-sm">
                                                        <i className="fas fa-trash">
                                                        </i>
                                                        Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <ProductModal />
                <SeeProductModal />
            </div>
        </Content>
    )
}
