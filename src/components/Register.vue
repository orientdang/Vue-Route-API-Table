<template>
    <div>
        <h1>Register works</h1>

        <b-form class="login-form">
            <label class="sr-only">Username</label>
            <b-input
                v-model="username"
                type="text"
                class="mb-3"
                placeholder="User name"
            ></b-input>

            <label class="sr-only">Pass</label>

            <b-input
                v-model="pass"
                type="password"
                placeholder="Password"
                class="mb-3"
            ></b-input>

            <b-button
                variant="primary"
                @click="register($event)"
            >Register</b-button>
        </b-form>
    </div>
</template>

<script>
import firebase from "firebase";
export default {
    name: "register",
    data() {
        return {
            username: "",
            pass: ""
        };
    },
    methods: {
        register(e) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.username, this.pass)
                .then(user => {
                    alert(`Account created for ${this.username}`);
                    this.$router.push(`/`);
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
