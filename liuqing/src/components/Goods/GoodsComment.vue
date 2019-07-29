<template>
  <div class="photoinfo-container">
    <h3>{{photoinfo.title}}</h3>
    <p>
      <span>发表时间 {{ photoinfo.add_time | dateFormat }}</span>
      <span>点击：{{ photoinfo.click }} 次</span>
    </p>
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
    this.getImgs()
  },
  methods: {
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