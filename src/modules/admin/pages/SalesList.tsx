import Content from "../components/Content";

export default function SalesList() {
    return (
        <Content title="Lista de ventas">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Lista de ventas</h3>
                            <div className="card-tools">
                                <div className="input-group input-group-sm" style={{ width: '150px' }}>
                                    <input type="text" name="table_search" className="form-control float-right" placeholder="Buscar" />
                                    <div className="input-group-append">
                                        <button type="submit" className="btn btn-default">
                                            <i className="fas fa-search" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body table-responsive p-0" style={{ height: '500px' }}>
                            <table className="table table-striped projects">
                                <thead>
                                    <tr>
                                        <th style={{ width: '3%' }}>
                                            N°
                                        </th>
                                        <th style={{ width: '5%' }}>
                                            Documento
                                        </th>
                                        <th style={{ width: '6%' }}>
                                            Código
                                        </th>
                                        <th style={{ width: '15%' }}>
                                            Cliente
                                        </th>
                                        <th>
                                            Detalle de venta
                                        </th>
                                        <th style={{ width: '8%' }}>
                                            Total
                                        </th>
                                        <th style={{ width: '3%' }}>
                                            Estado
                                        </th>
                                        <th style={{ width: '22%' }}>
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
                                                    Alexander Cardenas
                                                </td>
                                                <td>
                                                    <a>
                                                        Nombre ejemplo número
                                                    </a>
                                                    <br />
                                                    <small>
                                                        Creado 01-01-2022
                                                    </small>
                                                </td>
                                                <td>
                                                    S/. 100.00
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
                                                    <button className="btn ml-3 btn-danger btn-sm">
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
                        {/* /.card-body */}
                    </div>
                    {/* /.card */}
                </div>

            </div>
        </Content>
    )
}
