<template>
  <div :class="$style.licai">
    <Header></Header>
    <Slider :swiperSlides="swiperSlides" :imgSize="$style.imgSize"></Slider>
    <div :class="$style.manjian">
      <img :class="$style.manjianImg" src="../../assets/images/manjian.jpg" />
    </div>
    <Recommend />
    <Nav />
    <div class="clear"></div>
  </div>
</template>

<script>
import Header from "../header/header";
import Slider from "../core/slider";
import Recommend from "./recommend";
import Nav from "../nav/nav";
export default {
  data() {
    return {
      swiperSlides: [
        {
          id: 1,
          href: "",
          src: require("@/assets/images/slider/slider-licai-1.png")
        },
        {
          id: 2,
          href: "",
          src: require("@/assets/images/slider/slider-licai-2.png")
        }
      ]
    };
  },
  components: {
    Header,
    Slider,
    Recommend,
    Nav
  }
};
</script>

<style lang="scss" module>
.licai {
  .manjian {
    text-align: center;
    .manjianImg {
      width: 100%;
    }
  }
}
.imgSize {
  width: 100%;
  height: 300px;
}
</style>
