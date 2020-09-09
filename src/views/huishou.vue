<template>
<div class="ding">
    <div class="jian1">
        回收站
    </div>
    <router-link tag="div" to="/shouye/lunbo">
        <div class="ten2">
            <i class="el-icon-right"></i><span>返回</span>
        </div>
    </router-link>
    <div class="jian2">
        <div class="jian3">
            <i class="el-icon-menu"></i>筛选
        </div>
        <div class="shou1">
            <span class="shou2">输入搜索</span><input v-model="zhi1" class="shou4" type="text" placeholder="输入轮播标题...">
            <span class="shou2">上传时间</span>
            <div class="block">
                <el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions">
                </el-date-picker>
            </div>
            <div class="shou6" @click="searchAutomobile">
                <i class="el-icon-s-open"></i><span>筛选</span>
            </div>
            <div class="shou0" @click="qin">
                清空筛选条件
            </div>
        </div>
    </div>
    <div class="tian1">
        <div class="jian3">
            <i class="el-icon-s-unfold"></i>轮播图列表
        </div>
        <div class="tian4">
            <el-table ref="multipleTable" :header-cell-style="rowClass" :cell-style="cellStyle" :data="showTable" tooltip-effect="dark" style="width: 100%;" @selection-change='selectRow'>
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="name" label="轮播图名称" width="140" style="text-align: center;">
                </el-table-column>
                <el-table-column prop="img" label="缩略图" width="220" style="text-align: center;">
                    <template slot-scope="scope">
                        <img :src="scope.row.img" min-width="70" height="70" />
                    </template>
                </el-table-column>
                <el-table-column label="日期" width="120">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column prop="address" label="上传人" show-overflow-tooltip>
                </el-table-column>
                <el-table-column label="操作" width="250">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">恢复</el-button>
                        <el-button type="text" size="small" @click.prevent="delData()">彻底删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-col :span="24" class="toolbar" style="text-align:center;margin-top:20px;" v-if="das">
                <el-pagination background @current-change="handleCurrentChange" layout="total,prev, pager, next" :page-size="pagesize" :total="this.tableData.length">
                </el-pagination>
            </el-col>
            <el-col :span="24" class="toolbar" style="text-align:center;margin-top:20px;" v-else>
                <el-pagination background @current-change="handleCurrentChangelp" layout="total,prev, pager, next" :page-size="pagesize" :total="this.filterAutomobileInfs.length">
                </el-pagination>
            </el-col>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            zhi1: "",
            das: true,
            pickerOptions: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            value2: '',
            pagesize: 2, //设置每页显示条目个数为10
            currentPage: 1, //设置当前页默认为1
            tableData: [],
            multipleSelection: [],
            filterAutomobileInfs: [],
            selectlistRow: []
        };
    },
    activated() {
        console.log(this.$store.state['del'])

        for (let i = 0; i < this.$store.state['del'].length; i++) {
            let bo = true;
            for (let k = 0; k < this.tableData.length; k++) {
                if (this.$store.state['del'][i].id == this.tableData[k].id) {
                    bo = false

                }
            }
            console.log(bo)
            if (bo) {
                this.$store.state['del'][i]['index'] = this.tableData.length + 1;
                this.tableData.push(this.$store.state['del'][i]);
            }

        }
    },
    computed: {
        //showTable计算属性通过slice方法计算表格当前应显示的数据
        showTable() {
            if (this.das) {
                return this.tableData.slice(
                    (this.currentPage - 1) * this.pagesize,
                    this.currentPage * this.pagesize
                );
            } else {
                return this.filterAutomobileInfs.slice(
                    (this.currentPage - 1) * this.pagesize,
                    this.currentPage * this.pagesize
                );
            }
        }
    },
    methods: {
        // 获取表格选中时的数据
        selectRow(val) {
            this.selectlistRow = val
            console.log(val);
        },
        // 删除方法
        // 删除选中行
        delData() {
            for (let i = 0; i < this.selectlistRow.length; i++) {
                let val = this.selectlistRow
                // 获取选中行的索引的方法
                // 遍历表格中tableData数据和选中的val数据，比较它们的index,相等则输出选中行的索引
                // rowNum的作用主要是为了让每一行有一个唯一的数据，方便比较，可以根据个人的开发需求从后台传入特定的数据
                val.forEach((val) => {
                    this.tableData.forEach((v, i) => {
                        if (val.index === v.index) {
                            // i 为选中的索引
                            this.tableData.splice(i, 1)
                        }
                    })
                })
            }

        },
        qin() {
            this.zhi1 = "";
            this.value2 = "";
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        rowClass() {
            return "text-align:center"
        },
        cellStyle() {
            return "text-align:center"
        },
        //设置当前页为点击页
        handleCurrentChange(currentPage) {
            this.currentPage = currentPage;
        },
        handleCurrentChangelp(currentPage) {
            this.currentPage = currentPage;
        },
        searchAutomobile() {
            //currentPage赋值为1
            this.currentPage = 1;
            //筛选方法
            this.filterAutomobile();

        },
        filterAutomobile() {
            //获取三个选择输入框的内容字符串
            let filtersName = this.zhi1;
            let tiems = this.value2;
            console.log(tiems[0], tiems[1]);
            //筛选原始数组并赋值给filtersAutomobile数组
            let filtersAutomobile = this.tableData.filter(item => {
                //定义筛选条件，默认为true，这样就可以让不符合动态选择条件时不影响筛选条件
                var isFiltersName = true;
                //符合动态选择条件就给筛选条件赋值
                if (filtersName.length != 0) {
                    isFiltersName = item.name.indexOf(filtersName) != -1;
                    this.das = false
                }
                //返回筛选条件
                return isFiltersName;
            });
            //把筛选后的数组赋值给列表显示数组
            this.filterAutomobileInfs = filtersAutomobile;
        },
    }
}
</script>

