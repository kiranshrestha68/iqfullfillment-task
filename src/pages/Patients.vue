<template>
  <div>
    <div><Topbar /></div>
    <div class="page"><h2>Patients</h2></div>
  </div>
</template>

<script>
import Topbar from "../components/Topbar.vue";

export default {
  name: "Patients",
  components: {
    Topbar,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@200;400&family=Roboto:wght@500&display=swap");

.page {
  padding: 0 2% 3% 2%;
  background-color: #f4f7fc;
  min-height: 90vh;
}

.page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.page > h2 {
  color: #0000ff;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 1px;
}
</style>
