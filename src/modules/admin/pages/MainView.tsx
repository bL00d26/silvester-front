import Content from "../components/Content";

export default function MainView() {
    return (

        <Content title="Panel de control">
            <div className="container-fluid">
                <div className="row">
                    <div>
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                {/* small card */}
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>150</h3>
                                        <p>Pedidos</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fas fa-shopping-cart" />
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        Ver pedidos <i className="fas fa-arrow-circle-right" />
                                    </a>
                                </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-3 col-6">
                                {/* small card */}
                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3>53<sup style={{ fontSize: '20px' }}>%</sup></h3>
                                        <p>Información</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-stats-bars" />
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        Modificar información <i className="fas fa-arrow-circle-right" />
                                    </a>
                                </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-3 col-6">
                                {/* small card */}
                                <div className="small-box bg-warning">
                                    <div className="inner">
                                        <h3>44</h3>
                                        <p>Productos</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fas fa-user-plus" />
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        Agregar productos <i className="fas fa-arrow-circle-right" />
                                    </a>
                                </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-3 col-6">
                                {/* small card */}
                                <div className="small-box bg-danger">
                                    <div className="inner">
                                        <h3>65</h3>
                                        <p>Pedidos pendientes</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fas fa-chart-pie" />
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        Ver pedidos pendientes <i className="fas fa-arrow-circle-right" />
                                    </a>
                                </div>
                            </div>
                            {/* ./col */}
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5 className="mb-2">Información extra</h5>
                            <div className="row">
                                <div className="col-md-3 col-sm-6 col-12">
                                    <div className="info-box">
                                        <span className="info-box-icon bg-info"><i className="far fa-envelope" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">VENTAS POR DÍA</span>
                                            <span className="info-box-number">1,410</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3 col-sm-6 col-12">
                                    <div className="info-box">
                                        <span className="info-box-icon bg-success"><i className="far fa-flag" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">PAGOS CONFIRMADOS</span>
                                            <span className="info-box-number">410</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3 col-sm-6 col-12">
                                    <div className="info-box">
                                        <span className="info-box-icon bg-warning"><i className="far fa-copy" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">PAGOS POR LINK Y QR</span>
                                            <span className="info-box-number">13,648</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3 col-sm-6 col-12">
                                    <div className="info-box">
                                        <span className="info-box-icon bg-danger"><i className="far fa-star" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">USUARIOS NUEVOS REGISTRADOS HOY</span>
                                            <span className="info-box-number">93,139</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                </div>
                                {/* /.col */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Content>


    )
}