<style scoped>
.ding {
    /*float: left;
    margin-left: 23%;
    margin-top: 8%;*/
    position: absolute;
    top: 60px;
    left: 320px;
}

.jian1 {
    font-size: 25px;
    font-weight: bold;
    color: blue;
    margin-top: 10px;
}

.jian2 {
    width: 1000px;
    height: 130px;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(228, 228, 228, 1);
    margin-top: 20px;
}

.jian3 {
    margin-top: 10px;
    margin-left: 10px;
    color: #666666;
    font-weight: 400;
}

.jian3 i {
    margin-left: 10px;
    margin-right: 10px;
}

.shou1 {
    margin-top: 25px;
}

.shou2 {
    font-size: 15px;
    margin-left: 20px;
    margin-right: 20px;
}

.block {
    margin-left: 400px;
    margin-top: -28px;
}

.shou6 {
    width: 80px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: white;
    background-color: rgba(145, 55, 243, 1);
    border-radius: 4px;
    cursor: pointer;
    float: right;
    margin-top: -33px;
    margin-right: 150px;
}

.shou0 {
    font-size: 14px;
    float: right;
    margin-top: -30px;
    cursor: pointer;
    margin-right: 50px;
    color: #9137F3;
}

.tian1 {
    width: 1000px;
    height: 350px;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(228, 228, 228, 1);
    margin-top: 20px;
    margin-bottom: 10px;
}

.tian2 {
    width: 120px;
    height: 30px;
    font-size: 16px;
    text-align: center;
    line-height: 30px;
    color: rgba(145, 55, 243, 1);
    background-color: white;
    border-radius: 4px;
    cursor: pointer;
    float: right;
    margin-top: -22px;
    margin-right: 160px;
    border: 1px solid rgba(145, 55, 243, 1);
}

.tian3 {
    width: 120px;
    height: 30px;
    font-size: 16px;
    text-align: center;
    line-height: 30px;
    color: rgba(145, 55, 243, 1);
    background-color: white;
    border-radius: 4px;
    cursor: pointer;
    float: right;
    margin-top: -22px;
    margin-right: -250px;
    border: 1px solid rgba(145, 55, 243, 1);
}

.el-table th>.cell {
    text-align: center;
}

.el-table .cell {
    text-align: center;
}

.ten2 {
    width: 120px;
    height: 30px;
    font-size: 16px;
    text-align: center;
    line-height: 30px;
    color: rgba(145, 55, 243, 1);
    background-color: white;
    border-radius: 4px;
    cursor: pointer;
    float: left;
    margin-top: -30px;
    margin-left: 830px;
    border: 1px solid rgba(145, 55, 243, 1);
}
</style>
