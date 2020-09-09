<template>
<div>
    <div class="zong9">
        <div class="tou">
            <div class="tou1">
                <img src="img/6.png" class="img1">
                <a>非翔教育</a>
            </div>
            <i class="el-icon-message-solid" id="el1"></i>
            <div class="tou2">
                <img src="img/5.png">
                <a>admin</a>
            </div>
        </div>

        <el-row class="tac">
            <el-col :span="12">
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">

                    <el-menu-item index="2">
                        <i class="el-icon-s-home" style="color: #9137f3"></i>
                        <span slot="title">
                            <router-link to="/shou" tag="span">首页</router-link>
                        </span>
                    </el-menu-item>

                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-collection" style="color: #9137f3"></i>
                            <span>文章管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">
                                <router-link to="/lunbo" tag="span">轮播图管理</router-link>
                            </el-menu-item>
                            <el-menu-item index="1-2">
                                <router-link to="/kecheng" tag="span">课程管理</router-link>
                            </el-menu-item>
                            <el-menu-item index="1-3">
                                <router-link to="/jiaoyu" tag="span">教育头条</router-link>
                            </el-menu-item>
                            <el-menu-item index="1-4">
                                <router-link to="/huodong" tag="span">活动列表</router-link>
                            </el-menu-item>
                            <el-menu-item index="1-5">
                                <router-link to="/mingxing" tag="span">明星教师</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-menu-item index="3">
                        <i class="el-icon-document" style="color: #9137f3"></i>
                        <span slot="title">
                            <router-link to="/dingdan" tag="span">订单管理</router-link>
                        </span>
                    </el-menu-item>

                    <el-menu-item index="4">
                        <i class="el-icon-user" style="color: #9137f3"></i>
                        <span slot="title">
                            <router-link to="/yonghu" tag="span">用户管理</router-link>
                        </span>
                    </el-menu-item>

                    <el-menu-item index="5">
                        <i class="el-icon-c-scale-to-original" style="color: #9137f3"></i>
                        <span slot="title">
                            <router-link to="/caiwu" tag="span">财务管理</router-link>
                        </span>
                    </el-menu-item>

                    <!--<el-menu-item index="6">
                        <i class="el-icon-service" style="color: #9137f3"></i>
                        <span slot="title">客服系统</span>
                    </el-menu-item>-->

                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-setting" style="color: #9137f3"></i>
                            <span>设置</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">
                                <router-link to="/tongyong" tag="span">通用设置</router-link>
                            </el-menu-item>
                            <el-menu-item index="2-2">
                                <router-link to="/guanyu" tag="span">关于我们</router-link>
                            </el-menu-item>
                            <el-menu-item index="2-3">
                                <router-link to="/yuangong" tag="span">员工管理</router-link>
                            </el-menu-item>
                            <el-menu-item index="2-4">
                                <router-link to="/juese" tag="span">角色管理</router-link>
                            </el-menu-item>
                            <el-menu-item index="2-5">
                                <router-link to="/caozuo" tag="span">操作日志</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style scoped>
.zong9 {
    border: 1px solid black;
    width: 99.8%;
    height: 720px;
    position: fixed;
    top: 0;
    left: 0;
}

.tou {
    width: 100%;
    height: 60px;
    background-color: #9137f3;
}

.tou1 {
    background-color: white;
    width: 211px;
    height: 60px;
}

.img1 {
    border: 1px solid #9137f3;
    background-color: #9137f3;
    padding: 10px 10px;
    border-radius: 5px;
    margin-left: 30px;
    margin-top: 10px;
}

.tou1 a {
    font-size: 24px;
    font-weight: bold;
    color: #9137f3;
    position: relative;
    top: -10px;
    left: 10px;
}

#el1 {
    position: absolute;
    top: 25px;
    left: 1300px;
    color: white;
}

.tou2 {
    width: 120px;
    height: 30px;
    position: absolute;
    top: 15px;
    left: 1350px;
}

.tou2 a {
    color: white;
    position: relative;
    top: -10px;
    left: 10px;
    font-weight: bold;
}

.tac {
    width: 422px;
}
</style>
