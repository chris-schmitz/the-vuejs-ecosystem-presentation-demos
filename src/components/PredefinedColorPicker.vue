<template>
    <!--!!!!!!!!!!
    THIS IS THE EXAMPLE TEMPLATE
    !!!!!!!!!! -->
    <v-card class="predefined-color-card">
        <v-card-media class="card-media" :style='{"background-color": color}'>
        </v-card-media>
        <v-card-title>
            <h2>Predefined Color Picker</h2>
        </v-card-title>

        <v-card-text>
            <div class="example-container">
                <v-select label='Color' :items='colorOptions' v-model="type">
                </v-select>
                <!--
                    note that outside of vuetify you could accomplish this select and option combination like this:
                    <select v-model="type">
                        <option v-for="option in colorOptions" :value="option">{{option}}</option>
                    </select>
                 -->

                <v-text-field label="Custom Color" type="color" v-model="color" v-if="selectedColorType === 'Custom'">
                </v-text-field>
            </div>
        </v-card-text>
    </v-card>
    <!-- END OF EXAMPLE TEMPLATE -->
</template>




<template lang="pug">
    v-card.predefined-color-card
        v-card-media.card-media(
            :style="{'background-color': color}"
        )
        v-card-title
            h2 Predefined Color Picker
        v-card-text
            div.example-container
                v-select(
                    label='Color'
                    :items='colorOptions'
                    v-model="type"
                )
                v-text-field(
                    label="Custom Color"
                    type="color"
                    v-model="color"
                    v-if="selectedColorType === 'Custom'"
                )
</template>

<script>
export default {
    data() {
        return {
            selectedColorType: "",
            // Note that we're using strings here and down in the set function, but in
            // a for-real-use component we'd probably want to use constants or (even better)
            // an object map with a "label" and "value" for each color.
            colorOptions: [
                "White",
                "Black",
                "Kindof Gray",
                "Teal-ish",
                "Hot Pink",
                "Custom"
            ],
            // Also note that ultimately, `color` is the only property we really care about.
            // Everything else is just structure for the UI to allow the user to select the value
            // to put in the `color` property. When we "save" the information from this component,
            // we _only need to save the `color` property_.
            color: null
        }
    },
    computed: {
        type: {
            get() {
                return this.selectedColorType
            },
            set(type) {
                let color = this.color

                if (type === "White") {
                    color = "#FFFFFF"
                } else if (type === "Black") {
                    color = "#000000"
                } else if (type === "Kindof Gray") {
                    color = "#D3D3D3"
                } else if (type === "Teal-ish") {
                    color = "#2DD3E7"
                } else if (type === "Hot Pink") {
                    color = "#F60FA5"
                }

                this.color = color

                this.selectedColorType = type
            }
        }
    }
}
</script>

<style lang='scss' scoped>
.predefined-color-card {
    width: 500px;

    .card-media {
        height: 450px !important;
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png");
        background-position: center;
    }
}
</style>
