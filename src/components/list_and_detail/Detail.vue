<template lang='pug'>
    v-card
        v-toolbar
            v-btn(dark color="red" @click="close")
                v-icon close
        v-card-media(:src="item.url" height=350)
        v-card-title(primary-title)
            h3 {{item.title}}
        v-card-text
            v-text-field(v-model="item.title" label="Title")
            v-text-field(v-model="item.artist" label="Artist")
            v-text-field(v-model="item.url" label="Image URL")
            //- v-text-field(v-model="item.caption" label="Caption")
            //- code {{item}}
</template>

<script>
import sharedState from "./SharedState"

export default {
    data() {
        return {
            sharedState
        }
    },
    computed: {
        item() {
            if (!this.sharedState.selectedItem) {
                return {}
            }
            return this.sharedState.selectedItem
        }
    },
    methods: {
        close() {
            this.sharedState.showDetails = false
        }
    }
}
</script>

<style lang='scss' scoped>
.details-container {
}
</style>
