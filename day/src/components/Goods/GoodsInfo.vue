<template>
  <div>
    <div class="goodsinfo-container">
      <!-- 商品轮播图区域 -->
      <div class="particularsLb">
        <swiper :lunbolist="lunbotu" :isfull="false"></swiper>
      </div>
      <!-- 商品购买区域 -->
      <div class="mui-card">
        <div class="mui-card-header">商品的名称标题</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <div>
              <p class="price">
                市场价：
                <del>￥2399</del>&nbsp;&nbsp;
                销售价：
                <span class="now_price">￥1999</span>
              </p>
              <p class="buyNum">
                <span>购买数量：</span>
                <numberbox></numberbox>
              </p>
              <p>
                <mt-button type="primary" size="small">立即购买</mt-button>
                <mt-button type="danger" size="small" @click="xiaoqiu">加入购物车</mt-button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 商品参数区域 -->
      <div class="mui-card">
        <div class="mui-card-header">商品参数</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p>商品货号：{{ goodsInfo.goods_no }}</p>
            <p>库存情况：{{ goodsInfo.stock_quantity }}</p>
            <p>上架时间： {{ goodsInfo.add_time | dateFormat }}</p>
          </div>
        </div>
        <div class="buttOne">
          <mt-button type="primary" size="large" class="mt-buttonOne" plain @click="goDesc(id)">图文介绍</mt-button>
          <mt-button
            type="danger"
            size="large"
            class="mt-buttontWO"
            plain
            @click="goComment(id)"
          >商品评论</mt-button>
        </div>
      </div>
      <!-- 小球 -->
      <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <div class="ballMin" v-if="flag" ref="ball"></div>
      </transition>
    </div>
  </div>
</template>


<script>
import swiper from "../subcomponent/swiper.vue";
import numberbox from "../subcomponent/goodsInfo_num.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      lunbotu: [],
      goodsInfo: {},
      flag: false
    };
  },

  created() {
    this.getLunbo();
    this.getGoodsInfo();
  },
  methods: {
    getLunbo() {
      this.$http.get("api/getthumimages/" + this.id).then(res => {
        if (res.body.status === 0) {
          res.body.message.forEach(item => {
            item.img = item.src;
          });
          this.lunbotu = res.body.message;

          console.log(res.body);
        }
      });
    },
    getGoodsInfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(res => {
        if (res.data.status === 0) {
          this.goodsInfo = res.data.message[0];
          console.log(this.goodsInfo);
        }
      });
    },
    goDesc(id) {
      this.$router.push({ name: "goodsdesc", params: { id } });
    },
    goComment(id) {
      this.$router.push({ name: "goodscomment", params: { id } });
    },
    xiaoqiu() {
      this.flag = !this.flag;
    },
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      el.offsetWidth;
      const ballQ = this.$refs.ball.getBoundingClientRect();
      const ballNum = document.getElementById("badge").getBoundingClientRect();
      const ballx = ballNum.left - ballQ.left;
      const bally = ballNum.top - ballQ.top;

      el.style.transform = `translate( ${ballx}px,${ bally }px)`;
      el.style.transition = "all 1s ease";
      done();
    },
    afterEnter(el) {
      this.flag = !this.flag;
    }
  },
  components: {
    swiper,
    numberbox
  }
};
</script>


<style scoped>
.particularsLb {
  background-color: #fff;
}
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
  margin: 0;
}
.goodsinfo-container .now_price {
  color: red;
  font-size: 16px;
  font-weight: bold;
}
.mui-card-footer {
  display: none;
}
.mui-card-footer button {
  margin: 15px 0;
}
.buttOne {
  margin-bottom: 50px;
}
.mt-buttonOne {
  margin: 5px 0;
}
.buyNum {
  display: flex;
}
.buyNum span {
  line-height: 32px;
}
.ballMin {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  top: 349px;
  left: 148px;
  z-index: 909;
  /* transform: translate(100px,100px); */
}
</style>