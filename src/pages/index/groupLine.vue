<template>
    <div class="group-control-line">
        <div class="group-line">
            <div class="group-line-hd">
                <span class="group-title">按</span>
                <el-select class="group-select" v-model="a"></el-select>
                <span class="group-title">查看</span>
                <span class="group-remove">
                    <i class="fa fa-search"></i>
                </span>
            </div>
            <div class="group-line-bd">
                <span class="group-add">
                    <i class="fa fa-search"></i>
                </span>
            </div>
        </div>
        <div class="group-filter">
            <Filters></Filters>
        </div>
        <div class="group-filter-add">
            <span>
                <i class="fa fa-search"></i>
                筛选条件
            </span>
        </div>
    </div>
</template>

<script>
import Filters from './filters';

export default {
    components: {
        Filters
    },
    data() {
        return {
            a: ''
        };
    }
};
</script>

<style lang="scss">
.group-line {
    padding: 10px 0;

    &::after {
        content: '';
        display: table;
        clear: both;
    }
    .group-line-hd,
    .group-line-bd {
        float: left;
    }

    .group-line-hd {
        .group-title {
            display: inline-block;
            width: 40px;
            height: 40px;
            font-size: 14px;
            line-height: 40px;
            text-align: center;
        }
        .group-select {
            display: inline-block;
        }
        .group-title {
            display: inline-block;
            height: 40px;
            font-size: 14px;
            line-height: 40px;
            text-align: center;
        }

        .group-remove {
        }
    }

    .group-line-bd {
    }
}

.group-filter-add {
    padding: 5px;
    height: 46px;
    font-size: 14px;
    line-height: 36px;
    border-bottom: 1px solid rgb(235, 235, 235);
}
</style>

