import Content from "../components/Content";

export default function ClientsList() {
    return (
        <Content title="Lista de clientes">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Lista de Clientes</h3>
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
                        <div className="card-body table-responsive p-0" style={{ height: '500px' }}>
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
                                            Código
                                        </th>
                                        <th>
                                            Nombre del cliente
                                        </th>
                                        <th style={{ width: '6%' }}>
                                            Precio
                                        </th>
                                        <th style={{ width: '18%' }}>
                                            Dirección
                                        </th>
                                        <th style={{ width: '4%' }}>
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
                                                        <img alt="Avatar" className="table-avatar" src="https://i.imgur.com/8UNAWR7.jpg" />
                                                    </div>
                                                </td>
                                                <td>
                                                    {el}
                                                </td>
                                                <td>
                                                    <a>
                                                        Nombre del cliente número
                                                    </a>
                                                    <br />
                                                    <small>
                                                        985 983 831
                                                    </small>
                                                </td>
                                                <td>
                                                    contacto@gmail.com
                                                </td>
                                                <td>
                                                    Perú, Lima, Santiago de Surco, 3456 Av Primaveras
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
                                                    <button className="btn ml-1 btn-info btn-sm" data-toggle="modal" data-target="#modal-xl">
                                                        <i className="fas fa-pencil-alt">
                                                        </i>
                                                        Editar
                                                    </button>
                                                    <button className="btn ml-1 btn-danger btn-sm">
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
