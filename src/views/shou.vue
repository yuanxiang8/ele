<template>
<div id="zong1">
    <div class="zi">首页</div>
    <div id="tu1"><img src="img/3.png" id="img1"></div>
    <!--<div id="tu2"><img src="img/2.png" id="img2"></div>-->

    <div class="three4">
        <div class="ten1">
            收入趋势<i class="el-icon-c-scale-to-original"></i>
        </div>
        <div id="myChart" :style="{width:'1000px',height:'600px'}"></div>
    </div>
</div>
</template>

<script>
export default {
    mounted() {
        this.drawLine()
    },
    methods: {
        drawLine() {
            //基于准备好的dom，初始化echarts示例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            //绘制图表
            myChart.setOption({
                tooltip: {},
                xAxis: {
                    type: 'category',

                    data: ['8-12', '8-12', '8-13', '8-14', '8-15', '8-16', '8-17']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    areaStyle: {}
                }]
            });
        }
    }
}
</script>

<style scoped>
#zong1 {
    width: 1304px;
    height: 1080px;
    position: relative;
    top: 60px;
    left: 212px;
    background-color: #FCFCFC;
}

.zi {
    width: 80px;
    height: 40px;
    font-size: 24px;
    font-weight: bold;
    color: #9137F3;
    margin-left: 100px;
    margin-top: 20px;
}

#tu1 {
    width: 1100px;
    height: 200px;
    margin-left: 102px;
}

#img1 {
    width: 1100px;
    height: 200px;
}

#tu2 {
    width: 1100px;
    height: 200px;
    position: absolute;
    left: -178px;
    top: 220px;
}

#img2 {
    width: 1100px;
    height: 200px;
}

#tu3 {
    width: 300px;
    height: 90px;
    position: relative;
    top: -140px;
    left: 700px;
}

#img3 {
    height: 60px;
    margin-top: 15px;
}

.three4 {
    border: 1px solid #E4E4E4;
    width: 1093px;
    height: 600px;
    margin-left: 104px;
    margin-top: 140px;
    color: #6F6F6F;
    border-radius: 5px;
    background-color: white;
}

.ten1 {
    margin-left: 30px;
    margin-top: 20px;
    font-size: 15px;
    color: #707070;
}
</style>
