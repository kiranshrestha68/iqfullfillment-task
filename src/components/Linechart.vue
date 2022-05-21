<template>
  <div>
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/dist/chart";

export default {
  name: "Linechart",
  props: ["resData"],
  data() {
    return {
      dashboardData: null,
      planetChartData: {
        type: "line",
        data: {
          labels: this.resData.covid_report.categories,
          datasets: [
            {
              label: this.resData.covid_report.types[0],
              data: this.resData.covid_report.values[0],
              backgroundColor: "#1fadd8",
              borderColor: "#1fadd8",
              borderWidth: 2,
            },
            {
              label: this.resData.covid_report.types[1],
              data: this.resData.covid_report.values[1],
              backgroundColor: "blue",
              borderColor: "blue",
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25,
                },
              },
            ],
          },
        },
      },
    };
  },

  created() {
    // console.log(this.resData, "hello from props")
  },

  mounted() {
    const ctx = document.getElementById("planet-chart");
    new Chart(ctx, this.planetChartData);
  },
};
</script>

<style scoped>
#planet-chart {
  color: black;
}
</style>
