import mixinDialog from './mixinDialog'
import mixinLookFile from './mixinLookFile'

export default {
  props: ['uploadData', 'fileList', 'showUrl', 'disabled'],
  mixins: [mixinDialog, mixinLookFile],
  methods: {
    onSuccess(res, file, fileList) {
      if (res.status !== 0) {
        this.$refs['upload'].clearFiles()
        this.$tool.messageError('上传失败,请重试')
      }
      if (res.status === 0) {
        this.$parent._getPageList && this.$parent._getPageList(1)
        this.$emit('onSuccess', fileList)
        this.isShowUrl && this.$emit('update:showUrl', this.$tool.download.img(res.data[0]))
        this.$tool.messageSuccess('上传成功')
      }
    },
    onError(err, file, fileList) {
      this.$refs['upload'].clearFiles()
      this.$tool.messageError('上传失败,请重试')
    },
    onPreview(res, file, fileList) {
      this.lookFile(res, () => {
        this.actionItem('look')
      })
    },
    onRemove(file, fileList) {
      this.$emit('onSuccess', fileList)
    }
  }
}
