
import { pushScopeId, reactive } from "vue";
import axios from "axios";
//import { isFunctionType } from "@vue/compiler-core";


export const storage = reactive({
    moviesList: [],
    research: "",
    img: {
        link: "https://image.tmdb.org/t/p/",
        size: "w92",
    },
});

export function fetchMovies() {
    const rootUrl = "https://api.themoviedb.org/3"

    axios.get(rootUrl + "/search/movie/", {
        params: {
            api_key: "d5eacbe92f413e5720644cbaa74aa72a",
            query: storage.research,
        },

    })
        .then(resp => {
            console.log(resp.data.results)
            storage.moviesList = resp.data.results
        });

    axios.get(rootUrl + "/search/TV/", {
        params: {
            api_key: "d5eacbe92f413e5720644cbaa74aa72a",
            query: storage.research,
        },

    })
        .then(resp => {
            console.log(resp.data.results)
            storage.moviesList = resp.data.results
        });
}






