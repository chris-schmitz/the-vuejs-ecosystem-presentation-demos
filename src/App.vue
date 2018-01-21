<template lang="pug">
    v-app#app
        v-content
            //- color-picker
            //- predefined-color-picker
            v-layout
                v-flex
                    list
                v-flex(xs6 v-if="showDetails")
                    detail

</template>

<script>
import ColorPicker from "./components/ColorPicker"
import PredefinedColorPicker from "./components/PredefinedColorPicker"

import List from "./components/list_and_detail/List"
import Detail from "./components/list_and_detail/Detail"

import sharedState from "./components/list_and_detail/SharedState"

export default {
    components: {
        ColorPicker,
        PredefinedColorPicker,
        List,
        Detail
    },
    name: "app",
    data() {
        return {
            msg: "Welcome to Your Vue.js App",
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

<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
