<template>
  <div>
    <canvas id="doughnut2-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/dist/chart";

export default {
  name: "Doughnut2",
  props: ["resData"],
  data() {
    return {
      reportByGroups: null,
      planetChartData: {
        type: "doughnut",
        data: {
          labels: this.resData.report_by_group.map((t) => t.types).flat(),
          datasets: [
            {
              data: this.resData.report_by_group.map((t) => t.values).flat(),
             backgroundColor: ["#1fadd8","#889d9e","#FF1493"],
              borderColor: "#36495d",
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
    console.log(this.resData, "hello from props");
  },

  mounted() {
    const ctx = document.getElementById("doughnut2-chart");
    new Chart(ctx, this.planetChartData);
  },
};
</script>

<style scoped>
#planet-chart {
  color: black;
}
</style>
