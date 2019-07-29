<template>
  <div class="swiper">
    <mt-swipe :auto="4000" class="lunbo">
      <mt-swipe-item v-for="item in lunbolist" :key="item.id">
        <img :src="item.img" alt :class="{full:isfull}" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props: ["lunbolist", "isfull"]
};
</script>


<style scoped>
.lunbo {
  height: 200px !important;
}
.mint-swipe-item {
  text-align: center;
}
.mint-swipe-item img {
  height: 100%;
}
.full {
  width: 100%;
}

</style>