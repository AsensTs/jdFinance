<template>
  <section>
    <as-panel :title="title">
      <div :class="$style.marBot">
        <img
          src="https://img12.360buyimg.com/n1/s300x300_jfs/t1/80040/40/10768/126848/5d83311eE61e26db4/bc8f655aea591cc1.jpg!q70"
        />
        <div :class="$style.desc">
          <div>
            <span :class="$style.desctag">3期免息</span>
            <span :class="$style.desctext">
              魔妮 原木抽纸300张整箱纸巾母婴用纸 实惠家庭装 18包体验装
            </span>
          </div>
          <div :class="$style.bottom">
            <span>每月</span>
            <span :class="$style.mixMoney">¥</span>
            <span :class="$style.mixPrice">9.96</span>
            <span>总价</span>
            <span :class="$style.mixMoney">¥</span>
            <span :class="$style.mixPrice">29.90</span>
          </div>
        </div>
      </div>
      <div :class="$style.marList">
        <ul>
          <li v-for="item in rowlist2" :key="item.id">
            <as-list
              :item="item"
              :imgSize="$style.imgSize"
              :desctitle="$style.desctitle"
            >
              <p :class="$style.mixPrice">{{ item.price }}</p>
            </as-list>
          </li>
        </ul>
      </div>
    </as-panel>
  </section>
</template>

<script>
import asPanel from "../core/panel.vue";
import asList from "../core/list_r.vue";
export default {
  data() {
    return {
      title: "购物返小金库",
      rowlist2: [
        {
          id: 1,
          title:
            "【买2发3】【3件8折】灭蚊灯家用灭蚊神器室内驱蚊器无味吸捕蚊子婴儿卧室插电蚊香液诱捉蚊虫神器电蚊拍 天眼【买2件同款发3件】【送3C插头】晒图返5元",
          src:
            "https://img12.360buyimg.com/n1/s300x300_jfs/t1/113541/7/4704/149512/5eb00451E7aab1f9d/161547b0e6ecc117.jpg!q70.webp",
          price: "48.80"
        },
        {
          id: 2,
          title:
            "【买2发3】【3件8折】灭蚊灯家用灭蚊神器室内驱蚊器无味吸捕蚊子婴儿卧室插电蚊香液诱捉蚊虫神器电蚊拍 天眼【买2件同款发3件】【送3C插头】晒图返5元",
          src:
            "https://img12.360buyimg.com/n1/s300x300_jfs/t1/113541/7/4704/149512/5eb00451E7aab1f9d/161547b0e6ecc117.jpg!q70.webp",
          price: "48.80"
        },
        {
          id: 3,
          title:
            "【买2发3】【3件8折】灭蚊灯家用灭蚊神器室内驱蚊器无味吸捕蚊子婴儿卧室插电蚊香液诱捉蚊虫神器电蚊拍 天眼【买2件同款发3件】【送3C插头】晒图返5元",
          src:
            "https://img12.360buyimg.com/n1/s300x300_jfs/t1/113541/7/4704/149512/5eb00451E7aab1f9d/161547b0e6ecc117.jpg!q70.webp",
          price: "48.80"
        }
      ]
    };
  },
  components: {
    asPanel,
    asList
  }
};
</script>

<style lang="scss" module>
@import "@/assets/style/mixin.scss";

.marBot {
  height: 188px;
  padding: 16px 0 16px 16px;
  display: flex;
  font-size: 26px;
  img {
    width: 188px;
    height: 188px;
  }
  .desc {
    width: 100%;
    margin-left: 16px;
    padding-right: 32px;
    position: relative;
    .desctag {
      @include tag();
    }
    .bottom {
      position: absolute;
      top: 128px;
      .mixMoney {
        @include price();
      }
      .mixPrice {
        @include price(36px);
      }
    }
  }
}
.marList {
  ul {
    @include listlayout();
  }
  li {
    width: 212px;
    text-align: center;
  }
  .mixPrice {
    @include price(26px);
  }
}
.desctitle {
  height: 2rem;
  @include ellipsis_wrap();
}
.imgSize {
  @include imgSize(212px, 212px);
}
</style>
