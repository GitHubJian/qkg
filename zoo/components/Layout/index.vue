<template>
    <el-container>
        <el-aside class="q-aside-wrapper" width="240px">
            <SideBar/>
        </el-aside>
        <el-container class="q-container-wrapper">
            <el-header height="55px">
                <Navbar/>
            </el-header>
            <el-main class="q-main-wrapper" :style="{height: `calc(100vh - 55px)`}">
                <slot name="content"></slot>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Navbar from './Navbar';
import SideBar from './SideBar';
import './reset.css';

export default {
    name: 'layout',
    components: {
        Navbar,
        SideBar
    },
    data() {
        return {};
    }
};
</script>

<style lang="scss">
.q-aside-wrapper {
    background: #35404f;
}

.q-container-wrapper {
    .el-header {
        border-bottom: 1px solid #ebeef5;
    }

    .q-main-wrapper {
        padding: 0;
    }
}
</style>