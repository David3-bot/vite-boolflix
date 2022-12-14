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
        <div class="row">
            <div class="col-4">
                <div class="card-container">
                    <div class="card" v-for="card in storage.moviesList">
                        <div class="card-body">
                            <p class="card-text"> {{card.title}} </p>
                            <img class="card-img-top position-relative"
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
