<template>
  <div>
    <asHeader />
    <asSwiper />
    <asNavList />
  </div>
</template>

<script>
import asHeader from "../components/header/header";
import asSwiper from "../components/home/swiper";
import asNavList from "../components/home/navList";

export default {
  components: {
    asHeader,
    asSwiper,
    asNavList
  }
};
</script>

<style lang="scss" scoped></style>
