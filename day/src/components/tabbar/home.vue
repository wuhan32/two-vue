<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000" class="lunbo">
      <mt-swipe-item v-for="item in lunbolist" :key="item.id">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格 到 六宫格的 改造工程 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1(1).png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photosList">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>`
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to = "home/goodslist">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">location</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">Search</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">Phone</div>
        </a>
      </li> 
    </ul>
  </div>
</template>

<script>
import { toast } from "mint-ui";
export default {
  data() {
    return {
      lunbolist: []
    };
  },
  created() {
    this.getlunbotu();
  },
  methods: {
    getlunbotu() {
      this.$http.get("api/getlunbo")
        .then(result => {
          // console.log(result.body)
          if (result.body.status === 0) {
            this.lunbolist = result.body.message;
          } else {
            toast("加载轮播图失败");
          }
        });
    }
  }
};
</script>

<style scoped>
.lunbo {
  height: 200px !important;
}

.mint-swipe-item img {
  width: 100%;
  height: 100%;
}
.mui-grid-view.mui-grid-9 {
    background-color: #fff;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border:none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell img {
  width:60px;
  height:60px;
}
.mui-media-body {
  font-size: 13px;
}
.mui-table-view-cell {
  width: 33.33%;
}

</style>