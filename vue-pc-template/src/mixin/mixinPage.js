export default {
  data() {
    return {
      records: [],
      total: 0,
      recordsSon: [],
      totalSon: 0
    }
  },
  methods: {
    async getPageList(current, callback, callRecords) {
      current && (this.sendData.current = current)
      const { data } = await callback(this.sendData)
      this.records = data.records
      this.total = Number(data.total)
      callRecords && callRecords(data)
    },
    async getPageListCom(current, callback, send, records, total, callRecords) {
      current && (this.sendData.current = current)
      const { data } = await callback(send)
      this[records] = data.records
      this[total] = Number(data.total)
      callRecords && callRecords(data)
    }
  }
}
