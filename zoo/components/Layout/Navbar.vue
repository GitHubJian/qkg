<template>
    <nav class="navbar">
        <div class="navbar-brand" href="#">
            <span :data-id="currentProject.value">{{currentProject.label}}</span>
            <i class="el-icon-edit" @click="isSelectProjectVisible = true"></i>
        </div>
        <ul class="navbar-nav flex-row ml-lg-auto">
            <li class="nav-item">
                <el-button type="text" icon="el-icon-search">搜索用户</el-button>
            </li>
            <li class="nav-item">
                <el-button type="text">帮助文档</el-button>
            </li>
            <li class="nav-item">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <i class="fa fa-user"></i>
                        <span>ws.xiao</span>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </li>
        </ul>
        <el-dialog title="项目选择" :visible="isSelectProjectVisible" width="30%" @close="isSelectProjectVisible = false">
            <el-form :model="selectProjectForm" label-width="120px">
                <el-form-item label="项目名称">
                    <el-select v-model="selectProjectForm.id">
                        <el-option v-for="(option, i) in allProjectList" :key="i" :label="option.label" :value="option.value"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer">
                <el-button @click="isSelectProjectVisible = false">取消</el-button>
                <el-button type="primary" @click="handleSelectProject">确定</el-button>
            </div>
        </el-dialog>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            currentProject: {
                label: '',
                value: ''
            },
            isSelectProjectVisible: false,
            selectProjectForm: {
                id: ''
            },
            allProjectList: []
        };
    },
    mounted() {
        this.getAllProject().then(res => {
            const project = res.find(v => v.value === 1);

            this.currentProject = {
                ...project
            };
        });
    },
    methods: {
        handleSelectProject() {
            if (this.selectProjectForm.id) {
                const project = this.allProjectList.find(
                    v => v.value === this.selectProjectForm.id
                );

                this.currentProject = {
                    ...project
                };
            }

            this.isSelectProjectVisible = false;
        },
        getAllProject() {
            const arr = [
                {
                    label: '项目1',
                    value: 1
                },
                {
                    label: '项目2',
                    value: 2
                },
                {
                    label: '项目3',
                    value: 3
                }
            ];
            return Promise.resolve(arr).then(res => {
                return (this.allProjectList = res);
            });
        }
    }
};
</script>

<style lang="scss">
.navbar {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;

    .navbar-brand {
        font-size: 24px;
        line-height: 55px;

        .el-icon-edit {
            margin-left: 12px;
            font-size: 14px;
            cursor: pointer;
        }
    }

    .navbar-nav {
        margin-left: auto;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;

        .nav-item {
            margin-left: 40px;
            padding-top: 7px;

            .el-button--text {
                color: #606266;
            }

            .el-dropdown {
                padding: 9px 20px;
            }
        }
    }
}
</style>


