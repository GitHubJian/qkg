<template>
    <div class="q-sidebar">
        <div class="q-sidebar-hd">
            <a class="q-logo"></a>
        </div>
        <div class="q-sidebar-bd">
            <div class="q-menu-list">
                <section v-for="(option, i) in menuList" :key="i" class="q-menu-item">
                    <h4 class="q-menu-hd">
                        <span class="q-menu-action" @click="showFirstMenuList(i)">
                            <i class="icon fa" :class="!option.active ? 'fa-angle-right' : 'fa-angle-down'"></i>
                        </span>
                        <span class="q-menu-icon">
                            <i class="icon fa" :class="'fa-'+option.icon"></i>
                        </span>
                        <span class="q-menu-title">{{option.name}}</span>
                        <span class="q-menu-other">
                            <el-dropdown @command="handleCreateCommand">
                                <span class="el-dropdown-link">
                                    <i class="fa fa-plus-square-o"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item command="group">
                                        <i class="fa fa-plus-square-o"></i>
                                        新建分组
                                    </el-dropdown-item>
                                    <el-dropdown-item command="overview">
                                        <i class="fa fa-plus-square-o"></i>
                                        新建概览
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </span>
                    </h4>
                    <div class="q-menu-bd q-menu-bd-1" :class="{'active': option.active}">
                        <template v-for="(group, j) in option.children">
                            <div class="q-menu-group" :key="j">
                                <div class="group q-menu-item">
                                    <h5 class="q-menu-hd q-menu-hd2">
                                        <span class="q-menu-action q-menu-action-2" @click="showSecondMenuList(i, j)">
                                            <i class="icon fa" :class="!group.active ? 'fa-angle-right' : 'fa-angle-down'"></i>
                                        </span>
                                        <span class="q-menu-icon">
                                            <i class="fa" :class="'fa-' + group.icon"></i>
                                        </span>
                                        <span class="q-menu-title">{{option.name}}</span>
                                        <span class="q-menu-other"></span>
                                    </h5>
                                    <ul class="list-unstyled q-menu-bd q-menu-bd-2" :class="{'active': group.active}">
                                        <template v-for="(li, z) in group.children">
                                            <li class="q-menu-item" :key="z">
                                                <h6 class="q-menu-hd q-menu-hd3" @click="linkNewTab(li.href)">
                                                    <i class="fa" :class="'fa-'+li.icon"></i>
                                                    <span class="q-menu-title q-submenu-title">{{li.name}}</span>
                                                </h6>
                                            </li>
                                        </template>
                                    </ul>
                                </div>
                            </div>
                        </template>
                    </div>
                </section>
            </div>
        </div>
        <div class="q-sidebar-ft">
            <div class="q-menu-btm">
                <a>
                    <span>元数据</span>
                </a>
                <a @click="showBookmark" :class="{'active':isShowBookmark}">
                    <span>书签</span>
                </a>
            </div>
        </div>
        <div class="q-bookmark-wrap" :class="{'active':isShowBookmark}">
            <Bookmark/>
        </div>
        <el-dialog title="新建分组" :visible.sync="isCreateGroupVisible">
            <el-form :model="createGroupForm">
                <el-form-item label="分组名称" label-width="120px">
                    <el-input v-model="createGroupForm.name" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="isCreateGroupVisible = false">取 消</el-button>
                <el-button type="primary" @click="isCreateGroupVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>


@import './vars.scss';

.q-menu-wrapper {
    overflow-y: auto;
}

.q-sidebar {
    width: 100%;
    height: 100%;

    .q-sidebar-hd {
        height: $logoHeight * 1px;
    }

    .q-sidebar-bd {
        height: calc(100% - #{$logoHeight * 1px});
        overflow-y: auto;
    }

    .q-sidebar-ft {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 240px;
        height: 50px;
        background: #35404f;
        transition: all 0.15s linear;
        border-left: 1px solid #35404f;
        overflow-x: hidden;
        border-top: 1px solid #2e3743;
    }
}

.q-logo {
    display: inline-block;
    width: 130px;
    height: $logoHeight * 1px;
    background: url(/res/img/theme/logo.svg) 10px center no-repeat red;
    background-size: 110px auto;
    transform: scale(0.85);
    transition: transform 0.3s;
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

            &.q-menu-hd2 {
                font-size: 13px;
            }

            &.q-menu-hd3 {
                padding-left: 37px;
                font-size: 12px;
            }

            .q-menu-action {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;

                &.q-menu-action-2 {
                    left: 29px;
                }

                .icon {
                    float: right;
                    margin-right: 12px;
                    color: #99a9bf;
                    line-height: 48px;
                    vertical-align: sub;
                }
            }

            .q-menu-other {
                position: relative;
                right: 44px;
                z-index: 2;
                float: right;
                font-size: 16px;
                line-height: 48px;

                .icon {
                    &::before {
                        content: '';
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        background: blue;
                    }
                }
            }
        }

        .q-menu-bd {
            display: none;
            background-color: #2e3743;

            &.q-menu-bd-1 {
                &.active {
                    display: block;
                }
            }

            &.q-menu-bd-2 {
                &.active {
                    display: block;
                }
            }
        }
    }
}

.q-menu-btm {
    & > a {
        position: relative;
        display: inline-block;
        width: 33.3%;
        height: 100%;
        line-height: 50px;
        color: #c0ccda;
        text-align: center;
        border-right: 1px solid #2e3743;
        background: #35404f;
        transition: all 0.2s ease-in-out;

        &.active {
            background-color: #2dca93;
            color: #fff;
            font-weight: 400;
            border-right-color: #2dca93;
        }
    }
}

.q-bookmark-wrap {
    position: fixed;
    left: $asideWidth * 1px;
    top: $navHeight * 1px;
    z-index: 1019;
    display: none;
    width: 320px;
    height: calc(100% - #{$navHeight * 1px});
    box-shadow: 5px 0 10px rgba(0, 0, 0, 0.2);

    &.active {
        display: block;
    }
}