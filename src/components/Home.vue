<template>
    <h1>this is home {{$route.params.id}}</h1>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        };
    }
};
</script>

<style>
</style>
