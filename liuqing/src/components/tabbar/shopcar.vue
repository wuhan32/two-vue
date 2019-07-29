<template>
  <div>
    <div class="shopcar-container">
      <div class="goods-list">
        <!-- 商品列表项区域 -->
        <div class="mui-card" v-for="(item,index) in goodslist" :key="item.id">
          <div class="mui-card-content">
            <div class="mui-card-content-inner">
              <mt-switch v-model="$store.getters.getGoodsSelected[item.id]"
                @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"
              ></mt-switch>
              <img :src="item.thumb_path" />
              <div class="info">
                <h1>{{ item.title }}</h1>
                <p class="sanchu">
                  <span class="price">￥{{ item.sell_price }}</span>
                  <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                  <a href="#" @click.prevent = "remove(item.id,index)">删除</a>
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
                <span class="red"> {{ $store.getters.getGoodsCountAndAmount.count }} </span> 件
                <br> 
                总价
                <span class="red"> ￥{{$store.getters.getGoodsCountAndAmount.amount  }} </span>
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
import numbox from "../subcomponent/shopcar_num.vue";
export default {
  data() {
    return {
      goodslist: []
    };
  },
  created() {
    this.getGoodsList()
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
    },
    remove(id,index) {
      this.goodslist.splice(index,1)
      this.$store.commit("removeFromCar",id)
    },
    selectedChanged(id,val) {
      this.$store.commit("updateGoodsSelected",{
        id,
        selected:val
      })
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
.sanchu {
  box-sizing: border-box;
  margin-top: 10px;
  display: inline-flex;
  justify-content:space-between;
}
.sanchu a,
.sanchu span
 {
  margin-top:5px;
}

</style>