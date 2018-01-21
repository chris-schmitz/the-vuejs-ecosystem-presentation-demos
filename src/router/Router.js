import VueRouter from "vue-router"

import ColorPicker from "../components/ColorPicker"
import PredefinedColorPicker from "../components/PredefinedColorPicker"

import ListAndDetailsLayout from "../components/list_and_detail/Layout"

const routes = [
    {
        path: "/simple-picker-demo",
        name: "simple-picker",
        component: ColorPicker
    },
    {
        path: "/predefined-picker",
        name: "predefined-picker",
        component: PredefinedColorPicker
    },
    {
        path: "/list-and-detail",
        name: "list-and-detail",
        component: ListAndDetailsLayout
    }
]

export default new VueRouter({ routes })
