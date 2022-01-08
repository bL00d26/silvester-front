import { ModuleType } from "../../shared/types"

function Admin() {
    return (
        <>
            module admin works!
        </>
    )
}

const AdminModule: ModuleType = {
    moduleProps: {
        path: '/admin',
        element: <Admin/>
    },
    name: 'Admin',
    pages: []
}

export default AdminModule
