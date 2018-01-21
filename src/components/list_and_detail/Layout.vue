<template lang='pug'>
    v-layout
        v-flex
            list
        v-flex(xs6 v-if="showDetails")
            detail
</template>

<script>
import List from "./List"
import Detail from "./Detail"

import sharedState from "./SharedState"

export default {
    components: {
        List,
        Detail
    },
    data() {
        return {
            sharedState
        }
    },
    computed: {
        showDetails() {
            return this.sharedState.showDetails
        }
    }
}
</script>

<style lang='scss' scoped>

</style>
