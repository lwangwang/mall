import Vue from 'vue'
import VueRouter from 'vue-router'




const Home = () =>
    import ('views/home/Home.vue')
const Category = () =>
    import ('views/category/Category.vue')
const Shopcart = () =>
    import ('views/shopcart/Shopcart.vue')
const Profile = () =>
    import ('views/profile/Profile.vue')
const Detail = () =>
    import ('views/detail/Detail.vue')
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    meta: {
        title: '首页'
    },
    component: Home
}, {
    path: '/category',
    meta: {
        title: '分类'
    },
    component: Category
}, {
    path: '/shopcart',
    meta: {
        title: '购物车'
    },
    component: Shopcart
}, {
    path: '/profile',
    meta: {
        title: '个人'
    },
    component: Profile
}, {
    path: '/detail/:id',
    meta: {
        title: '产品'
    },
    component: Detail
}, ]

const router = new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes
    })
    // 前置钩子
router.beforeEach((to, from, next) => {
    // 从from跳转到to  meta元数据(描述数据的数据 )
    console.log(to.matched[0].meta.title);
    document.title = to.matched[0].meta.title
    next()
})
export default router