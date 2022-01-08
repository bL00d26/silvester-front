type PageType = {
    routeProps: {
        path: string,
        element: JSX.Element
    },
    name: string
}

export type ModuleType = {
    moduleProps: {
        path: string,
        element: JSX.Element
    },
    name: string,
    pages: PageType[]
}