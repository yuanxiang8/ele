<template>
<div class="zongg" style="background-image:url('img/bj.png')">
    <div class="tou">
        <img src="img/1.png" class="img1">
        <div class="zi">
            <p>登录</p>
            <p>非翔教育后台管理系统</p>
        </div>
        <div class="zhong">
            <input type="text" placeholder="请输入账号" id="te1" v-model="zhanghao" required />
        </div>
        <div class="zhong1">
            <input type="password" placeholder="请输入密码" id="te2" v-model="pwd" required />
        </div>
        <div class="zhong11"><span id="mo">{{error}}</span></div>
        <div class="zhong2">
            <input type="button" value="登录" id="bu1" @click="tologin" />
        </div>

    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            zhanghao: '',
            pwd: '',
            error: ''
        }
    },
    methods: {
        tologin() {
            if (this.zhanghao != '' || this.pwd != '') { //进入if里面表示用户名和密码不为空
                if (this.zhanghao == 'admin' && this.pwd == '123456') { //登录成功进入if
                    this.$router.push({
                        path: '/shou'
                    })
                } else {
                    this.error = "账号或密码不正确"
                }
            } else { //为空
                this.error = "账号或密码不正确"
            }
        },
    }
}
</script>

<style scoped>
.zongg {
    overflow: hidden;
    overflow-x: hidden;
    height: 722px;
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
}

.tou {
    border: 1px solid white;
    width: 640px;
    height: 350px;
    background-color: white;
    border-radius: 5px;
    margin-left: 580px;
    margin-top: 200px;
}

.img1 {
    width: 280px;
    margin-left: 20px;
    margin-top: 40px;
}

.zi {
    margin-left: 320px;
    margin-top: -240px;
    width: 240px;
}

.zi>p:nth-child(1) {
    color: purple;
    font-size: 24px;
    font-weight: bold;
    margin-left: 125px;
}

.zi>p:nth-child(2) {
    color: purple;
    margin-left: 85px;
    font-size: 12px;
    font-weight: bold;
}

.zhong {
    display: flex;
    width: 240px;
    height: 40px;
    margin-left: 340px;
    margin-top: 20px;
}

#te1 {
    width: 240px;
    height: 40px;
    border-radius: 5px;
    outline: none;
}

.zhong1 {
    display: flex;
    width: 240px;
    height: 40px;
    margin-left: 340px;
    margin-top: 20px;
}

#te2 {
    width: 240px;
    height: 40px;
    border-radius: 5px;
    outline: none;
}

.zhong11 {
    display: flex;
    width: 200px;
    height: 20px;
    margin-left: 340px;
    margin-top: 10px;
}

.zhong11 span {
    font-size: 12px;
}

.zhong2 {
    display: flex;
    border: 0.0625rem solid beige;
    width: 240px;
    margin-left: 340px;
    margin-top: 10px;
}

#bu1 {
    flex-wrap: wrap-reverse;
    width: 240px;
    height: 40px;
    border: 0.0625rem solid purple;
    background-color: purple;
    cursor: pointer;
    color: white;
    border-radius: 10px;
    outline: none;
}
</style>
