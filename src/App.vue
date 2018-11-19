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

  //做异步请求的处理操作 外卖首页Msite
  created() {
    this.$store.dispatch('getAddress')
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    color red
</style>
