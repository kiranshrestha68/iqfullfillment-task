<template>
  <div>
    <div class="topbar__main">
      <div class="topbar__left">
        <div class="topbar__leftleft">
          <img :src="require('../assets/search.svg')" alt="" />

          <input placeholder="Search..." />
        </div>

        <div class="topbar__filter">
          <span>filter</span>
          <img :src="require('../assets/down.svg')" alt="" />
        </div>
      </div>

      <div class="topbar__right">
        <div class="topbar__profile">
          <img :src="require('../assets/notification.svg')" alt="" />
        </div>

        <div class="topbar__profileDetails">
          <img :src="require('../assets/kiran.jpg')" alt="" />
          <div class="topbar__profileName">
            <span>Kiran Shrestha</span>
            <span>Admin Manager</span>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  name: "Topbar",
  components: {},
  props: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@200;400&family=Roboto:wght@500&display=swap");

.topbar__main {
  margin: 10px 0;
  /* border: 1px solid black; */
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
}

.topbar__left {
  display: flex;
  border: 1px solid rgb(228, 228, 228);
  border-radius: 40px;
  width: 18vw;
  height: 40px;
}

.topbar__leftleft {
  display: flex;
  padding: 10px 15px;
  align-items: center;
}

.topbar__leftleft > img {
  height: 20px;
  margin-right: 10px;
  margin-top: 5px;
}

.topbar__leftleft > input {
  border: none;
  width: 10vw;
  outline: none;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  color: rgb(83, 83, 83);
}

::placeholder {
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
}

.topbar__filter > img {
  height: 10px;
  margin-left: 8px;
  margin-top: 3px;
}

.topbar__filter {
  display: flex;
  align-items: center;
  border-left: 1px solid rgb(228, 228, 228);
  padding-left: 10px;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  color: rgb(83, 83, 83);
  cursor: pointer;
}

.topbar__filter:hover {
  color: black;
}

.topbar__profile {
  display: flex;
  align-items: center;
  justify-content: center;
}

.topbar__profile > img {
  height: 25px;
  width: 25px;
  padding: 0 2%;
  margin-right: 20px;
  border: 1px solid #ebf4ff;
  border-radius: 100%;
  padding-top: 5px;
  background-color: #ebf4ff;
}

.topbar__profileDetails > img {
  height: 40px;
  border-radius: 50%;
}

.topbar__right {
  display: flex;
  align-items: center;
}

.topbar__profileDetails {
  display: flex;
  align-items: center;
  background-color: #ebf4ff;
  padding: 6px 12px;
  border-radius: 15px;
}

.topbar__profileName {
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  color: rgb(107, 107, 107);
  margin-left: 10px;
}

.topbar__profileName > span:nth-child(1) {
  color: black;
  font-size: 14px;
  font-weight: bolder;
}

.topbar__profileName > span:nth-child(2) {
  color: rgb(107, 107, 107);
  font-size: 12px;
}


</style>
