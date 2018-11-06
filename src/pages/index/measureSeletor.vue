<template>
    <el-popover>
        <span class="q-sign-seletor" slot="reference">
            <i class="icon icon-left fa fa-search"></i>
            <span class="title">dakia </span>
            <i class="icon icon-right fa fa-search"></i>
        </span>
        <ul>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
        </ul>
    </el-popover>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>


<style lang="scss">
.q-sign-seletor {
    position: relative;
    display: inline-block;
    width: auto;
    min-width: 200px;
    height: 40px;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    border: 1px solid #dcdfe6;
    background-color: #fff;
    border-radius: 4px;

    .icon {
        position: absolute;
        top: 0;
        width: 25px;
        text-align: center;
        height: 100%;
        line-height: 40px;
        color: #c0c4cc;

        &.icon-left {
            left: 3px;
        }

        &.icon-right {
            right: 5px;
        }
    }
    .title {
        padding: 0 30px;
        display: block;
    }
}
</style>
