/**
 * mutations 直接更新state数据
 */
import Vue from 'vue'
//引入常量类型
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS](state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state,{categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state,{shops}) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO](state,{userInfo}) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO] (state) {
    state.userInfo={}
  },

  //---------
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },

  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },

  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },

  [ADD_FOOD_COUNT](state, {food}) {
    if (food.count) {
      food.count++
    } else {// 第一次
      // 新添加count属性, 并指定值为1
      // food.count = 1  // 没有数据绑定==> 不会更新界面
      Vue.set(food, 'count', 1)
      // 添加到购物车中
      state.cartFoods.push(food)
    }
  },

  [REDUCE_FOOD_COUNT](state, {food}) {
    if (food.count) {
      food.count--
      // 一旦减为0时, 从购物车中删除food
      if(food.count===0) {
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }

  },

}
