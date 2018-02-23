<template>
  <div class="main">
    <swiper class="swiper-img" :options="swiperOption" ref="mySwiper" @click="slideTarget">
      <!-- slides -->
      <swiper-slide>
        <img href="/gift" src="../assets/images/0.gif">
      </swiper-slide>
      <swiper-slide>
        <img href="/market" src="../assets/images/1.jpg">
      </swiper-slide>
      <swiper-slide>
        <img href="/forum" src="../assets/images/2.gif">
      </swiper-slide>
      <swiper-slide>
        <img href="/user" src="../assets/images/3.jpg">
      </swiper-slide>
      <swiper-slide>
        <img href="/" src="../assets/images/4.gif">
      </swiper-slide>
      <swiper-slide>
        <img href="/" src="../assets/images/5.gif">
      </swiper-slide>
      <swiper-slide>
        <img href="/" src="../assets/images/6.gif">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet (index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom">${index + 1}</span>`
          }
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted () {
    this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    // slide点击事件
    slideTarget (obj) {
      let href = obj.target.attributes.href && obj.target.attributes.href.nodeValue ? obj.target.attributes.href.nodeValue : ''
      if (href) {
        this.$router.push({
          path: href
        })
      }
    }
  }
}
</script>

<style>
.swiper-img img{
  width: 100%;
  height: 4.693333rem;
}
 .swiper-pagination-bullet-custom {
    width: 0.48rem;
    height: 0.48rem;
    text-align: center;
    line-height: 0.48rem;
    font-size: 0.32rem;
    color: #000;
    opacity: 1;
    background: rgba(0,0,0,0.2);
  }
  .swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
    color: #fff;
    background: #007aff;
  }
</style>
