import Login from '../views/Login/index.vue'
import Layout from '../views/Layout/index.vue'
import {createRouter,createWebHashHistory} from 'vue-router'
const routes = [
    {
        path:'/',
        component:Layout,
        // redirect:'/home',
        children:[
            {
                path:'home',
                name:'Home',
                component:()=>import('@/views/Home/index.vue')
            },
            {
                path:'category/:id',
                name:'Category',
                component:()=>import('@/views/Category/index.vue')
            },
            {
                path:'category/sub/:id',
                name:'SubCategory',
                component:()=>import('@/views/SubCategory/index.vue')
            },
            {
                path:'detail/:id',
                name:'Detail',
                component:()=>import('@/views/Details/index.vue')
            },
            {
                path:'cartlist',
                name:'CartList',
                component:()=>import('@/views/CartList/index.vue')
            },
            {
                path:'checkout',
                name:'Checkout',
                component:()=>import('@/views/Checkout/index.vue')
            },
            {
                path:'pay',
                name:'Pay',
                component:()=>import('@/views/Pay/index.vue')
            },
            {
                path:'paycallback',
                component:()=>import('@/views/Pay/components/PayBack.vue')
            },
            {
                path:'member',
                component:()=>import('@/views/Member/index.vue'),
                redirect:'/member/user',
                children:[
                    {
                        path:'order',
                        component:()=>import('@/views/Member/components/UserOrder.vue')
                    },
                    {
                        path:'user',
                        component:()=>import('@/views/Member/components/UserInfo.vue')
                    }
                ]
            }
        ]
    },
    {
        path:'/login',component:Login
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(){
        return {
            top:0
        }
    }
})