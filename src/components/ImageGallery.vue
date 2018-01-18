<template>
    <div class="component-wrapper">
        <button @click="addImage">Add Image</button>
        <div class='image-gallery-container'>
            <div
                v-for="imageData in images"
                :key="imageData.id"
                :style="{'background-color': imageData.backgroundColor}"
                @mouseover="setActiveImage(imageData)"
                @mouseout="clearActiveImage"
            >
                <img :src="imageData.src">
                <span :style="{'color': imageData.textColor}">{{imageData.caption}}</span>

                <div v-if="activeImage === imageData">
                    <div>
                        <label>Source: </label>
                        <input v-model="imageData.src">
                    </div>
                    <div>
                        <label>Caption: </label>
                        <input v-model="imageData.caption">
                    </div>
                    <div>
                        <label>Background Color: </label>
                        <input v-model="imageData.backgroundColor">
                    </div>
                    <div>
                        <label>Text Color: </label>
                        <input v-model="imageData.textColor">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeImage: null,
            images: [
                {
                    id: 1,
                    src: "https://picsum.photos/200/300",
                    caption: "a cool image",
                    backgroundColor: "#FFFFFF",
                    textColor: "#000"
                },
                {
                    id: 2,
                    src: "https://picsum.photos/200/300",
                    caption: "a cool image",
                    backgroundColor: "#FFFFFF",
                    textColor: "#000"
                }
            ]
        }
    },
    computed: {
        nextId() {
            return this.images[this.images.length - 1].id + 1
        }
    },
    methods: {
        addImage() {
            const newImage = {
                id: this.nextId,
                src: "https://picsum.photos/200/300",
                caption: "a cool image",
                backgroundColor: "#FFFFFF",
                textColor: "#000"
            }
            this.images.push(newImage)
        },
        setActiveImage(image) {
            this.activeImage = image
        },
        clearActiveImage() {
            this.activeImage = null
        }
    }
}
</script>

<style lang='scss' scoped>
.component-wrapper {
    background-color: teal;
}

.image-gallery-container {
    display: flex;
    > * {
        margin: 10px;
    }

    > div {
        position: relative;
        padding: 20px;

        > span {
            position: absolute;
            bottom: 10px;
            color: white;
        }
    }
}
</style>
