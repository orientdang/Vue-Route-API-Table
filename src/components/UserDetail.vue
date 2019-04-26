<template>
    <div>
        <h1>User id: {{$route.params.id}}</h1>
        <div
            class="mt-4"
            v-if="currentUser"
        >
            <h4>Name: {{currentUser.name.toUpperCase()}}</h4>
            <b-card
                img-src="https://placekitten.com/300/300"
                img-alt="Card image"
                img-left
                class="mb-3  text-left"
            >
                <b-card-text>
                    <ul>
                        <li>Email: {{currentUser.email}}</li>
                        <li>Phone: {{currentUser.phone}}</li>
                        <li>Website: {{currentUser.website}}</li>
                    </ul>
                </b-card-text>
            </b-card>
        </div>
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
    computed: {
        currentUser() {
            let currrentUser = this.users.find(user => {
                // console.log(this.$route.params.id);
                return +user.id === +this.$route.params.id;
            });
            return currrentUser;
        }
    }
};
</script>

<style>
</style>
