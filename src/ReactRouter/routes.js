//路由配置
import Dashboard from './view/Dashboard//index'
import Login from './view/Login'
import Settings from './view/Settings'
import ArticalDetail from './view/ArticalDetail'
import Artical from './view/Artical'
import NotFound from './view/NotFound'

//App同级
export const mainRouter = [
    {
        pathname:'/login',
        component:Login
    },
    {
        pathname:'/404',
        component:NotFound
    }
]

export const dashRouter = [
    {
        pathname:'/admin/dashboard',
        component:Dashboard
    },
    {
        pathname:'/admin/settings',
        component:Settings
    },
    {
        pathname:'/admin/dashboard',
        component:Dashboard
    },
    {
        pathname:'/admin/artical',
        component:Artical,
        exact:true
    },
    {
        pathname:'/admin/artical/edit/:id',
        component:ArticalDetail
    }
]

