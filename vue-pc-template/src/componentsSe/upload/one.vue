<template>
  <el-upload
    ref="upload"
    :action="$tool.upload.img()"
    :disabled="disabled"
    :data="uploadData"
    :show-file-list="false"
    :multiple="false"
    :on-success="onSuccess"
    :on-error="onError"
    class="avatar-uploader dib">
    <img v-if="showUrl" :src="showUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"/>
  </el-upload>
</template>

<script type="text/ecmascript-6">
import mixinUpload from '@/mixin/mixinUpload'

export default {
  mixins: [mixinUpload],
  data() {
    return {
      isShowUrl: true
    }
  },
  created() {
  },
  methods: {}
}
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss">
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    width: 150px;
    height: 150px;
    line-height: 150px;
    color: #8c939d;
    font-size: 28px;
    text-align: center;
  }

  .avatar {
    width: 150px;
    height: 150px;
    display: block;
  }
</style>
