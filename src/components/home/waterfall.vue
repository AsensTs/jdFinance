<template>
  <div>
    <div
      :class="$style.waterfall"
      v-for="(items, index) in list"
      :key="index"
      ref="nav"
    >
      <div :class="[$style.nav, { [$style.fixedTop]: fixedTop === true }]">
        <ul :class="$style.ul">
          <li
            v-for="(item, index) in items.title"
            :key="item"
            @click="changeWaterfall(index)"
            :class="[$style.navli, { [$style.active]: showId === index }]"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div :class="$style.content">
        <ul
          v-for="(item, index) in items.productlist"
          :key="item.id"
          @click="changeWaterfall(index)"
          :class="[{ [$style.show]: showId === index }, $style.hidden]"
        >
          <li :class="$style.item" v-for="pd in item.product" :key="pd.id">
            <List :item="pd" :imgSize="$style.imgSize" />
            <div :class="$style.mx">
              <span :class="$style.mxtag">12期免息</span>
            </div>
            <div :class="$style.price">
              <span :class="$style.yan">￥</span>
              <span :class="$style.num">416.62</span>
              <span :class="$style.txt">每月</span>
              <span :class="$style.zytag">自营</span>
            </div>
            <div>
              <span :class="$style.txt">总价</span>
              <span :class="$style.num">￥4999.00</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import List from "../core/list_r";
