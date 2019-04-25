<template>
    <div id="app">
        <Header />
        <Table />
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Table from "./components/Table.vue";

export default {
    name: "app",
    components: {
        Header,
        Table
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
