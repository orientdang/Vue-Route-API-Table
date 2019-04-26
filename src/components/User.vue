<template>
    <div>
        <h1>Users List</h1>
        <router-link :to="{path: `/`}">  Back to home</router-link>
        <b-list-group>
            <b-list-group-item
                :to="{ path: `/user/${user.id}` }"
                class="col-3"
                :active="false"
                variant="primary"
                v-for="(user,index) in users"
                :key="index"
            >{{user.name}}</b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: []
        };
    },
    created() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(json => {
                this.users = json;
            });
    },
    methods: {
        handleClick(id) {
            console.log(`asdf`);
            this.$router.push({ path: `/user/${id}` });
        }
    }
};
</script>

<style>
</style>
