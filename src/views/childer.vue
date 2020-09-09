<template>
<div>
    {{titles}}
    <div @click="c(aa)">点击传值给父组件</div>
</div>
</template>

<script>
export default {
    data() {
        return {
            aa: '321'
        }
    },
    props: ['titles'],
    methods: {
        c(val) {
            this.$emit('show', val)
        }
    }
}
</script>

<style>

</style>
