<template>
  <div :class="[btnClass, cname]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    cname: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      btnClass: "btn"
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/style/mixin.scss";
.btn {
  @include btn;
}
</style>
