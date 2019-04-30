<template>
    <div class="text-left mt-5">
        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
        </p>
        <ul>
            <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
        </ul>
        <p>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group>
                    <b-form-input
                        autofocus
                        v-model.trim="form.title"
                        type="text"
                        placeholder="Enter Title"
                    ></b-form-input>
                </b-form-group>

                <b-alert variant="danger" dismissible fade :show="!hasTitle">Title Required</b-alert>

                <b-form-group>
                    <b-form-input id="input-2" v-model.trim="form.body" placeholder="Enter body"></b-form-input>
                </b-form-group>

                <b-alert
                    size="small"
                    variant="danger"
                    dismissible
                    fade
                    :show="!hasBody"
                >Body required</b-alert>
                <b-button :disabled="!isFormValid" type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
            <b-card class="mt-3" header="Server respond">
                <pre class="m-0">{{ apiRes}}</pre>
            </b-card>
        </p>
    </div>
</template>

<script>
import { error } from "util";
export default {
    beforeRouteLeave(to, from, next) {
        const answer = window.confirm(
            "Do you really want to leave? you have unsaved changes!"
        );
        if (answer) {
            next();
        } else {
            next(false);
        }
    },
    data() {
        return {
            errors: [],
            // isFormValid: false,
            apiRes: {},
            form: {
                title: null,
                body: null,
                userId: 1
            },
            canSubmit: false,
            show: true
        };
    },
    computed: {
        hasTitle() {
            if (this.form.title == "") {
                return false;
            }
            return true;
        },
        hasBody() {
            if (this.form.body == "") {
                return false;
            }
            return true;
        },
        isFormValid() {
            if (this.hasTitle && this.hasBody) {
                return true;
            }
            return false;
        }
    },
    methods: {
        onSubmit(evt) {
            this.errors = [];
            console.log(evt);
            if (this.form.title == null) {
                this.errors.push("title required");
            }
            if (this.form.body == null) {
                this.errors.push("body required");
            }
            console.log(this.errors.length);
            if (this.errors.length) {
                evt.preventDefault();
                alert("Input required");
            } else {
                evt.preventDefault();
                // POST adds a random id to the object sent
                fetch("https://jsonplaceholder.typicode.com/posts", {
                    method: "POST",
                    body: JSON.stringify({
                        title: this.form.title,
                        body: this.form.body,
                        userId: 1
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                    .then(response => response.json())
                    .then(json => {
                        console.log(json);
                        this.apiRes = json;
                    });
            }
            // alert(JSON.stringify(this.form));
        },
        onReset(evt) {
            evt.preventDefault();
            // Reset our form values
            this.form.title = "";
            this.form.body = "";

            // Trick to reset/clear native browser form validation state
            this.$nextTick(() => {
                this.show = true;
            });
        }
    }
};
</script>

<style>
</style>
