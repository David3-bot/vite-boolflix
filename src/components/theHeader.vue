<script>
import {storage , fetchMovies , fetchSeries} from "../storage"

export default {
    data() {
        return {
            storage,

        }
    },
    methods: {
        fetchM (){
            fetchMovies(),
            fetchSeries()
        }
    },
}
</script>

<template>
    <div class="container">
        <div>
            <div class="input-group my-3">
                <button @click="fetchM()" class="btn btn-outline-secondary" type="button" id="button-addon1">Cerca</button>
                <input v-model="storage.research" type="text" class="form-control" placeholder="" aria-label="Cosa stai cercando?"
                    aria-describedby="Inserisci Titolo">
            </div>
        </div>
    </div>
</template>

<style>

</style>
