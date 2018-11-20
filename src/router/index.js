import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'

import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history', //去掉请求路径中的 #
  routes: [
    {
      path: '/Msite',
      component: Msite,
      meta: {  //meta的设置 是为了footer底部判断是否显示
        showFooter: true
      }
    },
    {
      path: '/Order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        showFooter: false
      }
    },

    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/shopGoods',
          component: ShopGoods
        },
        {
          path: '/shop/shopRatings',
          component: ShopRatings
        },
        {
          path: '/shop/shopInfo',
          component: ShopInfo
        },
        {
          path: '/',
          redirect : '/shop/shopGoods'
        }
      ]
    },

    {
      path: '/',
      redirect: '/Msite'
    }
  ]
})
