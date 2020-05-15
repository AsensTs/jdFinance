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
          src:
            "https://img20.360buyimg.com/mcpageview/jfs/t1/106678/1/12210/92914/5e4535daE1770d4c3/30137746303353c1.jpg",
          imgSizeClass: "swiper-img-size"
        },
        {
          id: 2,
          href: "",
          src:
            "https://img20.360buyimg.com/mcpageview/jfs/t1/93607/27/9768/38387/5e11d688E04270824/2d9495f7de2365ca.jpg",
          imgSizeClass: "swiper-img-size"
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
