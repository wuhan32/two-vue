export default {
  data() {
    return {
      getRowKey(row) {
        return row.id
      },
      expandRowKeys: []
    }
  },
  methods: {
    expandChange(row, callback) {
      if (this.expandRowKeys[0] === row.id) {
        this.expandRowKeys = []
        return
      }
      this.expandRowKeys = [row.id]
      callback && callback(this.expandRowKeys)
    }
  }
}
