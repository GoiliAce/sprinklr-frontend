import DefaultLayout from "~/layout/default"
import config from "./config"

import Home from "~/pages/Home"

const routes = [
    {
        path: config.routes.home,
        exact: true,
        component: Home,
        layout: DefaultLayout
    }
]
export default routes