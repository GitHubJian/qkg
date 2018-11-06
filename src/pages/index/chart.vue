<template>
    <div class="q-chart-wrapper">
        <div class="q-chart-header">
            <div class="q-chart-title">
                小程序开团情况的总次数，任意事件的总次数，任意事件的总次数，任意事件的总次数，任意事件的总次数
            </div>
            <div class="q-chart-right">
                <div class="q-chart-date">
                    <el-date-picker v-model="value7" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2">
                    </el-date-picker>
                </div>
                <div class="q-chart-change">
                    <div class="dropdown-menu-group">
                        <el-dropdown>
                            <el-button type="primary">
                                更多菜单
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </el-button>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>黄金糕</el-dropdown-item>
                                <el-dropdown-item>狮子头</el-dropdown-item>
                                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                <el-dropdown-item>双皮奶</el-dropdown-item>
                                <el-dropdown-item>蚵仔煎</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <el-dropdown>
                            <el-button type="primary">
                                更多菜单
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </el-button>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>黄金糕</el-dropdown-item>
                                <el-dropdown-item>狮子头</el-dropdown-item>
                                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                <el-dropdown-item>双皮奶</el-dropdown-item>
                                <el-dropdown-item>蚵仔煎</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <el-dropdown>
                            <el-button type="primary">
                                更多菜单
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </el-button>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>黄金糕</el-dropdown-item>
                                <el-dropdown-item>狮子头</el-dropdown-item>
                                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                <el-dropdown-item>双皮奶</el-dropdown-item>
                                <el-dropdown-item>蚵仔煎</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </div>
        </div>
        <div ref="echarts" class="q-chart-panel" style="height:500px;width:100%"></div>
    </div>
</template>

<script>
import echarts from 'echarts';

export default {
    data() {
        return {
            pickerOptions2: [],
            value7: '',
            chart: ''
        };
    },
    mounted() {
        this.chart = echarts.init(this.$refs.echarts);

        this.chart.setOption({
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 52, 200, 334, 390, 330, 220]
                }
            ]
        });
    }
};
</script>

<style lang="scss">
.q-chart-wrapper {
    .q-chart-header {
        display: flex;
        padding: 10px 0;

        .q-chart-title {
            padding-top: 15px;
            flex: 1;
            flex-basis: auto;
            font-size: 16px;
        }

        .q-chart-right {
            width: 400px;
            text-align: right;
        }

        .q-chart-change {
            margin-top: 10px;

            .dropdown-menu-group {
                display: inline-block;
                &::after {
                    content: '';
                    display: table;
                    clear: both;
                }

                .el-dropdown {
                    float: left;
                    margin-right: -1px;

                    &:first-child {
                        .el-button {
                            border-right-color: #ffffff;
                            border-top-right-radius: 0;
                            border-bottom-right-radius: 0;
                        }
                    }

                    &:not(:first-child):not(:last-child) {
                        .el-button {
                            border-radius: 0;
                            border-left-color: #ffffff;
                            border-right-color: #ffffff;
                        }
                    }

                    &:last-child {
                        .el-button {
                            border-top-left-radius: 0;
                            border-bottom-left-radius: 0;
                            border-left-color: #ffffff;
                        }
                    }
                }
            }
        }
    }

    .q-chart-panel {
    }
}
</style>

