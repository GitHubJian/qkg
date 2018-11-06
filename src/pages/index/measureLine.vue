<template>
    <div class="measure-line">
        <div class="measure-line-item">
            <div class="measure-line-prefix">
                <span>A</span>
            </div>
            <div class="normal-measure-line">
                <div class="measure-seletor">
                    <MeasureSeletor></MeasureSeletor>
                </div>
                <div class="measure-seletor measure-split">
                    <span>的</span>
                </div>
                <div class="measure-seletor">
                    <el-select v-model="signA"></el-select>
                </div>
                <div class="measure-seletor measure-seletor-remove active">
                    <span class="fa fa-close"></span>
                </div>
                <div class="measure-seletor measure-seletor-more">
                    <span class="meausure-seletor-change">
                        <i class="fa fa-search"></i>
                    </span>
                    <span class="measure-seletor-add">
                        <i class="fa fa-plus"></i>
                        筛选条件
                    </span>
                </div>
            </div>
        </div>
        <div class="meausre-line-filter">
            <Filters/>
        </div>
    </div>
</template>

<script>
import MeasureSeletor from './measureSeletor';
import Filters from './filters';

export default {
    components: {
        MeasureSeletor,
        Filters
    },
    data() {
        return {
            signA: ''
        };
    }
};
</script>

<style lang="scss">
.measure-line {
    .measure-line-item {
        position: relative;
        padding: 10px 0;

        &::after {
            content: '';
            display: table;
            clear: both;
        }

        .measure-line-prefix {
            position: absolute;
            top: 10px;
            left: 0;
        }

        .normal-measure-line {
            padding-left: 36px;
            width: 100%;
        }

        .measure-line-prefix {
            margin-top: 10px;
            width: 36px;
            span {
                display: inline-block;
                width: 20px;
                font-size: 14px;
                color: #2dca93;
                text-align: center;
                background: #c3e6d0;
                border-radius: 2px;
            }
        }

        .measure-seletor {
            float: left;
            height: 40px;
            line-height: 40px;
        }

        .measure-split {
            margin: 0 15px;

            span {
                display: inline-block;
                width: 20px;
                font-size: 14px;
                text-align: center;
            }
        }

        .measure-seletor-remove {
            display: none;
            margin: 0 15px;
            font-size: 16px;
            line-height: 40px;
            color: #ccc;

            &.active {
                display: block;
            }
        }

        .measure-seletor-more {
            float: right;
            margin-top: 5px;
            height: 30px;
            color: #559ff0;

            .meausure-seletor-change {
                margin-right: 10px;
                display: inline-block;
                width: 30px;
                height: 30px;
                font-size: 16px;
                line-height: 30px;
                text-align: center;
                cursor: pointer;
            }

            .measure-seletor-add {
                margin-right: 10px;
                display: inline-block;
                font-size: 14px;
                line-height: 30px;
                cursor: default;
            }
        }
    }
}
</style>


