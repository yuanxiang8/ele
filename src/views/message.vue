<template>
<div>
    {{msg}}
</div>
</template>

<script>
export default {
    data() {
        return {
            msg: []
        }
    },

    created() {
        this.$axios({
            url: "http://47.111.250.151:8081/api/Question/GetQuestion",
            method: "get",
        }).then(res => {
            this.msg = res.data.rows
            console.log(this.msg)
        })
    },
}
</script>

<style>

</style>
