<template>
    <!-- The View -->
    <v-layout>
        <v-flex xs-3>
            <div class='example-component' :style="{'background-color': backgroundColor }">
                <h1 :style="{'color': textColor}">Color Picker Component</h1>

                <div>
                    <v-text-field label="Text Color" type="color" name="textColor" v-model="textColor"></v-text-field>
                    <v-text-field label="Text Color"  name="textColor" v-model="textColor"></v-text-field>
                </div>

                <div>
                    <v-text-field
                        label="Background Color"
                        type="color"
                        v-model="backgroundColor"
                    ></v-text-field>

                    <v-text-field
                        label="Background Color"
                        name="backgroundColor"
                        v-model="backgroundColor"
                    ></v-text-field>
                </div>

                <v-btn @click="reset">Reset</v-btn>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
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
    height: calc(100vh - 48px);

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
