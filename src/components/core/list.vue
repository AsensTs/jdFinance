<template>
  <section>
    <ul :class="layout">
      <li v-for="item in itemList" :key="item.id">
        <router-link :to="{ name: item.href }">
          <div class="tag" v-show="item.tip">{{ item.tip }}</div>
          <div>
            <img ref="img" v-show="item.src" :src="item.src" />
          </div>
          <span class="desc-title">{{ item.title }}</span>
          <span class="price red" v-show="item.price">{{ item.price }}</span>
          <span class="desc2" v-show="item.desc2">{{ item.desc2 }}</span>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    itemList: {
      type: Array,
      default() {
        return [];
      }
    },
    layout: {
      type: String,
      default: ""
    },
    size: {
      type: Object,
      default() {
        return {
          height: "",
          width: ""
        };
      }
    }
  },
  data() {
    return {
      imgSize: this.size
    };
  },
  mounted() {
    const imgSize = this.$refs.img;
    imgSize.forEach(item => {
      item.style.width = this.imgSize.width;
      item.style.height = this.imgSize.height;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixin.scss";
.flex {
  @include listlayout();
  @include listItem();
}
.price {
  color: #ef4034;
  font-size: 16px;
  font-weight: bold;
}
</style>
