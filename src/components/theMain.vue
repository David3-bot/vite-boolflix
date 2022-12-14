<script>
import { storage } from "../storage"
export default {
    data() {
        return {
            storage,
        }
    },
}
</script>

<template>
    <div class="container">
        <h1>Film</h1>
        <div class="row">
            <div class="col-3" v-for="card in storage.moviesList">
                <div class="card-container">
                    <div class="card">
                        <div class="card-body text-center">
                            <p class="card-text"> {{card.title}} </p>
                            <img class="card-img-top"
                                :src="storage.img.link + storage.img.size + card.poster_path" alt="" />
                            <p class="card-text"> {{card.original_title}} </p>
                            <p class="card-text"> {{card.original_language}}</p>
                            <p class="card-text"> {{card.vote_average}} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h1>Serie</h1>
        <div class="row">
            <div class="col-3" v-for="card in storage.serialList">
                <div class="card-container">
                    <div class="card">
                        <div class="card-body text-center">
                            <p class="card-text"> {{card.title}} </p>
                            <img class="card-img-top"
                                :src="storage.img.link + storage.img.size + card.poster_path" alt="" />
                            <p class="card-text"> {{card.original_title}} </p>
                            <p class="card-text"> {{card.original_language}}</p>
                            <p class="card-text"> {{card.vote_average}} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style>

</style>
