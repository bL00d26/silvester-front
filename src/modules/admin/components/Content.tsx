type LayoutProps = {
    children: JSX.Element;
    title: string;
    path?: string;
};
const Content = ({ children, title, path }: LayoutProps) => {
    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">{title}</h1>
                        </div>
                        {
                            path ? (
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="/admin">{path}</a></li>
                                        <li className="breadcrumb-item active">{title}</li>
                                    </ol>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export default Content