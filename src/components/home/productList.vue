<template>
  <div class="product-list">
    <as-panel :title="title">
      <as-list :itemList="list"></as-list>
    </as-panel>
  </div>
</template>

<script>
import asPanel from "../core/panel";
import asList from "../core/list";

export default {
  data() {
    return {
      title: "精选免息",
      list: [
        {
          id: 11,
          title:
            "华为 HUAWEI Mate 30 5G 麒麟990 4000万超感光徕卡影像双超级快充8GB+256GB亮黑色5G全网通游戏手机",
          href: "home",
          src:
            "https://img12.360buyimg.com/n1/s300x300_jfs/t1/61692/22/14579/168609/5dbe8723Eb2587932/8c464c4b72238166.jpg",
          tip: "24期免息",
          price: "¥ 2860"
        },
        {
          id: 12,
          title:
            "华为 HUAWEI Mate 30 5G 麒麟990 4000万超感光徕卡影像双超级快充8GB+256GB亮黑色5G全网通游戏手机",
          href: "home",
          src:
            "https://img12.360buyimg.com/n1/s300x300_jfs/t1/113550/5/6860/155276/5ebd1f4eEf736ac0a/7169944c4d0d6669.jpg",
          tip: "24期免息",
          price: "¥ 2860"
        },
        {
          id: 13,
          title:
            "华为 HUAWEI Mate 30 5G 麒麟990 4000万超感光徕卡影像双超级快充8GB+256GB亮黑色5G全网通游戏手机",
          href: "home",
          src:
            "https://img12.360buyimg.com/n1/s300x300_jfs/t1/113550/5/6860/155276/5ebd1f4eEf736ac0a/7169944c4d0d6669.jpg",
          tip: "24期免息",
          price: "¥ 2860"
        },
        {
          id: 14,
          title:
            "华为 HUAWEI Mate 30 5G 麒麟990 4000万超感光徕卡影像双超级快充8GB+256GB亮黑色5G全网通游戏手机",
          href: "home",
          src:
            "https://img12.360buyimg.com/n1/s300x300_jfs/t1/113550/5/6860/155276/5ebd1f4eEf736ac0a/7169944c4d0d6669.jpg",
          tip: "24期免息",
          price: "¥ 2860"
        },
        {
          id: 15,
          title:
            "华为 HUAWEI Mate 30 5G 麒麟990 4000万超感光徕卡影像双超级快充8GB+256GB亮黑色5G全网通游戏手机",
          href: "home",
          src:
            "https://img12.360buyimg.com/n1/s300x300_jfs/t1/113550/5/6860/155276/5ebd1f4eEf736ac0a/7169944c4d0d6669.jpg",
          tip: "24期免息",
          price: "¥ 2860"
        },
        {
          id: 16,
          title:
            "华为 HUAWEI Mate 30 5G 麒麟990 4000万超感光徕卡影像双超级快充8GB+256GB亮黑色5G全网通游戏手机",
          href: "home",
          src:
            "https://img12.360buyimg.com/n1/s300x300_jfs/t1/113550/5/6860/155276/5ebd1f4eEf736ac0a/7169944c4d0d6669.jpg",
          tip: "24期免息",
          price: "¥ 2860"
        }
      ]
    };
  },
  components: {
    asList,
    asPanel
  }
};
</script>

<style lang="scss">
@import "@/assets/style/mixin.scss";

.product-list {
  ul {
    @include list(row);
  }
  li {
    width: 245px;
    padding: 10px;
    box-sizing: border-box;
  }
  .desc-title {
    display: block;
    height: 35px;
    overflow: hidden;
    padding: 0 10px;
  }
  .tag {
    position: absolute;
    @include tag();
  }
  img {
    width: 200px;
  }
  .price {
    font-size: 32px;
  }
}
</style>
