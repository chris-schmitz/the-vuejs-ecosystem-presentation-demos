<template lang='pug'>
    v-data-table(
        :headers="columnHeaders"
        :items="images"
    )
        template(slot="items" slot-scope="props")
            td.text-xs-left {{props.item.title}}
            td.text-xs-left {{props.item.artist}}
            v-btn(flat icon color="green" @click="setSelectedItem(props.item)")
                v-icon info
</template>

<script>
import sharedState from "./SharedState"
import axios from "axios"

export default {
    data() {
        return {
            columnHeaders: [
                { text: "Title", value: "title", align: "left" },
                { text: "Artist", value: "artist", align: "left" }
            ],
            images: [
                {
                    title: "Test",
                    artist: "tester",
                    url: "https://picsum.photos/500/500?image=1062",
                    caption: "aww puppy"
                },
                {
                    title: "Test Again",
                    artist: "tester",
                    url: "https://picsum.photos/500/500?image=1063",
                    caption: "???"
                }
            ],

            sharedState
        }
    },
    methods: {
        setSelectedItem(item) {
            this.sharedState.showDetails = true
            this.sharedState.selectedItem = item
        }
    },
    async created() {
        const response = await axios.get("https://picsum.photos/list")
        const urlBase = "https://picsum.photos/500/350?image"

        this.images = response.data.map(imageData => {
            return {
                title: imageData.filename,
                artist: imageData.author,
                url: `${urlBase}=${imageData.id}`,
                caption: ""
            }
        })
    }
}
</script>

<style lang='scss' scoped>
.list-container {
}
</style>
