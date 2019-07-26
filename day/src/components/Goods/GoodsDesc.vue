<template>
  <div>
      <h3> {{ info.title }} </h3>
      <p v-html="info.content" class="particularsImg">  </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      info: {}
    };
  },
  created() {
    this.goodsDesc();
  },
  methods: {
    goodsDesc() {
      this.$http.get("api/goods/getdesc/" + this.id).then(res => {
        if (res.data.status === 0) {
          this.info = res.data.message[0];
          console.log(this.info);
        }
      });
    }
  }
};
</script>

<style >
 
  .particularsImg img {
    
    width: 100%;
  }
</style>