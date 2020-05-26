<template>
  <div>
    <as-slider :swiperSlides="swiperSlides" :cname="slider"></as-slider>
  </div>
</template>

<script>
import asSlider from "../core/slider";

export default {
  name: "swiper",
  data() {
    return {
      slider: "slider",
      swiperSlides: [
        {
          id: 1,
          href: "",
          src: require("@/assets/images/slider/slider1.jpg")
        },
        {
          id: 2,
          href: "",
          src: require("@/assets/images/slider/slider2.jpg")
        }
      ]
    };
  },
  components: {
    asSlider
  }
};
</script>

<style lang="scss">
.slider {
  img {
    width: 100%;
  }
}
</style>
