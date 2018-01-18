<template lang="pug">
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
            v-if="selectedModelType === 'Custom'"
        )
</template>

<script>
export default {
    data() {
        return {
            selectedColorType: "",
            colorOptions: ["White", "Black", "Gray", "Custom"],
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
                } else if (type === "Gray") {
                    color = "#F0F0F0"
                }
                this.color = color
                this.selectedColorType = type
            }
        }
    }
}
</script>

<style lang='scss' scoped>
.example-container {
}
</style>