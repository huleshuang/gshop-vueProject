<template>
  <div class="star" :class="'star-'+size">  <!--五个类名 数组  遍历-->
    <span class="star-item" v-for="(sc, index) in starClasses" :key="index" :class="sc"></span>
  </div>
</template>

<script>
  export default {
    props: {
      size: Number, //24 36 48
      score: Number //分数 ：五个星星 五分以内
    },

    computed: {
      starClasses () {
        const {score} = this //获取分数
        const scoreInteger = Math.floor(score) //向下取整
        const scs = [] //定义一个数组 用来保存添加类名

        // 向scs添加on，看评分整数部分是几个（这里是五个），在此条件下那么就添加on
        for (let i = 0; i < scoreInteger; i++) {
          scs.push('on')
        }
        // 向scs添加half 这里有误差  所以分别乘以10
        // if(score-scoreInteger>=0.5) {
        //   scs.push('half')
        // }
        if(score*10-scoreInteger*10>=5) {
          scs.push('half')
        }

        // 向scs添加off
        while (scs.length<5) {
          scs.push('off')
        }

        return scs //最终返回数组
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')
</style>
