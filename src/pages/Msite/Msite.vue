<template>
  <section class="msite">
    <!--首页头部-->
    <TopHeader :title="address.name">
      <span class="header_search" slot="search">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="login">
        <span class="header_login_text">登录|注册</span>
      </span>
    </TopHeader>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="'https://fuss10.elemecdn.com' + category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </section>
</template>

<script>
import {mapState} from 'vuex'
import ShopList from '../../components/ShopList/ShopList'

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css' //引入轮播图的样式

export default {

  data() {
    return {
      imgBaseUrl: 'https://fuss10.elemecdn.com'
    }
  },

  components: {
    ShopList
  },

  /**
   * 处理异步请求 商品分类  商铺列表
   */
  mounted () {
    //获的食品分类列表
    this.$store.dispatch('getCategorys')
    //获得商铺列表
    this.$store.dispatch('getShops')

    // //Swiper轮播图 ：必须在列表数据显示之后才创建
    // new Swiper('.swiper-container',{
    //
    //   loop: true, // 循环模式选项
    //   // 如果需要分页器
    //   pagination: {
    //     el: '.swiper-pagination',
    //   }
    // })
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapState(['address','categorys']),

    //一维数组 变成 二维数组返回
    categorysArr () {
      const {categorys} = this
      // 二维数组
      const arr = []
      // 内部的小数组(最大长度为8)8代表第一屏就有8张图片
      let smallArr = []
      // 遍历categorys
      categorys.forEach(c => {

        // 将smallArr保存大数组(只能一次)
        if(smallArr.length===0) {
          arr.push(smallArr)
        }

        // 将c保存到smallArr
        smallArr.push(c)

        // 一旦小数组满了, 准备一个新的空小数组
        if(smallArr.length===8) {
          smallArr = []
        }
      })

      return arr
    }
  },
  /*
    bug: 分类轮播有问题
    解决: watch + nextTick()
     */
  watch: {
    // 更新状态数据==>调用监视的回调函数 ==> 异步更新界面 ==> 执行$nextTick()指定的回调函数
    categorys () { // categorys的状态更新了
      // 必须在列表数据页面显示之后才创建
      // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
      })
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%

    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px

</style>