export default {
  data() {
    return {
      list: [
        {
          title: ["猜你喜欢", "手机", "电脑", "家电", "数码"],
          productlist: [
            {
              product: [
                {
                  id: 11,
                  name: "猜你喜欢",
                  src:
                    "https://img12.360buyimg.com/n1/s300x300_jfs/t1/129924/11/470/237064/5ecdd206Ed122f70b/a5bc556d6bdc84b0.jpg!q70",
                  title:
                    "百变布鲁可积木玩具 布鲁克小队拼插搭建积木儿童拼装大颗粒积木3-6岁男孩女孩儿童节礼物益智玩具 布布百变赛车【拼搭版】"
                },
                {
                  id: 12,
                  name: "猜你喜欢",
                  src:
                    "https://img12.360buyimg.com/n1/s300x300_jfs/t1/129924/11/470/237064/5ecdd206Ed122f70b/a5bc556d6bdc84b0.jpg!q70",
                  title:
                    "百变布鲁可积木玩具 布鲁克小队拼插搭建积木儿童拼装大颗粒积木3-6岁男孩女孩儿童节礼物益智玩具 布布百变赛车【拼搭版】"
                },
                {
                  id: 13,
                  name: "猜你喜欢",
                  src:
                    "https://img12.360buyimg.com/n1/s300x300_jfs/t1/129924/11/470/237064/5ecdd206Ed122f70b/a5bc556d6bdc84b0.jpg!q70",
                  title:
                    "百变布鲁可积木玩具 布鲁克小队拼插搭建积木儿童拼装大颗粒积木3-6岁男孩女孩儿童节礼物益智玩具 布布百变赛车【拼搭版】"
                },
                {
                  id: 14,
                  name: "猜你喜欢",
                  src:
                    "https://img12.360buyimg.com/n1/s300x300_jfs/t1/129924/11/470/237064/5ecdd206Ed122f70b/a5bc556d6bdc84b0.jpg!q70",
                  title:
                    "百变布鲁可积木玩具 布鲁克小队拼插搭建积木儿童拼装大颗粒积木3-6岁男孩女孩儿童节礼物益智玩具 布布百变赛车【拼搭版】"
                },
                {
                  id: 15,
                  name: "猜你喜欢",
                  src:
                    "https://img12.360buyimg.com/n1/s300x300_jfs/t1/129924/11/470/237064/5ecdd206Ed122f70b/a5bc556d6bdc84b0.jpg!q70",
                  title:
                    "百变布鲁可积木玩具 布鲁克小队拼插搭建积木儿童拼装大颗粒积木3-6岁男孩女孩儿童节礼物益智玩具 布布百变赛车【拼搭版】"
                },
                {
                  id: 16,
                  name: "猜你喜欢",
                  src:
                    "https://img12.360buyimg.com/n1/s300x300_jfs/t1/129924/11/470/237064/5ecdd206Ed122f70b/a5bc556d6bdc84b0.jpg!q70",
                  title:
                    "百变布鲁可积木玩具 布鲁克小队拼插搭建积木儿童拼装大颗粒积木3-6岁男孩女孩儿童节礼物益智玩具 布布百变赛车【拼搭版】"
                }
              ]
            },
            {
              product: [
                {
                  id: 21,
                  name: "手机",
                  src:
                    "https://img12.360buyimg.com/n1/s300x300_jfs/t1/111981/5/8249/91124/5ecbe2cfE52a96716/b7bea7af48e935fd.jpg!q70",
                  title:
                    "荣耀30S 麒麟820 5G芯片 3倍光学变焦 20倍数字变焦 全网通版8GB+128GB 幻夜黑 "
                },
                {
                  id: 22,
                  name: "手机",
                  src:
                    "https://img12.360buyimg.com/n1/s300x300_jfs/t1/111981/5/8249/91124/5ecbe2cfE52a96716/b7bea7af48e935fd.jpg!q70",
                  title:
                    "荣耀30S 麒麟820 5G芯片 3倍光学变焦 20倍数字变焦 全网通版8GB+128GB 幻夜黑 "
                },
                {
                  id: 23,
                  name: "手机",
                  src:
                    "https://img12.360buyimg.com/n1/s300x300_jfs/t1/111981/5/8249/91124/5ecbe2cfE52a96716/b7bea7af48e935fd.jpg!q70",
                  title:
                    "荣耀30S 麒麟820 5G芯片 3倍光学变焦 20倍数字变焦 全网通版8GB+128GB 幻夜黑 "
                },
                {
                  id: 24,
                  name: "手机",
                  src:
                    "https://img12.360buyimg.com/n1/s300x300_jfs/t1/111981/5/8249/91124/5ecbe2cfE52a96716/b7bea7af48e935fd.jpg!q70",
                  title:
                    "荣耀30S 麒麟820 5G芯片 3倍光学变焦 20倍数字变焦 全网通版8GB+128GB 幻夜黑 "
                },
                {
                  id: 25,
                  name: "手机",
                  src:
                    "https://img12.360buyimg.com/n1/s300x300_jfs/t1/111981/5/8249/91124/5ecbe2cfE52a96716/b7bea7af48e935fd.jpg!q70",
                  title:
                    "荣耀30S 麒麟820 5G芯片 3倍光学变焦 20倍数字变焦 全网通版8GB+128GB 幻夜黑 "
                },
                {
                  id: 26,
                  name: "手机",
                  src:
                    "https://img12.360buyimg.com/n1/s300x300_jfs/t1/111981/5/8249/91124/5ecbe2cfE52a96716/b7bea7af48e935fd.jpg!q70",
                  title:
                    "荣耀30S 麒麟820 5G芯片 3倍光学变焦 20倍数字变焦 全网通版8GB+128GB 幻夜黑 "
                }
              ]
            },
            {
              product: [
                {
                  id: 33,
                  name: "电脑",
                  src:
                    "https://img12.360buyimg.com/n1/s300x300_jfs/t1/91354/29/19322/533737/5e9e5383E03c68b14/8b9edae184bc6e12.jpg!q70",
                  title:
                    "玩家国度(ROG)  ROG STRIX TRX40-XE GAMING主板 支持cpu 锐龙3960X/3970X/3990X(AMD TRX40/socket sTRX4)"
                },
                {
                  id: 34,
                  name: "电脑",
                  src:
                    "https://img12.360buyimg.com/n1/s300x300_jfs/t1/91354/29/19322/533737/5e9e5383E03c68b14/8b9edae184bc6e12.jpg!q70",
                  title:
                    "玩家国度(ROG)  ROG STRIX TRX40-XE GAMING主板 支持cpu 锐龙3960X/3970X/3990X(AMD TRX40/socket sTRX4)"
                }
              ]
            },
            {
              product: [
                {
                  id: 44,
                  name: "家电",
                  src:
                    "https://img12.360buyimg.com/n1/s300x300_jfs/t1/116012/10/7619/197225/5ec54072E751581e5/520529d39bc26fa5.jpg!q70",
                  title:
                    "LG 628升 大容量对开门冰箱 门中门 线性变频风冷无霜智能存鲜系统 亚金色 GR-M2473JVY"
                },
                {
                  id: 45,
                  name: "家电",
                  src:
                    "https://img12.360buyimg.com/n1/s300x300_jfs/t1/116012/10/7619/197225/5ec54072E751581e5/520529d39bc26fa5.jpg!q70",
                  title:
                    "LG 628升 大容量对开门冰箱 门中门 线性变频风冷无霜智能存鲜系统 亚金色 GR-M2473JVY"
                }
              ]
            },
            {
              product: [
                {
                  id: 55,
                  name: "数码",
                  src:
                    "https://img12.360buyimg.com/n1/s300x300_jfs/t1/118477/7/6343/309742/5eb9f955E0cd1de44/a4f875644cdc9270.jpg!q70",
                  title:
                    "索尼（SONY）ILCE-6100L A6100L APS-C画幅微单数码相机 标准镜头套装 Vlog自拍视频 银色(alpha 6100)"
                },
                {
                  id: 56,
                  name: "数码",
                  src:
                    "https://img12.360buyimg.com/n1/s300x300_jfs/t1/118477/7/6343/309742/5eb9f955E0cd1de44/a4f875644cdc9270.jpg!q70",
                  title:
                    "索尼（SONY）ILCE-6100L A6100L APS-C画幅微单数码相机 标准镜头套装 Vlog自拍视频 银色(alpha 6100)"
                }
              ]
            }
          ]
        }
      ],
      showId: 0,
      fixedTop: false
    };
  },
  mounted() {
    const o = this.$refs.nav;
    this.touchmoveonhandle(o);
  },
  methods: {
    changeWaterfall(index) {
      this.showId = index;
    },
    touchmoveonhandle(o) {
      window.addEventListener("scroll", () => {
        const offsetTop = o[0].offsetTop;
        const scrollTop =
          document.documentElement.scrollTop ||
          window.pageYOffset ||
          document.body.scrollTop;
        if (offsetTop <= scrollTop) {
          this.fixedTop = true;
        } else {
          this.fixedTop = false;
        }
      });
    }
  },
  components: {
    List
  }
};
</script>

<style lang="scss" module>
@import "@/assets/style/mixin.scss";
.waterfall {
  .nav {
    background: #fff;
    .ul {
      @include list(row);
      justify-content: space-around;
      .navli {
        height: 120px;
        line-height: 120px;
      }
    }
  }
  .fixedTop {
    width: 100%;
    position: fixed;
    top: 0;
  }
  .content {
    ul {
      .item {
        padding: 18px;
        width: 330px;
        span {
          font-size: 26px;
          margin-top: 20px;
        }
        .imgSize {
          width: 330px;
        }
        .mx {
          margin-top: 20px;
          .mxtag {
            @include tag();
          }
        }
        .price {
          margin-top: 20px;
          .num,
          .yan,
          .zytag {
            color: $red;
          }
          .num {
            font-size: 32px;
            font-weight: bold;
          }
          .zytag {
            border: 1px solid $red;
            border-radius: 5px;
            margin-left: 5px;
            padding: 0 6px;
          }
        }
      }
    }
  }
}
.active {
  display: block;
  font-size: 42px;
  font-weight: bold;
  color: #000;
}
.hidden {
  display: none;
}
.show {
  @include list(row);
}
</style>
