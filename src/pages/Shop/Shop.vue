<template>
  <div>
    <ShopHeader/>

    <div class="tab">
      <div class="tab-item">
        <!--这里添加了一个replace说明：不加replace以下三者之间的切换会有记录，加了replace之后 返回直接跳转到Shop主页-->
        <router-link to="/shop/shopGoods" replace>点餐</router-link>
      </div>
      <div class="tab-item">
       <router-link to="/shop/shopRatings" replace>评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/shopInfo" replace>商家</router-link>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<script>
  import ShopHeader from '../../components/ShopHeader/ShopHeader'

  export default {

    mounted() {
      this.$store.dispatch('getShopInfo')
    },

    components: {
      ShopHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"  scoped>
  @import "../../common/stylus/mixins.styl"
  .tab
    height 40px
    line-height 40px
    background #fff
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      float left
      width: 33.33333%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        text-decoration none
        &.router-link-active
          color #02a774
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background #02a774
</style>
