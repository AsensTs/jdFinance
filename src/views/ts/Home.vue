<template>
  <div>
    <asHeader />
    <asSwiper />
    <asNavList />
    <asProductList />
  </div>
</template>

<script lang="ts">
import asHeader from "../../components/ts/header/header.vue";
import asSwiper from "@/components/ts/home/swiper.vue";
import asNavList from "@/components/ts/home/navList.vue";
import asProductList from "@/components/home/productList.vue";

export default {
  components: {
    asHeader,
    asSwiper,
    asNavList,
    asProductList
  }
};
</script>

<style lang="scss" scoped></style>
