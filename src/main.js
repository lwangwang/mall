import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
    Swipe,
    SwipeItem,
    Lazyload,
    Sidebar,
    SidebarItem,
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton,
    Toast
} from 'vant'
Vue.use(Swipe)
Vue.use(Toast)
Vue.use(SwipeItem)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(Lazyload)
Vue.use(GoodsAction)
Vue.use(GoodsActionIcon)
Vue.use(GoodsActionButton)
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')