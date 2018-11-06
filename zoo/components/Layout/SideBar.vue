<template>
    <el-container class="q-aside">
        <el-header height="55px">
            <a class="q-logo"></a>
        </el-header>
        <el-main class="q-menu" :style="{height:`calc(100vh - 55px - 50px)`}">
            <div class="q-menu-wrapper">
                <el-menu class="q-menu-list">
                    <el-submenu v-for="(menu, i) in menuList" :key="i" :index="String(menu.id)">
                        <template slot="title">
                            <i class="fa" :class="'fa-' + menu.icon"></i>
                            {{menu.name}}
                        </template>
                        <el-submenu v-for="(group, j) in menu.children" :key="j" class="q-submenu" :index="String(group.id)">
                            <span slot="title">
                                <i class="fa" :class="'fa-' + group.icon"></i>
                                {{group.name}}
                            </span>
                            <el-menu-item v-for="(item, k) in group.children" :key="k" :index="String(item.id)">
                                <i class="fa" :class="'fa-' + item.icon"></i>
                                {{item.name}}
                            </el-menu-item>
                        </el-submenu>
                    </el-submenu>
                </el-menu>
            </div>
        </el-main>
        <el-footer class="q-aside-footer" height="50px">
            <a class="q-footer-menu">
                <i class="fa fa-search"></i>
                <span>元数据</span>
            </a>
            <a ref="bookmark" class="q-footer-menu" :class="{'active':isBookmarkVisible}" @click="handleBookmarkShow">
                <i class="fa fa-search"></i>
                <span>书签</span>
                <div ref="bookmarkBox" class="q-bookmark-wrapper" :class="{'active':isBookmarkVisible}">
                    <div class="q-bookmark">
                        <div class="q-bookmark-hd">
                            <i class="fa fa-star-o"></i>
                            <span>书签</span>
                        </div>
                        <div class="q-bookmark-bd">
                            <el-collapse accordion>
                                <el-collapse-item>
                                    <template slot="title">
                                        事件分析
                                    </template>
                                    <ul>
                                        <li class="q-bookmark-item">
                                            <div class="q-bookmark-title">
                                                <h3>一致性 Consistency</h3>
                                                <p>一致性 Consistency一致性 Consistency</p>
                                            </div>
                                            <i class="q-bookmark-edit fa fa-edit"></i>
                                        </li>
                                    </ul>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                    </div>
                </div>
            </a>
        </el-footer>
    </el-container>
</template>

<script>
export default {
    name: 'SideBar',
    components: {},
    data() {
        return {
            menuList: [
                {
                    id: 1,
                    name: '数据概览',
                    icon: 'dashboard',
                    children: [
                        {
                            id: 2,
                            name: '数据概览1',
                            icon: 'cogs',
                            children: [
                                {
                                    id: 3,
                                    name: '老板',
                                    icon: 'circle-o',
                                    href: 'www.baidu.com'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 12,
                    name: '数据概览',
                    icon: 'dashboard',
                    children: [
                        {
                            id: 22,
                            name: '数据概览1',
                            icon: 'cogs',
                            children: [
                                {
                                    id: 33,
                                    name: '老板',
                                    icon: 'circle-o',
                                    href: 'www.baidu.com'
                                }
                            ]
                        }
                    ]
                }
            ],
            isBookmarkVisible: false,
            isCreateGroupVisible: false,
            createGroupForm: {
                name: ''
            }
        };
    },
    created() {},
    mounted() {
        this.$dom.on(this.$refs.bookmarkBox, 'click', function(e) {
            e.stopPropagation();
        });
    },
    methods: {
        handleCreateCommand(command) {
            switch (command) {
                case 'group':
                    this.showCreateGroupDialog();
                    break;
                case 'overview':
                    break;
            }
        },
        showCreateGroupDialog() {
            this.isCreateGroupVisible = true;
        },
        linkNewTab() {
            debugger;
        },
        showFirstMenuList(i) {
            this.menuList[i].active = !this.menuList[i].active;
        },
        showSecondMenuList(i, j) {
            let option = this.menuList[i];
            if (!option.active) return;

            option.children[j].active = !option.children[j].active;
        },
        handleBookmarkShow(e) {
            const ctx = this;
            this.isBookmarkVisible = !this.isBookmarkVisible;

            function handle(e) {
                const flag = ctx.$dom.contains(ctx.$refs.bookmark, e.target);
                if (!flag) {
                    ctx.isBookmarkVisible = false;
                    debugger;
                    ctx.$dom.off(document.body, 'click', handle);
                }
            }

            this.$dom.on(document.body, 'click', handle);
        }
    }
};
</script>

<style lang="scss">
.q-aside {
    .el-header {
        border-bottom: 1px solid #2e3743;
    }

    .q-menu {
        padding: 0;

        .q-menu-wrapper {
            overflow-y: auto;
        }

        .el-menu {
            border-right: 0px;
        }

        .q-menu-list {
            .el-submenu__title {
                color: #c0ccda;
                background-color: #35404f;
            }
            .el-submenu {
                border-bottom: 1px solid #2e3743;
            }
        }

        .q-submenu {
            .el-submenu__title,
            .el-menu-item {
                color: #c0ccda;
                background-color: #2e3743;
            }
        }
    }

    .q-aside-footer {
        padding: 0;
        width: 100%;
        border-top: 1px solid #2e3743;

        .q-footer-menu {
            float: left;
            width: 33.3%;
            font-size: 14px;
            line-height: 50px;
            color: #c0ccda;
            text-align: center;
            border-right: 1px solid #2e3743;
            background: #35404f;
            transition: all 0.2s ease-in-out;
            cursor: pointer;

            &.active {
                background-color: #2dca93;
                color: #fff;
                font-weight: 400;
                border-right-color: #2dca93;
            }
        }

        .q-bookmark-wrapper {
            position: fixed;
            left: 240px;
            top: 65px;
            width: 0;
            height: calc(100vh - 65px);
            text-align: left;
            background: #fff;
            z-index: 1000;
            overflow: hidden;
            transition: width 0.5s ease;

            &.active {
                width: 320px;
            }

            .q-bookmark {
                width: 320px;
            }

            .q-bookmark-hd {
                padding-left: 15px;
                height: 57px;
                font-size: 16px;
                line-height: 57px;
                color: #4c535a;
                background: #f6f8fa;
            }

            .q-bookmark-bd {
                .el-collapse {
                    border-bottom: 0;
                }
                .el-collapse-item__header {
                    padding-left: 20px;
                    border-bottom: 1px solid #ebeef5;
                    height: auto;
                    background-color: #d7dee6;
                }

                .el-collapse-item__content {
                    padding-bottom: 0;
                }

                .q-bookmark-item {
                    position: relative;
                    padding-left: 20px;
                    height: 51px;
                    border-bottom: 1px solid #ebeef5;

                    .q-bookmark-title {
                        padding-right: 50px;

                        h3 {
                            display: inline-block;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }

                        p {
                            font-size: 12px;
                            color: #899db4;
                        }
                    }

                    .q-bookmark-edit {
                        position: absolute;
                        top: 20px;
                        right: 15px;
                    }
                }
            }
        }
    }
}
</style>

