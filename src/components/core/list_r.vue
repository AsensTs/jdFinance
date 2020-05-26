<template>
  <router-link :to="{ name: item.href }">
    <div class="listTag" v-show="item.tip">{{ item.tip }}</div>
    <div>
      <img :class="imgSize" v-show="item.src" :src="item.src" />
    </div>
    <span class="desc-title">{{ item.title }}</span>
    <slot />
  </router-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    },
    layout: {
      type: String,
      default: ""
    },
    imgSize: {
      type: String,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixin.scss";
.flex {
  @include listlayout();
}
.desc-title {
  display: block;
  height: 35px;
  @include ellipsis_wrap();
}
</style>
