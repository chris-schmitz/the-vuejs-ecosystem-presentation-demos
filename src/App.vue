<template lang="pug">
    v-app#app
        v-toolbar
            v-toolbar-title Vue Ecosystem Demos
            v-spacer
            v-toolbar-items
                //- Note that here I'm passing in strings that match the `name`
                //- property for the routes, not the `path` property (notice the lack
                //- of forward slash).
                v-btn(@click="showComponent('simple-picker')") Simple Picker
                v-btn(@click="showComponent('predefined-picker')") Predefined Picker
                v-btn(@click="showComponent('list-and-detail')") List & Detail
                //- I'm using buttons here to fit vuetify's astetic a bit better
                //- and to show how to navigate via router from the viewmodel, but
                //- you can also create router-driving-links by using the <router-link>
                //- tag. For our three components it would look like this:
                //-
                //- router-link(to="/simple-picker") Simple Picker
                //- router-link(to="/predefined-picker") Predefined Picker
                //- router-link(to="/list-and-detail") List & Detail
                //-
                //- also note that these routes are pointing to the route paths,
                //- not their names. you can do either, but names allow you decouple
                //- the links from the paths.
        v-content

            div
                router-view

</template>

<script>
export default {
    components: {},
    name: "app",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        }
    },
    methods: {
        showComponent(routeName) {
            this.$router.push({ name: routeName })
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
