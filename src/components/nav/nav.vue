<template>
  <panel :class="$style.panel">
    <ul>
      <li v-for="item in list" :key="item.title">
        <router-link :to="{ name: item.link }">
          <img :class="$style.img" :src="item.src" />
          <p :class="$style.title">{{ item.title }}</p>
        </router-link>
      </li>
    </ul>
  </panel>
</template>

<script>
import Panel from "../core/panel";
export default {
  data() {
    return {
      list: [
        {
          title: "首页",
          link: "Home",
          src: require("../../assets/images/icons/home.png")
        },
        {
          title: "理财",
          link: "licai",
          src: require("../../assets/images/icons/money.png")
        },
        {
          title: "白条",
          link: "baitiao",
          src: require("../../assets/images/icons/oip.png")
        },
        {
          title: "众筹",
          link: "zhongchou",
          src: require("../../assets/images/icons/shan.png")
        },
        {
          title: "我的",
          link: "mine",
          src: require("../../assets/images/icons/mine.png")
        }
      ]
    };
  },
  components: {
    Panel
  }
};
</script>

<style lang="scss" module>
@import "@/assets/style/mixin.scss";
.panel {
  position: fixed;
  bottom: 0;
  width: 100%;
  & > h4 {
    display: none;
  }
  ul {
    @include list(row);
    justify-content: space-around;
    li {
      padding: 20px 0 15px 0;
      text-align: center;
      img {
        width: 50px;
      }
    }
  }
}
</style>
