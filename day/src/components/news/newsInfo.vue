<template>
    <div class="newInfo-container">
        <!-- 大标题 -->
        <h3 class="title"> {{ newsInfo.title }} </h3>
        <!-- 小标题 -->
        <p class="subtitle">
            <span>发表时间：{{ newsInfo.add_time | dateFormat }}  </span>
            <span>点击：  {{ newsInfo.click }}   次</span>
        </p>
        <!-- 内容区域 -->
        <div class="content" v-html="newsInfo.content"></div>

        <!-- 评论区域 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
//导入评论子组件
import comment from '../subcomponent/comment.vue'

import { toast } from 'mint-ui'

export default {
    data() {
        return {
            id: this.$route.params.id,
            newsInfo:{}
        }
    },
    created() {
        this.getnewsInfo()
    },
    methods: {
        getnewsInfo() {
            this.$http.get('api/getnew/'+ this.id).then(res => {
                // console.log(res)
                if(res.body.status === 0) {
                    this.newsInfo = res.body.message[0]
                } else {
                    toast("获取新闻详情失败")
                }
            })
        }
    },
    components:{//用来注册子组件的节点
       "comment-box":comment
    }

}
</script>

<style>
.newInfo-container {
    padding:0 4px;
}
.newInfo-container .title {
    font-size:16px;
    text-align: center;
    color: red;
    margin:15px 0;
}
.newInfo-container .subtitle {
    font-size:13px;
    color: #226aff;
    display:flex;
    justify-content: space-between;
   
}

</style>

