<template>
  <router-link :to="{ name: item.href }">
    <div>
      <img :class="imgSize" v-show="item.src" :src="item.src" />
    </div>
    <span :class="desctitle">{{ item.title }}</span>
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
    imgSize: {
      type: String,
      default() {
        return "";
      }
    },
    desctitle: {
      type: String,
      default() {
        return "";
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
