<template>
    <div id="app">
        <router-view name="header-top"></router-view>
        <router-view></router-view>
        <router-view name="header-bottom"></router-view>
    </div>
</template>

<script>


export default {
    name: "app",
    components: {
        
    }
};
</script>

<style scoped>
#app {
    width: 80%;
    margin: 0 auto;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
