<template>
    <layout>
        <div slot="content">
            <section class="q-meta-container">
                <el-tabs type="border-card">
                    <el-tab-pane>
                        <div slot="label" class="q-meta-tabs">
                            <h4>元事件</h4>
                            <p>在代码中追踪的原始事件</p>
                        </div>
                        <div class="q-meta-panel">
                            <div class="q-meta-panel-hd">
                                <div class="q-mp-hd-title">当前条件共有 40 个事件</div>
                                <div class="q-mp-hd-selector">
                                    <el-select v-model="tagsSelected" multiple placholder="标签筛选">
                                        <el-option v-for="(tag, i) in tagsOptions" :key="i" :value="tag.value" :label="tag.label"></el-option>
                                    </el-select>
                                    <el-input v-model="tagsInputed" prefix-icon="el-icon-search"></el-input>
                                </div>
                            </div>
                            <div class="q-meta-panel-bd">
                                <el-table :data="metaDataList" border>
                                    <el-table-column label="name" prop="name"></el-table-column>
                                    <el-table-column label="status">
                                        <template slot-scope="scope">
                                            <el-switch v-model="scope.row.status" active-color="#13ce66" inactive-color="#ff4949">
                                            </el-switch>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                            <div class="q-meta-panel-ft">
                                <div class="q-pager-total">
                                    共 41 行，当前展示 1-10 行
                                </div>
                                <div class="q-pager">
                                    <el-pagination background layout="prev, pager, next" :page-size="20" :total="100"></el-pagination>
                                </div>
                            </div>
                        </div><div class="q-meta-panel">
                            <div class="q-meta-panel-hd">
                                <div class="q-mp-hd-title">当前条件共有 40 个事件</div>
                                <div class="q-mp-hd-selector">
                                    <el-select v-model="tagsSelected" multiple placholder="标签筛选">
                                        <el-option v-for="(tag, i) in tagsOptions" :key="i" :value="tag.value" :label="tag.label"></el-option>
                                    </el-select>
                                    <el-input v-model="tagsInputed" prefix-icon="el-icon-search"></el-input>
                                </div>
                            </div>
                            <div class="q-meta-panel-bd">
                                <el-table :data="metaDataList" border>
                                    <el-table-column label="name" prop="name"></el-table-column>
                                    <el-table-column label="status">
                                        <template slot-scope="scope">
                                            <el-switch v-model="scope.row.status" active-color="#13ce66" inactive-color="#ff4949">
                                            </el-switch>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                            <div class="q-meta-panel-ft">
                                <div class="q-pager-total">
                                    共 41 行，当前展示 1-10 行
                                </div>
                                <div class="q-pager">
                                    <el-pagination background layout="prev, pager, next" :page-size="20" :total="100"></el-pagination>
                                </div>
                            </div>
                        </div><div class="q-meta-panel">
                            <div class="q-meta-panel-hd">
                                <div class="q-mp-hd-title">当前条件共有 40 个事件</div>
                                <div class="q-mp-hd-selector">
                                    <el-select v-model="tagsSelected" multiple placholder="标签筛选">
                                        <el-option v-for="(tag, i) in tagsOptions" :key="i" :value="tag.value" :label="tag.label"></el-option>
                                    </el-select>
                                    <el-input v-model="tagsInputed" prefix-icon="el-icon-search"></el-input>
                                </div>
                            </div>
                            <div class="q-meta-panel-bd">
                                <el-table :data="metaDataList" border>
                                    <el-table-column label="name" prop="name"></el-table-column>
                                    <el-table-column label="status">
                                        <template slot-scope="scope">
                                            <el-switch v-model="scope.row.status" active-color="#13ce66" inactive-color="#ff4949">
                                            </el-switch>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                            <div class="q-meta-panel-ft">
                                <div class="q-pager-total">
                                    共 41 行，当前展示 1-10 行
                                </div>
                                <div class="q-pager">
                                    <el-pagination background layout="prev, pager, next" :page-size="20" :total="100"></el-pagination>
                                </div>
                            </div>
                        </div><div class="q-meta-panel">
                            <div class="q-meta-panel-hd">
                                <div class="q-mp-hd-title">当前条件共有 40 个事件</div>
                                <div class="q-mp-hd-selector">
                                    <el-select v-model="tagsSelected" multiple placholder="标签筛选">
                                        <el-option v-for="(tag, i) in tagsOptions" :key="i" :value="tag.value" :label="tag.label"></el-option>
                                    </el-select>
                                    <el-input v-model="tagsInputed" prefix-icon="el-icon-search"></el-input>
                                </div>
                            </div>
                            <div class="q-meta-panel-bd">
                                <el-table :data="metaDataList" border>
                                    <el-table-column label="name" prop="name"></el-table-column>
                                    <el-table-column label="status">
                                        <template slot-scope="scope">
                                            <el-switch v-model="scope.row.status" active-color="#13ce66" inactive-color="#ff4949">
                                            </el-switch>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                            <div class="q-meta-panel-ft">
                                <div class="q-pager-total">
                                    共 41 行，当前展示 1-10 行
                                </div>
                                <div class="q-pager">
                                    <el-pagination background layout="prev, pager, next" :page-size="20" :total="100"></el-pagination>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane>
                        <div slot="label" class="q-meta-tabs">
                            <h4>元事件</h4>
                            <p>在代码中追踪的原始事件</p>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane>
                        <div slot="label" class="q-meta-tabs">
                            <h4>元事件</h4>
                            <p>在代码中追踪的原始事件</p>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane>
                        <div slot="label" class="q-meta-tabs">
                            <h4>元事件</h4>
                            <p>在代码中追踪的原始事件</p>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </section>
        </div>
    </layout>
</template>

<script>
import { tagsOptions } from './../../emnus';

export default {
    data() {
        return {
            tagsOptions,
            tagsSelected: [],
            tagsInputed: '',
            metaDataList: [
                {
                    name: '$app',
                    showname: '$app',
                    tag: 'tag',
                    status: true,
                    marks: ''
                }
            ]
        };
    }
};
</script>

<style lang="scss">
.q-meta-container {
    .el-tabs__item {
        padding: 0 !important;
        height: auto;
        padding: 0;

        &.is-active {
            color: #2dca93;
            .q-meta-tabs {
                background: #f9f9fa;
            }
        }
    }

    .q-meta-tabs {
        width: 180px;
        padding: 10px 0;
        text-align: center;
        background: #ececee;
        transition: background 0.2s;

        h4 {
            font-size: 16px;
            font-weight: 400;
        }

        p {
            font-size: 12px;
            color: #777c7c;
        }
    }
}

.q-meta-panel {
    .q-meta-panel-hd {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;

        .q-mp-hd-title {
            height: 40px;
            font-size: 14px;
            line-height: 40px;
        }

        .q-mp-hd-selector {
            margin-left: auto;

            &::after {
                content: '';
                display: table;
                clear: both;
            }
            .el-select,
            .el-input {
                float: left;
            }

            .el-input {
                margin-left: 20px;
                width: 200px;
            }
        }
    }

    .q-meta-panel-bd {
        margin-top: 10px;
    }
}

.q-meta-panel-ft {
    margin-top: 10px;

    &::after {
        content: '';
        display: table;
        clear: both;
    }
    .q-pager-total {
        float: left;
        line-height: 40px;
        font-size: 14px;
    }

    .q-pager {
        float: right;
    }
}
</style>
