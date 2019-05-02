<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="warning">
            <b-navbar-brand to="/">Home</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/form">Form</b-nav-item>
                    <b-nav-item to="/table">Table</b-nav-item>
                    <b-nav-item to="/user">User</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto" v-if="true">
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template slot="button-content">
                            <em>{{currentUser}}</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#" @click="logOut">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import firebase from "firebase";
export default {
    name: "logout",

    data() {
        return {
            isLoggedIn: false,
            currentUser: ""
        };
    },
    created() {
        if (firebase.auth().currentUser) {
            console.log(firebase.auth().currentUser);
            this.isLoggedIn = true;
            this.currentUser = firebase.auth().currentUser.email;
        }
        // console.log(this.isLoggedIn);
        // console.log(this.currentUser);
    },
    methods: {
        logOut() {
            console.log(`signOut`);
            this.currentUser = "";
            firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$router.push("/login");
                });
        }
    }
};
</script>

<style>
</style>
