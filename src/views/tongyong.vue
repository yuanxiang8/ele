<template>
<div id="zong3">
    <div class="zi">通用设置</div>

    <div class="quan">
        <div class="dai">
            <p>待付款订单取消时间：拍下未付款订单<input type="text" value="60">分钟内未付款，自动取消订单</p>
        </div>
        <div class="lei">
            <p>累计消费满<input type="text" value="100.00">元，升一级；最高<input type="text" value="11">级</p>
        </div>
        <div class="mei">
            <p>每<input type="text" value="100">积分可抵扣<input type="text" value="10">元</p>
        </div>
        <div class="bao"><input type="button" value="保存" id="b1"></div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
#zong3 {
    width: 1304px;
    height: 640px;
    position: relative;
    top: 60px;
    left: 212px;
    background-color: #FCFCFC;
}

.zi {
    width: 180px;
    height: 40px;
    font-size: 24px;
    font-weight: bold;
    color: #9137F3;
    margin-left: 100px;
    margin-top: 20px;
}

.quan {
    border: 1px solid #E4E4E4;
    width: 1100px;
    height: 460px;
    margin-left: 100px;
    color: #6F6F6F;
    border-radius: 5px;
    background-color: white;
}

.dai {
    width: 800px;
    margin-top: 70px;
    margin-left: 90px;
}

.lei {
    width: 800px;
    margin-top: 20px;
    margin-left: 90px;
}

.mei {
    width: 800px;
    margin-top: 20px;
    margin-left: 90px;
}

.bao {
    margin-top: 200px;
    margin-left: 480px;
}

#b1 {
    background-color: #9137F3;
    color: white;
    border: 1px solid #9137F3;
    width: 100px;
    height: 40px;
    border-radius: 8px;
}
</style>
