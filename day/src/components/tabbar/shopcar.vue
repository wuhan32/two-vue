<template>
  <div>
    <div class="shopcar-container">
      <div class="goods-list">
        <!-- 商品列表项区域 -->
        <div class="mui-card" v-for="item in goodslist" :key="item.id">
          <div class="mui-card-content">
            <div class="mui-card-content-inner">
              <mt-switch></mt-switch>
              <img :src="item.thumb_path" />
              <div class="info">
                <h1>{{ item.title }}</h1>
                <p>
                  <span class="price">￥{{ item.sell_price }}</span>
                  <numbox></numbox>
                  <a href="#">删除</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 结算区域 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner jiesuan">
            <div class="left">
              <p>总计（不含运费）</p>
              <p>
                已勾选商品
                <span class="red"></span> 件， 总价
                <span class="red"></span>
              </p>
            </div>
            <mt-button type="danger">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from "../subcomponent/goodsInfo_num.vue";
export default {
  data() {
    return {
      goodslist: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      let idArr = [];
      this.$store.state.car.forEach(item => {
        idArr.push(item.id);
        if (idArr.length <= 0) {
          return;
        }
      });

      this.$http
        .get("api/goods/getshopcarlist/" + idArr.join(","))
        .then(result => {
          if (result.body.status === 0) {
            this.goodslist = result.body.message;
          }
        });
    }
  },
  components: {
    numbox
  }
};
</script>

<style  scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
}
.mui-card-content-inner {
  display: flex;
  align-items: center;
  padding: 10px;
}

/* 按钮 */
.mint-switch-core {
  width: 45px;
  height: 25px;
}
.mint-switch-core ::before {
  width: 23px;
  height: 24px;
}
.mint-switch-core ::after {
  width: 23px;
  height: 23px;
}

img {
  width: 100px;
  margin-bottom: 12px;
}
h1 {
  font-size: 13px;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.price {
  color: red;
  font-weight: bold;
}

.jiesuan {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.red {
  color: red;
  font-weight: bold;
  font-size: 16px;
}

.mui-card {
  margin: 8px;
}
</style>