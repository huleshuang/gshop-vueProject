<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  components: {
    FooterGuide
  },

  //做异步请求的处理操作 外卖首页Msite 一上来就加载
  created() {
    //获取异步address
    this.$store.dispatch('getAddress')

    //异步获取登录用户信息
    this.$store.dispatch('getUserInfo')
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    color red
</style>
