<template>
  <div class="comment">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120" v-model="msg"></textarea>

    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="i">
        <div
          class="cmt-title"
        >第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}</div>
        <div class="cmt-body">{{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}</div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default {
    data() {
        return {
            "pageindex":1,
             comments:[],
             msg:''
        }
    },
    created() {
        this.getComments()
    },
    props:["id"],
    methods: {
        getComments() {//获取评论数据
            this.$http.get("api/getcomments/" + this.id + "?"  +  "pageindex=" + this.pageindex)
            .then(res => {
                // console.log(res)
                if(res.body.status === 0) {
                    // this.comments = res.body.message
                    // 不要让获取的新数组覆盖原来的老数组，所以进行数组拼接
                    this.comments = this.comments.concat(res.body.message)
                }
                else {
                    Toast("加载评论失败")
                }
            })
        },
        getmore() {//加载更多评论数据
            this.pageindex++,
            this.getComments()
        },
        postComment() {
            this.$http.post("api/postcomment/" + this.id,{
                content:this.msg
            }).then(res => {
                if(res.body.status === 0) {
                    let info = {
                        user_name:"匿名",
                        add_time:Date.now(),
                        content:this.msg
                    }
                    this.comments.unshift(info)
                    this.msg = ''
                }
            })
        }
    }
};
</script>

<style scoped>
    .comment {
        padding-bottom: 50px;
    }
    textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
      margin:5px 0;
  }
  .cmt-list .cmt-item {
      font-size: 13px;
  }
  .cmt-list .cmt-title {
      line-height: 35px;
      background-color: #ccc;
  }
  .cmt-list .cmt-body {
      line-height: 35px;
      text-indent: 2em;
  }

</style>

