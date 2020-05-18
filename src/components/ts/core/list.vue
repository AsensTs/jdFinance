<template>
  <section>
    <ul :class="layout">
      <li v-for="item in itemList" :key="item.id">
        <router-link :to="{ name: item.href }">
          <div>
            <img ref="imgSize" v-if="item.src" :src="item.src" />
          </div>
          <span class="desc-title">{{ item.title }}</span>
          <span class="desc-instalment"></span>
          <span class="desc-Total"></span>
          <slot />
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { ref, onMounted } from "@vue/composition-api";

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
  setup(props) {
    const imgSize = ref(null);
    onMounted(() => {
      imgSize.value.forEach(item => {
        item.style.width = props.size.width;
        item.style.height = props.size.height;
      });
    });
    return {
      imgSize
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixin.scss";
.flex {
  @include listlayout();
  @include listItem();
}
</style>
