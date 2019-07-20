<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/home/newsInfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
          <h3>{{ item.title }}</h3>
            <p class="mui-ellipsis">
                <span>发表时间：{{ item.add_time | dateFormat}}</span>
                <span>点击：{{ item.click }}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

import { Toast } from 'mint-ui'

export default {
    data() {
        return {
            newslist:[]
        }
    },
    created() {
        this.getnewsList()
    },
    methods: {
        getnewsList() {
            this.$http.get('api/getnewslist').then(res => {
                if(res.body.status == 0) {
                    this.newslist = res.body.message
                } else {
                    toast("获取新闻列表失败")
                }
            })
        }
    }
};
</script>

<style scoped>
    .mui-table-view li h3 {
        font-size:14px;
    }
    .mui-table-view li p {
        font-size:12px;
        color:#226aff;
        overflow:hidden;
    }
    .mui-table-view li p span:nth-of-type(1) {
        float: left;
    }
    .mui-table-view li p span:nth-of-type(2) {
        float: right;
    }
</style>

