<template>
  <div class="loginBg full pos">
    <div class="pos-cc">
      <div class="tac m-20b">
        <div class="loginLogo dib" />
      </div>
      <el-form ref="sendForm" :model="sendForm" :rules="rules" class="form p-20">
        <div class="c-white font-18 m-30tb">账户登录</div>
        <el-form-item prop="userLoginName">
          <el-input v-model="sendForm.userLoginName" clearable size="medium" placeholder="请输入">
            <template slot="prepend">账户</template>
          </el-input>
        </el-form-item>
        <el-form-item prop="userPassword">
          <el-input
            v-model="sendForm.userPassword"
            clearable
            type="password"
            size="medium"
            placeholder="请输入"
          >
            <template slot="prepend">密码</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="w-100p" type="warning" size="medium" @click="submitAction">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      redirect: this.$route.query.redirect || '',
      sendForm: {
        userLoginName: '',
        userPassword: ''
      },
      rules: {
        userLoginName: { required: true, message: '请输入', trigger: 'blur' },
        userPassword: { required: true, message: '请输入', trigger: 'blur' }
      }
    }
  },
  created() {},
  methods: {
    async submitAction() {
      const valid = await this.$refs['sendForm'].validate()
      if (!valid) return
      await this.$store.dispatch('Login', this.sendForm)
      this.$router.push(this.redirect || '/')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss" scoped>
.loginBg {
  background: url("../../img/loginBg.png") no-repeat center;
  background-size: cover;
}

.loginLogo {
  width: 250px;
  height: 50px;
  background: url("../../img/loginLogo.png") no-repeat center;
  background-size: cover;
}

.form {
  width: 400px;
  background: rgba(255, 255, 255, 0.1);
  /deep/ .el-input {
    background: rgba(255, 255, 255, 0.3);
    .el-input-group__prepend {
      background: none;
      border: none;
      color: #ffffff;
    }
    .el-input__inner {
      background: none;
      border: none;
      color: #ffffff;
    }
  }
}
</style>
