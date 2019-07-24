export default {
  methods: {
    confirmDialog(title, api, item) {
      this.$element.confirmDialog(this, title, () => {
        this[api](item)
      })
    }
  }
}
