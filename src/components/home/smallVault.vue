<template>
  <section>
    <as-panel :title="title">
      <div class="gylCardRowNew-marBot1">
        <img
          src="https://img12.360buyimg.com/n1/s300x300_jfs/t1/80040/40/10768/126848/5d83311eE61e26db4/bc8f655aea591cc1.jpg!q70"
        />
        <div class="marBot1-desc">
          <div class="marBot1-desc-top">
            <span class="tag">3期免息</span>
            <span class="gylCardRowNew-text">
              魔妮 原木抽纸300张整箱纸巾母婴用纸 实惠家庭装 18包体验装
            </span>
          </div>
          <div class="marBot1-desc-bottom">
            <span>每月</span>
            <span class="mix-child-money">¥</span>
            <span class="mix-child-price">9.96</span>
            <span>总价</span>
            <span class="mix-child-money">¥</span>
            <span class="mix-child-price">29.90</span>
          </div>
        </div>
      </div>
      <div class="gylCardRowNew-marBot2">
        <ul class="marBot2-ul">
          <li class="marBot2-li" v-for="item in rowlist2" :key="item.id">
            <as-list :item="item">
              <p class="min-child-price">{{ item.price }}</p>
            </as-list>
          </li>
        </ul>
      </div>
    </as-panel>
  </section>
</template>

<script>
import asPanel from ".././core/panel.vue";
import asList from ".././core/list_r.vue";
export default {
  data() {
    return {
      title: "购物返小金库",
      rowlist1: [],
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

<style lang="scss">
@import "@/assets/style/mixin.scss";

.gylCardRowNew-marBot1 {
  height: 94px;
  padding: 8px 0 8px 8px;
  display: flex;
  font-size: 13px;
}
.gylCardRowNew-marBot1 img {
  width: 94px;
  height: 94px;
}
.marBot1-desc {
  width: 100%;
  margin-left: 8px;
  padding-right: 16px;
  position: relative;
}
.marBot1-desc .tag {
  @include tag();
}
.marBot1-desc-bottom {
  position: absolute;
  top: 64px;
}
.mix-child-money,
.mix-child-price {
  @include price();
}
.mix-child-price {
  @include price(18px);
}
.marBot2-ul {
  @include listlayout();
}
.marBot2-li {
  width: 106px;
  text-align: center;
}
.min-child-price {
  @include price(13px);
}
</style>
