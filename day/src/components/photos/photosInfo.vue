<template>
  <div class="photoinfo-container">
    <h3>{{photoinfo.title}}</h3>
    <p>
      <span>发表时间 {{ photoinfo.add_time | dateFormat }}</span>
      <span>点击：{{ photoinfo.click }} 次</span>
    </p>

    <hr />

    <!-- 缩略图区域 -->
    <div>
      <vue-preview :slides="imgs"></vue-preview>

    </div>
    <div class="content" v-html="photoinfo.content"></div>
    <!-- 放置一个现成的 评论子组件 -->
    <cmt-box :id="this.id"></cmt-box>
  </div>
</template>
  
   
  



<script>
import comment from "../subcomponent/comment.vue";


export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: [],
      imgs: []
    };
  },
  created() {
    this.getPhotoInfo();
    this.getImgs()
  },
  methods: {
    getPhotoInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(res => {
        // console.log(res.body);

        if (res.body.status == 0) {
          this.photoinfo = res.body.message[0];
        }
      });
    },
    getImgs() {
      this.$http.get("api/getthumimages/"+ this.id).then(res => {
        if (res.body.status == 0) {
          this.imgs = res.body.message;
          this.imgs.forEach(item => {
            item.w = 600; 
            item.h = 400;
            item.msrc = item.src;
          });
        }
      });
    }
  },
  components: {
    "cmt-box": comment
  }
};
</script>

<style lang="css">
.photoinfo-container {
  padding: 3px;
}
.photoinfo-container h3 {
  color: #26a2ff;
  font-size: 15px;
  text-align: center;
  margin: 15px 0;
}
.photoinfo-container .subtitle {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
.photoinfo-container .content {
  font-size: 13px;
  line-height: 30px;
}
.photoinfo-container .thumbs img {
  margin: 10px;
  box-shadow: 0 0 8px #999;
}
figure {
  margin:5px;
  padding: 0;
  display: inline-block;
}
figure img {
  width: 90px;
  

}
</style>