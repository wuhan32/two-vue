<template>
  <div class="h-ac">
    <div class="h-50p flex">
      <div class="flex-1">
        <se-echarts
          :option="zxt"
          :is-carousel="true"
          class="full"
          id-name="zxt"
          @echartsClick="echartsClick"
        />
      </div>
      <div class="flex-1 m-20lr">
        <se-echarts
          :option="bxt"
          :is-carousel="true"
          class="full"
          id-name="bxt"
          @echartsClick="echartsClick"
        />
      </div>
      <div class="flex-1">
        <se-echarts
          :option="hxt"
          :is-carousel="true"
          class="full"
          id-name="hxt"
          @echartsClick="echartsClick"
        />
      </div>
    </div>
    <div class="h-50p flex p-20t">
      <div class="full m-20r" style="flex:2">
        <se-echarts
          :option="zxt_2"
          :is-carousel="true"
          class="full"
          id-name="zxt-2"
          @echartsClick="echartsClick"
        />
      </div>
      <div class="full" style="flex:1">
        <se-echarts
          :option="zxt_3"
          :is-carousel="true"
          class="full"
          id-name="zxt-3"
          @echartsClick="echartsClick"
        />
      </div>
    </div>
  </div>
</template>

<script>
import seEcharts from '@/componentsSe/echarts'
import echarts from 'echarts'

export default {
  components: { seEcharts },
  data() {
    return {
      zxt: {
        backgroundColor: '#fff',
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['喀什市',
            '疏附县',
            '疏勒县',
            '英吉沙县',
            '泽普县',
            '岳普湖县',
            '巴楚县',
            '伽师县',
            '叶城县',
            '莎车县 '
          ],
          axisLine: {
            show: true,
            lineStyle: {
              color: '#063374',
              width: 1,
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#00c7ff'
            }
          }
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            formatter: '{value} %'
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#00c7ff',
              width: 1,
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: '#063374'
            }
          }
        }],
        series: [{
          type: 'bar',
          data: [20, 50, 80, 58, 83, 68, 57, 80, 42, 66],
          label: {
            show: true,
            position: 'top',
            color: '#fff'
          },
          // barWidth: 50, //柱子宽度
          // barGap: 1, //柱子之间间距
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#00fcae'
              }, {
                offset: 1,
                color: '#006388'
              }]),
              opacity: 1
            }
          }
        }]
      },
      bxt: {
        tooltip: {
          trigger: 'item'
        },
        visualMap: {
          show: false,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: '资产组',
            type: 'pie',
            radius: '60%',
            center: ['50%', '50%'],
            data: [
              { value: 10, name: '大数据' },
              { value: 20, name: '巡控系统' },
              { value: 30, name: '多维平台' },
              { value: 40, name: '图像解析' },
              { value: 50, name: '边界设备' },
              { value: 60, name: '边界设备' },
              { value: 70, name: '安全设备' }
            ].sort(function(a, b) {
              return a.value - b.value
            }),
            roseType: 'angle',
            label: {
              formatter: '{b|{b}} \n{hr|}\n {c|{c}}',
              rich: {
                hr: {
                  borderColor: '#fff',
                  width: '100%',
                  borderWidth: 1,
                  height: 0
                },
                b: {
                  fontSize: 12,
                  lineHeight: 25,
                  align: 'center',
                  padding: [2, 2],
                  color: '#fff'
                },
                c: {
                  fontSize: 12,
                  lineHeight: 25,
                  align: 'center',
                  color: '#fff'
                }
              }
            },
            labelLine: {
              lineStyle: {
                color: '#fff'
              }
            },
            itemStyle: {
              color: '#409EFF',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        ]
      },
      hxt: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
              normal: {
                position: 'inner'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: '直达', selected: true },
              { value: 679, name: '营销广告' },
              { value: 1548, name: '搜索引擎' }
            ]
          },
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '55%'],

            data: [
              { value: 335, name: '直达' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1048, name: '百度' },
              { value: 251, name: '谷歌' },
              { value: 147, name: '必应' },
              { value: 102, name: '其他' }
            ]
          }
        ]
      },
      zxt_2: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          }
        },
        legend: {
          x: 'right',
          icon: 'rect',
          textStyle: {
            color: '#fff',
            fontSize: 12
          },
          right: '5%',
          top: '5%',
          data: ['系统风险', '站点风险']
        },
        grid: { // 图表的位置
          top: '10%',
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        yAxis: [{
          name: '次数',
          type: 'value',
          splitLine: {
            show: false
          },
          axisLabel: {
            color: '#fff'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#409EFF'
            }
          }
        }],
        xAxis: [{
          type: 'category',
          data: ['9-27', '9-27', '9-27', '9-27', '9-27', '9.27', '9.27'],
          axisLabel: {
            color: '#fff'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#409EFF'
            }
          }
        }],
        series: [{
          name: '系统风险',
          type: 'line',
          data: [100, 120, 82, 70, 57, 240, 44],
          smooth: true,
          symbolSize: 6,
          itemStyle: {
            color: '#409EFF'
          }
        },
        {
          name: '站点风险',
          type: 'line',
          data: [57, 88, 68, 89, 74, 14, 300],
          smooth: true,
          symbolSize: 6,
          itemStyle: {
            color: '#08fcfe'
          }
        }
        ]
      },
      zxt_3: {
        backgroundColor: '#00265f',

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#57617B'
            }
          }
        },
        legend: {
          icon: 'rect',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: ['增长数'],
          right: '4%',
          textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#00c7ff'
            }
          },
          data: ['4号', '5号', '6号', '10号', '11号', '14号', '15号', '19号', '20号', '22号', '33号', '35号', '54号', '58号', '60号']
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#00c7ff'
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14
            }
          },
          splitLine: {
            show: false
          }
        }],
        series: [{
          name: '增长数',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#5ff6e9'
              }, {
                offset: 0.8,
                color: '#7370fd'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(137,189,27)',
              borderColor: 'rgba(137,189,2,0.27)',
              borderWidth: 12

            }
          },
          data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122, 89, 112, 34]
        }]
      }
    }
  },
  methods: {
    echartsClick(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
