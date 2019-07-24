<template>
  <el-pagination
    :current-page.sync="pageData.current"
    :page-sizes="[10, 20, 30, 40, 50]"
    :page-size.sync="pageData.size"
    :total="total"
    class="tac"
    background
    layout="total, sizes, prev, pager, next, jumper"
    @current-change="$emit('currentChange')"
    @size-change="$emit('sizeChange')"/>
</template>

<script type="text/ecmascript-6">
export default {
  props: ['pageData', 'total'],
  data() {
    return {}
  },
  created() {
  },
  methods: {}
}
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss" scoped>

</style>
