<template>
    <layout>
        <div class="q-content" slot="content">
            <Header></Header>

            <div class="q-content-sc">
                <ul class="q-sc-hd">
                    <li>
                        <i class="icon fa fa-search"></i>
                    </li>
                    <li>
                        <span class="q-sign-title">请添加指标</span>
                    </li>
                    <li>
                        <span class="q-sign-split"></span>
                    </li>
                    <li>
                        <el-select class="q-sign-change" v-model="signSeleted">
                            <el-option v-for="(option, i) in signSelectList" :key="i" :value="option.value" :label="option.label"></el-option>
                        </el-select>
                    </li>
                </ul>
                <div class="q-sc-bd">
                    <MeasureLine></MeasureLine>

                    <div class="measure-split-line">
                        <span class="measure-line-add">
                            <i class="fa fa-search"></i>
                        </span>
                    </div>

                    <GroupLine></GroupLine>
                </div>
            </div>
            <div class="q-content-chart">
                <Chart></Chart>
            </div>
        </div>
    </layout>
</template>

<script>
import Header from 'components/header';
import MeasureLine from './measureLine';
import GroupLine from './groupLine';
import Chart from './chart';

export default {
    components: {
        Header,
        MeasureLine,
        GroupLine,
        Chart
    },
    data() {
        return {
            msg: 'world',
            value1: 0,
            signSelectList: [
                {
                    value: 1,
                    name: '事件'
                },
                {
                    value: 2,
                    name: 'Session'
                }
            ],
            signSeleted: 1,
            signA: '',
            signAList: [{ label: 1, value: 1 }]
        };
    },
    mounted() {}
};
</script>

<style lang="scss">
.q-content-sc {
    .q-sc-hd {
        padding: 0 20px;
        height: 41px;
        font-size: 16px;
        font-weight: 400;
        line-height: 40px;
        overflow: hidden;
        border-bottom: 1px solid #ebeef5;

        &::after {
            content: '';
            display: table;
            clear: both;
        }

        & > li {
            float: left;
            margin-right: 10px;

            .q-sign-split {
                margin-top: 8px;
                display: block;
                width: 1px;
                height: 23px;
                border-right: 1px solid #ebeef5;
            }

            .q-sign-change {
                width: 80px;

                .el-input__inner {
                    border: 0;
                    border-radius: 0;
                }
            }
        }

        .q-sign-seletor {
            display: inline-block;
            margin-left: 20px;
            width: 80px;
            border: 0;
            border-radius: 0;
        }
    }

    .measure-split-line {
        position: relative;
        margin-top: 10px;
        margin-bottom: 10px;
        height: 1px;
        background-color: #ebebeb;

        .measure-line-add {
            position: absolute;
            top: -10px;
            display: inline-block;
            width: 20px;
            height: 20px;
            text-align: center;
        }
    }
    .q-sc-bd {
        padding: 0 20px;
    }
}
</style>

