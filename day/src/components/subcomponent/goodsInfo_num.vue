<template>
  <div>
    <div class="mui-numbox" data-numbox-min="0">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" 
      type="number" value="1" 
      @change="countChanged" ref = "numbox" />
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
      this.$emit("getcount", parseInt(this.$refs.numbox.value))
    }
  },
  props:["max"],
  watch:{
    max:function(newVal,oldVal) {
      mui(".mui-numbox").numbox().setOption('max',newVal)
    }
  }
};
</script>

<style scoped>
</style>