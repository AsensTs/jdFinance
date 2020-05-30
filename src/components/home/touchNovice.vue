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
            <img src="../../assets/images/lihe.png" alt="礼盒" />
            <h4 :class="$style.red">领128新手大礼包</h4>
            <p>立即开通</p>
          </li>
          <li :class="$style.li">
            <img src="../../assets/images/lihe.png" alt="礼盒" />
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
    h4 {
      font-size: 32px;
    }
    h4,
    p,
    span {
      font-weight: bold;
    }
    p {
      color: #999;
      font-size: 26px;
    }
    .item {
      width: 50%;
      text-align: center;
      box-sizing: border-box;
      border: 1px solid #eee;
      &:first-child {
        padding: 32px 20px;
        p {
          padding: 16px 0;
        }
        img {
          width: 42%;
        }
      }
      &:nth-child(2) {
        li {
          height: 100px;
          padding: 32px 10px;
          &:first-child {
            border-bottom: 1px solid #eee;
          }
          h4,
          p {
            width: 230px;
            @include ellipsis();
          }
          img {
            width: 100px;
            float: right;
          }
        }
        p {
          padding: 8px 0;
        }
      }
    }
  }
}
.red {
  color: $red;
}
</style>
