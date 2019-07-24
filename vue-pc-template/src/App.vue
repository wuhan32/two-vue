<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
  import mixinReload from '@/mixin/mixinReload'

  export default {
    name: 'App',
    mixins: [mixinReload],
    data() {
      return {}
    },
    created() {
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss" scoped>

</style>
