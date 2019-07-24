<template>
  <el-upload
    ref="upload"
    :action="$tool.upload.img()"
    :disabled="disabled"
    :data="uploadData"
    :file-list="fileList"
    :multiple="false"
    :on-success="onSuccess"
    :on-error="onError"
    :on-preview="onPreview"
    :on-remove="onRemove"
    drag>
    <i class="el-icon-upload"/>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      :append-to-body="true"
      :width="dialogWidth"
      class="dialogSe">
      <img v-if="fileUrl" :src="fileUrl" class="w_100p">
    </el-dialog>
  </el-upload>
</template>

<script type="text/ecmascript-6">
import mixinUpload from '@/mixin/mixinUpload'

export default {
  mixins: [mixinUpload],
  data() {
    return {}
  },
  created() {
  },
  methods: {}
}
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss">
  .el-upload {
    width: 100%;
  }

  .el-upload-dragger {
    width: 100%;
  }
</style>
