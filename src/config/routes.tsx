import Home from "../pages/Home"
import Coffee from "../pages/Coffee"
import Portfolio from "../pages/Portfolio"
import SingleCoffee from "../pages/SingleCoffee"
import ComponentTestPage from "../pages/ComponentTestPage"

interface RouteType {
    path: string,
    component: ()=> JSX.Element,
    name: string
    protected: boolean
}

export const routes : RouteType[] = [
    {
        name: 'Home',
        component: Home,
        path: '/',
        protected: false
    },
    {
        name: 'Portfolio',
        component: Portfolio,
        path: '/portfolio',
        protected: true,
    },
    {
        name: 'Explore',
        component: Coffee,
        path: '/coffee',
        protected: false
    },
    {
        name: 'Single Coffee',
        component: SingleCoffee,
        path: '/singlecoffee',
        protected: false
    },
    {
        name: 'Component Test',
        component: ComponentTestPage,
        path: '/componenttestpage',
        protected: false
    }
    
]