<template>
  <header class="header" v-if="closeFlag">
    <div class="app-open-l">
      <div class="app-close" @click="close">x</div>
      <div class="app-logo"></div>
      <div class="app-desc">
        <p class="desc-up">打开京东金融App</p>
        <p class="desc-down">一站式金融服务平台</p>
      </div>
    </div>
    <btn class="app-btn">
      <router-link class="app-link" :to="{ name: 'Download' }">
        立即打开
      </router-link>
    </btn>
  </header>
</template>

<script>
import btn from "../core/btn.vue";

export default {
  data() {
    return {
      closeFlag: true
    };
  },
  methods: {
    close() {
      this.closeFlag = false;
    }
  },
  components: {
    btn
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixin.scss";
.header {
  display: flex;
  height: 100px;
  overflow: hidden;
}
.app-open-l {
  width: 67.5%;
  background: #232227;
  height: 100px;
  display: flex;
  flex-wrap: nowrap;
}
.app-btn {
  width: 32.5%;
  padding: 0;
  border-radius: 0;
  line-height: 100px;
  .app-link {
    color: #fff;
    font-size: 14px;
  }
}
.app-close {
  width: 32px;
  margin-left: 2.5%;
  color: #fff;
  line-height: 100px;
}
.app-logo {
  @include img("../../assets/images/jd_logo");
  background-size: 70px;
  background-position: center;
  width: 70px;
  margin-left: 5%;
  margin-right: 2.5%;
}
.app-desc {
  height: 100px;
  margin-left: 2.5%;
  text-align: left;
  font-size: 24px;
}
.desc-up {
  font-weight: 500;
  color: #fff;
  margin-top: 16px;
}
.desc-down {
  color: #a0a0a0;
  margin-top: 4px;
}
</style>
