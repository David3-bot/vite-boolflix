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
        <div class="py-5">
            <div class="row d-flex g-4">
                <div class="col-3">
                    <div class="card" v-for="card in storage.moviesList">

                        <div class="card-body">
                            <img class="card-img-top position-relative"
                                :src="storage.img.link + storage.img.size + card.poster_path" alt="" />
                            <p class="card-text"></p>
                            <p class="card-text"></p>
                            <p class="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>
