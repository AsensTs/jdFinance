<template>
  <div>
    <as-list
      v-for="item in list"
      :key="item"
      :itemList="item.navlist"
      :layoutcss="layout"
      :size="imgSize"
    ></as-list>
  </div>
</template>

<script>
import asList from "../core/list";

export default {
  data() {
    return {
      list: [
        {
          navlist: [
            {
              id: 1,
              title: "优惠券",
              href: "home",
              src: require("@/assets/images/nav/1.png")
            },
            {
              id: 2,
              title: "领钢镚",
              href: "home",
              src: require("@/assets/images/nav/2.png")
            },
            {
              id: 3,
              title: "白条提额",
              href: "home",
              src: require("@/assets/images/nav/3.png")
            },
            {
              id: 4,
              title: "领京豆",
              href: "home",
              src: require("@/assets/images/nav/4.png")
            }
          ]
        },
        {
          navlist: [
            {
              id: 5,
              title: "工资理财",
              href: "home",
              src: require("@/assets/images/nav/5.png")
            },
            {
              id: 6,
              title: "京东众筹",
              href: "home",
              src: require("@/assets/images/nav/6.png")
            },
            {
              id: 7,
              title: "1元扭蛋机",
              href: "home",
              src: require("@/assets/images/nav/7.png")
            },
            {
              id: 8,
              title: "免息红包",
              href: "home",
              src: require("@/assets/images/nav/8.png")
            }
          ]
        }
      ],
      layout: "flex",
      imgSize: {
        width: 45,
        height: 45
      }
    };
  },
  components: {
    asList
  }
};
</script>

<style lang="scss" scoped></style>
