<template>
  <div>
    <as-slider :swiperSlides="swiperSlides"></as-slider>
  </div>
</template>

<script>
import asSlider from "../core/slider";

export default {
  name: "swiper",
  data() {
    return {
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

<style lang="scss" scoped></style>
