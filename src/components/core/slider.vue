<template>
  <section :class="cname">
    <swiper :options="swiperOption">
      <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
        <router-link :to="{ name: slide.href }">
          <img :src="slide.src" alt="" />
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "slider",
  props: {
    swiperOption: {
      type: Object,
      default() {
        return {
          autoplay: true,
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          },
          notNextTick: false
        };
      }
    },
    swiperSlides: {
      type: Array,
      default() {
        return [];
      }
    },
    cname: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      ref: "sliderimg",
      imgSize: this.size
    };
  },
  components: {
    Swiper,
    SwiperSlide
  }
};
</script>

<style lang="scss" scoped>
@import "~swiper/css/swiper.css";
@import "@/assets/style/mixin.scss";
</style>
