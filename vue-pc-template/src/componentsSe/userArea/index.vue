<template>
  <div>
    <el-dropdown @command="command">
      <span class="colorBl">
        <span>{{ userInfo.userLoginName }}</span>
        <span class="el-icon-arrow-down el-icon--right"/>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="logOut">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  created() {},
  methods: {
    async logout() {
      await this.$store.dispatch('LogOut')
      location.reload()
    },
    command(val) {
      val === 'logOut' && this.logout()
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss" scoped>
</style>
