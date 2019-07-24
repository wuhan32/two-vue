import mixinToolBar from './mixinToolBar'

export default {
  props: ['actionData'],
  mixins: [mixinToolBar],
  data() {
    return {
      labelWidth: '100px',
      disabled: this.actionData !== 'add' ? true : false,
      attachments: []
    }
  },
  methods: {
    initForm(callback) {
      if (this.actionData !== 'add') {
        this.sendForm = this.$tool.obCopy(this.actionData)
        this.sendForm.attachments && this.initFile()
      }
      callback && callback(this.sendForm)
    },
    initFile() {
      this.attachments = this.sendForm.attachments.map((v) => {
        v.name = v.fileName
        return v
      })
      this.sendForm.attachments = this.sendForm.attachments.map(v => v.fileUrl)
    },
    onSuccess(fileList) {
      this.sendForm.attachments = fileList.map((v) => {
        if (v.fileUrl) return v.fileUrl
        if (v.response) return v.response.data[0]
      })
    },
    async submitAction(add, update, sendForm) {
      const valid = await this.$refs['sendForm'].validate()
      if (!valid) return
      this.actionData === 'add' && await add(sendForm)
      this.actionData !== 'add' && await update(sendForm)
      this.$emit('confirm')
    },
    async submitActionCom(api, sendForm) {
      const valid = await this.$refs['sendForm'].validate()
      if (!valid) return
      await api(sendForm)
      this.$emit('confirm')
    }
  }
}
