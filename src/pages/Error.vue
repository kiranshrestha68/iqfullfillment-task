<template>
  <div class="notfoundpage__main">
    <div class="notfoundpage__left">
      <h1>404</h1>
    </div>
    <div class="notfoundpage__right">
      <div class="notfoundpage__c1">
        <div class="notfoundpage__icon"></div>
        <span> Oops! Page not found. </span>
      </div>
      <span class="notfoundpage__c2">
        This page you are looking for was not found.
      </span>
      <span class="notfoundpage__c2">
        You may return to
        <span @click="onHome" class="error__onHome"> home page</span>
      </span>
    </div>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "Error",
  props: {},

  methods: {
    onHome() {
      router.push("/");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@700&display=swap");

.error__onHome {
  color: #493f3f;
  text-decoration: underline;
  cursor: pointer;
  transition: 0.3sec all;
}

.error__onHome:hover{
    color: black;
}

.notfoundpage__main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  font-family: "Roboto", sans-serif;
  /* color: red; */
}

.notfoundpage__left > h1 {
  font-size: 200px;
  color: red;
  font-family: "Roboto", sans-serif;
}

.notfoundpage__right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 20vh;
  margin-left: 20px;
}

.notfoundpage__c1 {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.notfoundpage__c1 > span {
  font-size: 32px;
  letter-spacing: 1px;
  font-weight: bolder;
  font-family: "Roboto", sans-serif;
  margin-left: 10px;
}

.notfoundpage__c2 {
  font-size: 20px;
  color: #493f3f;
  font-family: "Lato", sans-serif;
  margin-bottom: 10px;
}

.notfoundpage__icon {
  color: red;
}
</style>
