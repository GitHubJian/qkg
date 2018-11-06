<template>
    <div class="filter-group-control">
        <div class="filter-group-relation">
            <div class="relation-topline"></div>
            <el-button>且</el-button>
            <div class="relation-bottomline"></div>
        </div>
        <div class="filter-contain">
            <div class="filter-item">
                <div class="filter-prototype filter-seletor">
                    <el-select v-model="seletor"></el-select>
                </div>
                <div class="filter-prototype filter-function">
                    <el-select v-model="func"></el-select>
                </div>
                <div class="filter-prototype filter-value">
                    <div class="number-equal number-notequal">
                        <el-input v-model="number"></el-input>
                        <i class="icon fa fa-search"></i>
                        <el-popover>
                            <i class="fa fa-search" slot="reference"></i>
                            <div class="">
                                这是一段内容这是一段内容确定删除吗？
                            </div>
                        </el-popover>
                    </div>
                </div>
            </div>
            <div class="filter-item">
                <div class="filter-prototype filter-seletor">
                    <el-select v-model="seletor"></el-select>
                </div>
                <div class="filter-prototype filter-function">
                    <el-select v-model="func"></el-select>
                </div>
                <div class="filter-prototype filter-value">
                    <div class="number-equal number-notequal">
                        <el-input v-model="number"></el-input>
                        <i class="icon fa fa-search"></i>
                        <el-popover>
                            <i class="fa fa-search" slot="reference"></i>
                            <div class="">
                                这是一段内容这是一段内容确定删除吗？
                            </div>
                        </el-popover>
                    </div>
                </div>
            </div>
            <div class="filter-item">
                <div class="filter-prototype filter-seletor">
                    <el-select v-model="seletor"></el-select>
                </div>
                <div class="filter-prototype filter-function">
                    <el-select v-model="func"></el-select>
                </div>
                <div class="filter-prototype filter-value">
                    <div class="number-equal number-notequal">
                        <el-input v-model="number"></el-input>
                        <i class="icon fa fa-search"></i>
                        <el-popover>
                            <i class="fa fa-search" slot="reference"></i>
                            <div class="">
                                这是一段内容这是一段内容确定删除吗？
                            </div>
                        </el-popover>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            seletor: '',
            func: '',
            number: ''
        };
    }
};
</script>

<style lang="scss">
.filter-group-control {
    position: relative;
    margin-left: 36px;
    padding-left: 20px;
    border-left: 2px solid #6fd383;
    background: rgba(85, 159, 240, 0.12);

    .filter-group-relation {
        position: absolute;
        width: 40px;
        height: 100%;

        .relation-topline,
        .relation-bottomline {
            margin-left: 20px;
            height: calc(50% - 48px);
            width: 100%;
        }

        .relation-topline {
            margin-top: 30px;
            border-left: 1px solid #ccc;
            border-top: 1px solid #ccc;
        }

        .el-button {
            padding: 10px 12px;
        }

        .relation-bottomline {
            border-left: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
        }
    }

    .filter-contain {
        padding-left: 66px;
        padding-top: 7px;
        padding-bottom: 7px;

        .filter-item {
            padding: 4px 0;

            &::after {
                content: '';
                display: table;
                clear: both;
            }
            .filter-prototype {
                float: left;
                margin-right: 20px;
                width: 200px;
            }

            .filter-seletor {
                .el-selecte {
                    width: 100%;
                }
            }

            .filter-function {
                .el-selecte {
                    width: 100%;
                }
            }

            .filter-value {
                width: auto;

                .number-equal {
                    float: left;

                    .el-input {
                        margin-right: 10px;
                        width: 250px;
                    }
                    .icon {
                        margin-right: 10px;
                    }
                }
            }
        }
    }
}
</style>


