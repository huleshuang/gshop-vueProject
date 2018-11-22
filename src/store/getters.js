
/*
  getters里
 */

export default {

  totalFoodsCount (state){
    return state.cartFoods.reduce((pre,food)=>pre+food.count,0)
  },
  totalPrice (state){
    return state.cartFoods.reduce((pre,food)=> pre + food.count * food.price,0)
  }
}
