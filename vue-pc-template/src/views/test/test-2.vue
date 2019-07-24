<template>
  <div>
    <!-- 工具栏 -->
    <div class="toolBar">
      <el-input />
      <el-button type="danger">test</el-button>
      <el-input />
      <el-button type="danger">test</el-button>
      <el-input />
      <el-select v-model="selected" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-button type="danger">test</el-button>
      <el-button class="fr" type="danger" @click="dialogVisible = true">添加</el-button>
    </div>
    <!-- 表单 -->
    <el-table :data="tableData" class="m_20b" border tooltip-effect="light">
      <el-table-column prop="date" label="日期" width="50" show-overflow-tooltip />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="address" label="地址" />
    </el-table>
    <!-- 分页 -->
    <el-pagination :total="50" class="tac" layout="prev, pager, next" />
    <!-- 弹层 -->
    <el-dialog :visible.sync="dialogVisible" title="提示" width="60%">
      <span>测试 dialogVisible</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      selected: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.el-select {
  /deep/ .el-select-dropdown__item {
    background-color: #fe6367;
  }
}
</style>

<style lang="scss">
.el-select-dropdown {
  /deep/ .el-select-dropdown__item {
    background-color: #fe6367;
  }
}
</style>
