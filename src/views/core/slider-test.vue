<template>
  <section :class="cname">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="slide in swiperSlides"
        :key="slide.href"
      >
        <router-link :to="{name: slide.href}">
          <img :src="slide.src" alt="">
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  props: {
    swiperOption: {
      type: Object,
      default() {
        return {
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          },
          notNextTick: false
        }
      }
    },
    swiperSlides: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss">
@import '~swiper/dist/css/swiper.css';
</style>