import { Outlet } from "react-router-dom"
import { ModuleType } from "../../shared/types"
import Layout from "./layout"
import ClientsList from "./pages/ClientsList"
import EditShop from "./pages/EditShop"
import MainView from "./pages/MainView"
import ProductsList from "./pages/ProductsList"
import SalesList from "./pages/SalesList"
import ShopDetails from "./pages/ShopDetails"

function Admin() {
    return (
        <Layout>
            <Outlet></Outlet>
        </Layout>
    )
}

const AdminModule: ModuleType = {
    moduleProps: {
        path: '/admin',
        element: <Admin />
    },
    name: 'Admin',
    pages: [{
        routeProps: {
            path: "/admin/",
            element: <MainView />,
        },
        name: "MainView",
    },
    {
        routeProps: {
            path: "/admin/mi-tienda",
            element: <ShopDetails />,
        },
        name: "Mi tienda",
    },
    {
        routeProps: {
            path: "/admin/productos",
            element: <ProductsList />,
        },
        name: "Productos",
    },
    {
        routeProps: {
            path: "/admin/productos/agregar",
            element: <ShopDetails />,
        },
        name: "Agregar productos",
    },
    {
        routeProps: {
            path: "/admin/mi-tienda/editar",
            element: <EditShop />,
        },
        name: "Editar mi tienda",
    },
    {
        routeProps: {
            path: "/admin/ventas",
            element: <SalesList />,
        },
        name: "Ventas",
    },
    {
        routeProps: {
            path: "/admin/clientes",
            element: <ClientsList />,
        },
        name: "Clientes",
    }]
}

export default AdminModule
