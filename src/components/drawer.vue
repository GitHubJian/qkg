<template>
    <div class="drawer-wrapper">
        <div class="drawer-mark">

        </div>
        <div class="drawer-container">
            <div class="drawer-header">
                {{title}}
            </div>
            <div class="drawer-content">
                <div class="drawer-content-search">
                    <el-form v-model="form" label-width="120px">
                        <el-form-item label="漏斗名称">
                            <el-input v-model="value1"></el-input>
                        </el-form-item>
                        <el-form-item label="漏斗窗口期">
                            <el-select v-model="value2"></el-select>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="drawer-content-main">
                    <h3>漏斗步骤
                        <span>
                            <el-switch></el-switch>
                        </span>
                    </h3>
                    <el-row>
                        <el-col>
                            <span>1</span>
                            <el-select></el-select>
                            <i class="fa fa-search"></i>
                            <span></span>
                            <el-popover>
                                <i slot="refrence" class="fa fa-search"></i>
                            </el-popover>
                        </el-col>
                    </el-row>
                </div>
                <div class="drawer-content-search">
                    <el-form v-model="form" label-width="120px">
                        <el-form-item label="漏斗名称">
                            <el-input v-model="value1"></el-input>
                        </el-form-item>
                        <el-form-item label="漏斗窗口期">
                            <el-select v-model="value2"></el-select>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="drawer-content-main">
                    <h3>漏斗步骤
                        <span>
                            <el-switch></el-switch>
                        </span>
                    </h3>
                    <el-row>
                        <el-col>
                            <span>1</span>
                            <el-select></el-select>
                            <i class="fa fa-search"></i>
                            <span></span>
                            <el-popover>
                                <i slot="refrence" class="fa fa-search"></i>
                            </el-popover>
                        </el-col>
                    </el-row>
                </div>
                <div class="drawer-content-search">
                    <el-form v-model="form" label-width="120px">
                        <el-form-item label="漏斗名称">
                            <el-input v-model="value1"></el-input>
                        </el-form-item>
                        <el-form-item label="漏斗窗口期">
                            <el-select v-model="value2"></el-select>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="drawer-content-main">
                    <h3>漏斗步骤
                        <span>
                            <el-switch></el-switch>
                        </span>
                    </h3>
                    <el-row>
                        <el-col>
                            <span>1</span>
                            <el-select></el-select>
                            <i class="fa fa-search"></i>
                            <span></span>
                            <el-popover>
                                <i slot="refrence" class="fa fa-search"></i>
                            </el-popover>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="drawer-footer">
                <el-button>取消</el-button>
                <el-button type="primary">保存</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '创建',
            form: {},
            value1: '',
            value2: ''
        };
    }
};
</script>

<style lang="scss">
.drawer-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .drawer-mark {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1030;
        width: 100%;
        height: 100%;
        background: rgb(0, 0, 0);
        opacity: 0.7;
    }

    .drawer-container {
        float: right;
        position: relative;
        z-index: 1031;
        width: 800px;
        height: 100%;
        background-color: #fff;

        .drawer-header {
            padding: 0 20px;
            height: 50px;
            font-size: 20px;
            line-height: 50px;
            color: #ececee;
            background: #202742;
        }

        .drawer-content {
            height: calc(100vh - 50px - 60px);
            overflow-y: auto;

            .drawer-content-search {
                padding-top: 22px;
                border-bottom: 1px solid #ececee;
                background: #f4f4f5;
            }
        }

        .drawer-footer {
            padding: 10px 20px;
            background: #dfe7f0;
            text-align: right;
        }
    }
}
</style>

