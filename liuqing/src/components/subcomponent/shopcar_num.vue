<template>
  <div>
    <div class="mui-numbox" data-numbox-min="0">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" 
      type="number" :value="initcount" 
      @change="countChanged" ref = "numbox" readonly/>
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.js'
export default {
  mounted() {
    mui(".mui-numbox").numbox();
    // console.log(this.max);
    
  },
  methods: {
    countChanged() {
      this.$store.commit("updateGoodsInfo",{
          id:this.goodsid,
          count:this.$refs.numbox.value  
      })
    }
  },
  props:["initcount","goodsid"],
};
</script>

<style scoped>
</style>