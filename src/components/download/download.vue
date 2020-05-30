<template>
  <div :class="$style.download">
    <div :class="$style.downloadtop">
      <btn :class="$style.btn"><p>立即下载</p></btn>
      <p :class="$style.desc">已安装？点这里打开京东金融</p>
    </div>
    <img src="../../assets/images/download-ad.png" />
  </div>
</template>

<script>
import btn from "@/components/core/btn";
export default {
  components: {
    btn
  }
};
</script>

<style lang="scss" module>
.download {
  .downloadtop {
    height: 800px;
    margin: 0 auto;
    background-image: url("../../assets/images/download-bgimg.png");
    background-size: contain;
    .btn {
      width: 400px;
      height: 60px;
      line-height: 60px;
      background-color: #fff;
      color: #000;
      border: none;
      position: relative;
      left: 180px;
      right: 0;
      top: 580px;
      bottom: 0;
    }
    .desc {
      position: relative;
      top: 600px;
      font-size: 12px;
      color: #fff;
      text-align: center;
      text-decoration: underline;
    }
  }
  img {
    width: 100%;
  }
}
</style>
