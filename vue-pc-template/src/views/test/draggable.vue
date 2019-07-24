<template>
  <div class="h-ac pos" style="padding-top:60px">
    <div class="toolBar pos-lt w-100p">
      <el-checkbox v-model="disabled" />
      <el-button @click="orderList">重制</el-button>
    </div>
    <el-row :gutter="20" class="h-100p">
      <el-col :span="6" class="h-100p">
        <draggable v-model="list" v-bind="dragOptions" class="h-100p bgc-f5">
          <transition-group name="list" type="transition" tag="ul" class="h-100p p-20">
            <li v-for="v in list" :key="v.order" class="h-40 m-20b b-r5 p-20lr bgc-white">
              <i
                :class="v.fixed? 'el-icon-edit' : 'el-icon-rank'"
                aria-hidden="true"
                @click="v.fixed=! v.fixed"
              />
              {{ v.name }}
              <span class="fr">{{ v.order }}</span>
            </li>
          </transition-group>
        </draggable>
      </el-col>

      <el-col :span="6" class="h-100p">
        <draggable v-model="list2" v-bind="dragOptions" class="h-100p bgc-f5">
          <transition-group name="breadcrumb" type="transition" tag="ul" class="h-100p p-20">
            <li v-for="v in list2" :key="v.order" class="h-40 m-20b b-r5 p-20lr bgc-white">
              <i
                :class="v.fixed? 'el-icon-edit' : 'el-icon-rank'"
                aria-hidden="true"
                @click=" v.fixed=! v.fixed"
              />
              {{ v.name }}
              <span class="fr">{{ v.order }}</span>
            </li>
          </transition-group>
        </draggable>
      </el-col>

      <el-col :span="6">
        <pre>{{ listString }}</pre>
      </el-col>

      <el-col :span="6">
        <pre>{{ list2String }}</pre>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
const message = [
  'vue.draggable',
  'draggable',
  'component',
  'for',
  'vue.js 2.0',
  'based',
  'on',
  'Sortablejs'
]
export default {
  name: 'Hello',
  components: {
    draggable
  },
  data() {
    return {
      list: message.map((name, index) => {
        return { name, order: index + 1, fixed: false }
      }),
      list2: [],
      disabled: true
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: 'group',
        disabled: !this.disabled,
        ghostClass: 'ghostClass'
      }
    },
    listString() {
      return JSON.stringify(this.list, null, 2)
    },
    list2String() {
      return JSON.stringify(this.list2, null, 2)
    }
  },
  methods: {
    orderList() {
      this.list = this.list.sort((one, two) => {
        return one.order - two.order
      })
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      )
    }
  }
}
</script>

<style>
.list-move {
  transition: all 0.5s;
}
.ghostClass {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
