<template>
  <section class="full">
    <transition name="fade-transform" mode="out-in">
      <router-view v-if="isRouterAlive" :key="key" class="view-container"/>
    </transition>
  </section>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {}
  },
  computed: {
    key() {
      return this.$route.fullPath
    }
  },
  methods: {}
}
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss" scoped>
</style>
