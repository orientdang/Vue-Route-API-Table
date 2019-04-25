<template>
    <div>
        <b-row class="mx-2">
            <b-form-input
                class="my-3 col-md-3"
                v-model="title"
                placeholder="Filter by title"
                @keyup="handleKeyUp($event)"
            ></b-form-input>
            <b-form-select
                class="my-3 ml-3 col-md-1"
                v-model="perPage"
                :options="options"
            ></b-form-select>
        </b-row>
        <b-table
            :busy="isBusy"
            :current-page="currentPage"
            :per-page="perPage"
            borderless
            hover
            :items="filters"
            :fields="fields"
        ></b-table>
        <div
            v-if="isBusy"
            slot="table-busy"
            class="text-center text-danger my-2"
        >
            <b-spinner class="align-middle"></b-spinner>
            <strong>Loading...</strong>
        </div>
        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
        ></b-pagination>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isBusy: true,
            perPage: 5,
            currentPage: 1,
            options: [5, 10, 15, 20],
            title: "",
            fields: ["id", "title", "body"],
            datas: []
        };
    },
    created() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => {
                this.datas = data;
                this.isBusy = false;
            });
    },
    methods: {
        handleKeyUp(e) {
            this.title = e.target.value;
        }
    },
    computed: {
        rows() {
            return this.datas.length;
        },
        filters() {
            let filters = this.datas.filter(data => {
                return data.title
                    .trim()
                    .includes(this.title.trim().toLowerCase());
            });
            return filters;
        }
    }
};
</script>

<style>
</style>
