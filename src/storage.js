
import { pushScopeId, reactive } from "vue";
import axios from "axios";



export const storage = reactive({
    moviesList: [],
    serialList: [],
    research: "",
    url: "https://api.themoviedb.org/3",
    img: {
        link: "https://image.tmdb.org/t/p/",
        size: "w342",
    },
});

export function fetchMovies() {


    axios.get(storage.url + "/search/movie/", {
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

export function fetchSeries() {


    axios.get(storage.url + "/search/tv/", {
        params: {
            api_key: "d5eacbe92f413e5720644cbaa74aa72a",
            query: storage.research,
        },

    })
        .then(resp => {
            console.log(resp.data.results)
            storage.serialList = resp.data.results
        });

}




