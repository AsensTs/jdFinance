<template>
  <header class="header">
    <div class="app-open-l">
      <div class="app-close">x</div>
      <div class="app-logo"></div>
      <div class="app-desc">
        <p class="desc-up">打开京东金融App</p>
        <p class="desc-down">一站式金融服务平台</p>
      </div>
    </div>
    <btn class="app-btn">立即打开</btn>
  </header>
</template>

<script lang="ts">
import btn from "@/components/core/btn.vue";
export default {
  components: {
    btn
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixin.scss";
.header {
  display: flex;
  height: 50px;
  overflow: hidden;
}
.app-open-l {
  width: 67.5%;
  background: #232227;
  height: 50px;
  display: flex;
  flex-wrap: nowrap;
}
.app-btn {
  width: 32.5%;
  padding: 0;
  border-radius: 0;
  line-height: 50px;
}
.app-close {
  width: 16px;
  margin-left: 2.5%;
  color: #fff;
  line-height: 50px;
}
.app-logo {
  @include img("../../../assets/images/jd_logo");
  background-size: 35px;
  background-position: center;
  width: 35px;
  margin-left: 5%;
  margin-right: 2.5%;
}
.app-desc {
  height: 50px;
  margin-left: 2.5%;
  text-align: left;
  font-size: 12px;
}
.desc-up {
  font-weight: 500;
  color: #fff;
  margin-top: 8px;
}
.desc-down {
  color: #a0a0a0;
  margin-top: 2px;
}
</style>
