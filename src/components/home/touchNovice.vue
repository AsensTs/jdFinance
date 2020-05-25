<template>
  <Panel title="新手特权" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item">
        <h4>下载APP<span :class="$style.red">送888元礼包</span></h4>
        <p>新手专享</p>
        <img src="../../assets/images/lihe.png" alt="礼盒" />
      </div>
      <div :class="$style.item">
        <ul>
          <li :class="$style.li">
            <h4 :class="$style.red">领128新手大礼包</h4>
            <p>立即开通</p>
          </li>
          <li :class="$style.li">
            <h4>打白条<span :class="$style.red">享免息</span></h4>
            <p>立即开通享豪礼</p>
          </li>
        </ul>
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from "../core/panel";

export default {
  components: {
    Panel
  }
};
</script>

<style lang="scss" module>
@import "@/assets/style/mixin.scss";

.panel {
  @include panel;
  > h4 {
    border-bottom: 1px solid #eee;
  }
  .content {
    @include list(row);
    .item {
      width: 50%;
      text-align: center;
      box-sizing: border-box;
      &:first-child {
        padding: 32px 20px;
        img {
          width: 30%;
        }
      }
    }
  }
}
.red {
  color: $red;
}
</style>
