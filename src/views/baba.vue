<template>
<div id="zong1">
    <haizi :titles="titles" @show="show"></haizi>
    {{bb}}
</div>
</template>

<script>
import haizi from '@/views/childer.vue'
export default {
    data() {
        return {
            titles: "123",
            bb: ""
        }
    },
    components: {
        haizi
    },
    methods: {
        show(aa) {
            this.bb = aa
        }
    },
}
</script>

<style>
#zong1 {
    width: 1304px;
    height: 1080px;
    position: relative;
    top: 60px;
    left: 212px;
    background-color: #FCFCFC;
}
</style>
