
import { reactive } from "vue";
import axios, { Axios } from "axios";
import { isFunctionType } from "@vue/compiler-core";


export const storage = reactive({
    moviesList: [],

});

export function fetchMovies() {
    const rootUrl = "https://api.themoviedb.org/3"

    axios.get(rootUrl + "/search/movie/", {
        params: {
            api_key: "d5eacbe92f413e5720644cbaa74aa72a",
            query: ""
        }

    })
        .then(resp => {
            console.log(resp)
        })


    axios.get(rootUrl + "/search/TV", {
        params: {
            api_key: "d5eacbe92f413e5720644cbaa74aa72a",
            query: ""
        }

    })
        .then(resp => {
            console.log(resp)
        })

}


