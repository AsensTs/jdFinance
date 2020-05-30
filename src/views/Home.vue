<template>
  <div>
    <asHeader />
    <asSwiper />
    <asNavList />
    <asTouchNovice />
    <asProductList />
    <asSmallVault />
    <asWaterfall />
  </div>
</template>

<script>
import asHeader from "@/components/header/header";
import asSwiper from "@/components/home/swiper";
import asNavList from "@/components/home/navList";
import asProductList from "@/components/home/productList";
import asSmallVault from "@/components/home/smallVault";
import asTouchNovice from "@/components/home/touchNovice";
import asWaterfall from "@/components/home/waterfall";

export default {
  components: {
    asHeader,
    asSwiper,
    asNavList,
    asProductList,
    asSmallVault,
    asTouchNovice,
    asWaterfall
  }
};
</script>

<style lang="scss" scoped></style>
