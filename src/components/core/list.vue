<template>
  <section>
    <ul :class="layoutcss">
      <li v-for="item in itemList" :key="item.id">
        <router-link :to="{ name: item.href }">
          <div>
            <img ref="img" v-if="item.src" :src="item.src" />
          </div>
          <p>{{ item.title }}</p>
          <slot />
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
    layoutcss: {
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
      item.style.width = this.imgSize.width + "px";
      item.style.height = this.imgSize.height + "px";
    });
  }
};
</script>

<style lang="scss" scoped>
.flex {
  @include listlayout();
  @include listItem();
}
</style>
