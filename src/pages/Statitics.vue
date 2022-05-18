<template>
  
  
      <!-- <div class="home__sidebar"><Sidebar /></div> -->
      <div class="home__homeMain">stats</div>
 
</template>

<script>
// import Sidebar from "../components/Sidebar.vue"

export default {
  name: "Home",
  components: {
  },
  props: {},
};
</script>

<style scoped>

.home__main {
  display: flex;
  /* border: 1px solid black; */
  min-height: 100vh;
}

.home__sidebar {
  flex: 2;
  min-height: 100%;
  /* border :2px solid red; */
}

.home__homeMain {
  flex: 10;
}
</style>
