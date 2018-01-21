<template>
    <!-- The View -->
    <div class='example-component' :style="{'background-color': backgroundColor }">
        <h1 :style="{'color': textColor}">Color Picker Component</h1>
        <div>
            <label for="textColor">Text Color</label>
            <input type="color" name="textColor" v-model="textColor">
            <input  name="textColor" v-model="textColor">
        </div>

        <div>
            <label for="backgroundColor">Background Color</label>
            <input type="color" name="backgroundColor" v-model="backgroundColor">
            <input  name="backgroundColor" v-model="backgroundColor">
        </div>

        <button @click="reset">Reset</button>
    </div>
</template>

<script>
// Note, the model isn't necessarily part of the ViewModel, it's just a javascript object
// that holds our data. We're adding it directly to the viewmodel to fit the regular
//  vue convention, but it would be just as valid if we created it separately and added it in
// like this:
//
// const model = {textColor: null, backgroundColor: null}
//
// export default {
//  data () {
//      return model
//  }
// ...

// The ViewModel
export default {
    data() {
        // The Model
        return {
            textColor: null,
            backgroundColor: null
        }
    },
    methods: {
        reset() {
            this.textColor = "#000000"
            this.backgroundColor = "#FFFFFF"
        }
    },
    created() {
        this.reset()
    }
}
</script>

<style lang='scss' scoped>
.example-component {
    padding: 50px;

    > div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin: 10px;

        > * {
            margin-bottom: 5px;
            font-size: 25px;
        }
    }
}
</style>
