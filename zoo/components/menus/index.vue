<template>
    <div class="q-menu-wrap">
        <div class="q-menu-list">
            <section v-for="(option, index) in menuList" :key="index" class="q-menu-item">
                <h4 class="q-menu-hd">
                    <span class="q-menu-action"></span>
                    <span class="q-menu-icon"></span>
                    <span class="q-menu-title"></span>
                    <span class="q-menu-other"></span>
                </h4>
                <div class="q-menu-bd"></div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'menu',
    data() {
        return {
            menuList: [
                {
                    name: '数据概览'
                }
            ]
        };
    }
};
</script>

<style lang="scss">
.q-menu-wrap {
    height: calc(100% - 60px);
    overflow-y: auto;
}
.q-menu-list {
    .q-menu-item {
        .q-menu-hd {
            position: relative;
            margin: 0;
            padding: 0 12px 0 15px;
            font-size: 14px;
            font-weight: 400;
            line-height: 48px;
            color: #8492a6;
            user-select: none;
            cursor: pointer;
        }
    }
}
</style>

