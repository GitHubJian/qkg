<template>
    <div class="q-content-hd">
        <h4 class="q-panel-name">事件分析</h4>
        <ul class="q-panel-opts">
            <li class="q-pane-li">
                <a class="highlight">
                    <i class="fa fa-save"></i>
                    <span>保存</span>
                </a>
            </li>
            <li class="q-panel-split"></li>
            <li class="q-panel-li">
                <a>
                    <i class="fa fa-refresh"></i>
                </a>
            </li>
            <li class="q-panel-li">
                <a>
                    <i class="fa fa-download"></i>
                </a>
            </li>
            <li class="q-panel-li">
                <a>
                    <el-popover placement="top-start" width="200" trigger="click">
                        <i class="fa fa-ellipsis-h" slot="reference"></i>
                        <el-slider v-model="value1" :min="0" :max="10"></el-slider>
                    </el-popover>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: 0
        };
    }
};
</script>

<style lang="scss">
.q-content-hd {
    padding-left: 20px;
    padding-right: 20px;
    background-color: #f7f9fa;

    &::after {
        content: '';
        display: table;
        clear: both;
    }

    .q-panel-name {
        float: left;
        padding: 13px 0;
        float: left;
        min-width: 30px;
        max-width: 300px;
        font-size: 20px;
        font-weight: 700;
        color: #475669;
        white-space: nowrap;
        outline: 0;
        overflow-x: auto;
    }

    .q-panel-opts {
        float: right;

        & > li {
            float: left;
            padding: 12px;

            &.q-panel-split {
                margin-top: 10px;
                padding: 0;
                height: 25px;
                border-right: 1px solid #ebeef5;
            }

            & > a {
                font-size: 14px;
                color: #99a9bf;
                user-select: none;
                cursor: pointer;

                &.highlight {
                    color: #559ff0;
                }
            }
        }
    }
}
</style>
