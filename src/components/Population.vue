<template lang="pug">
    div.population-container
        canvas#chart

</template>

<script>
import { mapState } from "vuex"
import Chart from "chart.js"

export default {
  data() {
    return {
      chart: null
    }
  },
  computed: {
    ...mapState(["yearlyPopulations"]),
    populationDataForChart() {
      return this.yearlyPopulations.map(yearData => {
        return { x: yearData.date, y: yearData.population }
      })
    }
  },
  watch: {
    yearlyPopulations() {
      debugger
      //   this.chart.data.datasets.forEach(dataset => {
      //     debugger
      //     dataset.data = this.populationDataForChart
      //   })
    }
  },
  mounted() {
    const chartCanvasId = "#chart"

    this.chart = new Chart(this.$el.querySelector(chartCanvasId), {
      type: "line",
      data: [10, 20, 30]
    })
  }
}
</script>

<style lang='scss' scoped>
.population-container {
}
</style>
