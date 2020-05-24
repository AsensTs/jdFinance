<template>
  <div>
    <asHeader />
    <asSwiper />
    <asNavList />
    <asProductList />
    <asSmallVault />
  </div>
</template>

<script>
import asHeader from "@/components/header/header";
import asSwiper from "@/components/home/swiper";
import asNavList from "@/components/home/navList";
import asProductList from "@/components/home/productList";
import asSmallVault from "@/components/home/smallVault";

export default {
  components: {
    asHeader,
    asSwiper,
    asNavList,
    asProductList,
    asSmallVault
  }
};
</script>

<style lang="scss" scoped></style>
