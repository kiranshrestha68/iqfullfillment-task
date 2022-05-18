<template>
  <div>
    <div class="app__main">
      <div class="app__col1">
        <Sidebar />
      </div>

      <div class="app__col2">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// import Home from "./pages/Home.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Sidebar,
  },
};
</script>

<style>
* {
  margin: 0;
}

.app__main{
  display: flex;
}

.app__col1{
  flex: 1.5;
}

.app__col2{
  flex: 10.5;
}
</style>
