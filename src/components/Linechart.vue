<template>
  <div>
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/dist/chart";

export const planetChartData = {
  type: "line",
  data: {
    labels: [
      "Mercury",
      "Venus",
      "Earth",
      "Mars",
      "Jupiter",
      "Saturn",
      "Uranus",
      "Neptune",
    ],
    datasets: [
      {
        label: "Number of Moons",
        data: [0, 0, 1, 2, 79, 82, 27, 14],
        backgroundColor: "#1fadd8",
        borderColor: "#1fadd8",
        borderWidth: 2,
      },
      {
        label: "Planetary Mass",
        data: [0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],
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
};

export default {
  name: "Linechart",
  data() {
    return {
      planetChartData: planetChartData,
    };
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
