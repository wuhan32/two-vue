import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      dateFormat: 'yyyy-MM-dd',
      timeFormat: 'yyyy-MM-dd HH:mm:ss',
      sizeData: { size: 1000 }
    }
  },
  methods: {},
  computed: {
    ...mapGetters(['userInfo'])
  }
}
