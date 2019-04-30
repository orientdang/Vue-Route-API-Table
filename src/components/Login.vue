<template>
    <div>
        <h1>Login works</h1>

        <b-form class="login-form">
            <label class="sr-only">Username</label>
            <b-input v-model="username" type="text" class="mb-3" placeholder="User name"></b-input>

            <label class="sr-only">Pass</label>

            <b-input v-model="pass" type="password" placeholder="Password" class="mb-3"></b-input>
            
            <b-button variant="outline-danger" to="/register" class="mr-5">Register</b-button>
            <b-button variant="primary" @click="login($event)">Login</b-button>
        </b-form>
    </div>
</template>

<script>
import firebase from "firebase";
export default {
    name: "login",
    data() {
        return {
            username: "",
            pass: ""
        };
    },
    methods: {
        login(e) {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.username, this.pass)
                .then(user => {
                    alert(`You logged in with ${this.username}`);
                    // re-render the whole pages
                    this.$router.go({path: this.$router.path});
                })
                .catch(err => {
                    alert(err.message);
                });
            e.preventDefault();
        }
    }
};
</script>

<style scoped>
.login-form {
    margin: 0 auto;
    width: 400px;
}
</style>
