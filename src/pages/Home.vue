<template>
  <div>
    <Topbar />

    <div class="home__main">
      <div class="home__row2">
        <div class="home__greetingUser">
          <h2>Poli Overview</h2>
          <span>Welcome Back, Barly.</span>
        </div>

        <div class="home__registerButton">
          <img :src="require('../assets/cross.svg')" alt="" />

          <button>Register Patient</button>
        </div>
      </div>

      <div class="home__row3">
        <div class="home__col1">
          <div class="home__total">
            <div
              class="home__totalIndividual"
              v-for="count in resData.counters"
              :key="count.id"
            >
              <img :src="require('../assets/staff1.svg')" alt="" />
              <div class="home__totalIndividuals">
                <span>{{ count.title }}</span> <span>{{ count.value }}</span>
              </div>
            </div>
          </div>
          <div class="home__lineChart">
            <div class="linechart__headers">
              <h3>{{ this.resData.covid_report.title }}</h3>
              <div class="linechart__buttons">
                <button class="linechart__monthly">Monthly</button>
                <button class="linechart__weekly">Weekly</button>
              </div>
            </div>
            <div class="linechart__body"><Linechart :resData="resData" /></div>
          </div>
        </div>
        <div class="home__col2">hello</div>
      </div>

      <div class="home__row4">
        <div class="home__row4col1">
          <div class="home__piechart"><Doughnut :resData="resData" /></div>
          <div class="home__piechart"><Doughnut2 :resData="resData" /></div>
        </div>
        <div class="home__row4col2">hello test</div>
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from "../components/Topbar.vue";
import Linechart from "../components/Linechart.vue";
import Doughnut2 from "../components/Doughnut2.vue";
import Doughnut from "../components/Doughnut.vue";

import axios from "axios";

export default {
  name: "Home",
  components: {
    Topbar,
    Linechart,
    Doughnut2,
    Doughnut,
  },
  props: {},

  data() {
    return {
      resData: null,
    };
  },

  created() {
    this.getDashboard();
  },

  methods: {
    async getDashboard() {
      await axios
        .get("https://apitest.iqfulfillment.com/v1/test/dashboard")
        .then((res) => {
          if (res.data.success == true) {
            // console.log(
            //   res.data,
            //   "helo this is res from line chart.js"
            // );
            this.resData = res.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@200;400&family=Roboto:wght@500&display=swap");

.home__main {
  padding: 0 2% 3% 2%;
  min-height: 120vh;
  background-color: #f4f7fc;
}

.home__row2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5% 0;
}

.home__greetingUser {
  display: flex;
  flex-direction: column;
}

.home__greetingUser > h2 {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
}

.home__greetingUser > span {
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  letter-spacing: 0.4px;
  color: #575757;
}

.home__registerButton {
  display: flex;
  align-items: center;
  border: 1px solid #0707c2;
  background: #0707c2;

  border-radius: 12px;
  padding: 4px 6px;
}

.home__registerButton:hover {
  background: blue;

  cursor: pointer;
  transition: 0.5s all;
}

.home__registerButton > button {
  border: none;
  background: transparent;
  color: white;
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: bolder;
  font-family: "Montserrat", sans-serif;
}

.home__registerButton > img {
  height: 30px;
  width: 40px;
  padding-top: 6px;
}

.home__row3 {
  display: flex;
}

.home__col1 {
  /* border: 1px solid rgb(99, 22, 22); */
  flex: 8.5;
  margin-right: 25px;
}

.home__total {
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.home__totalIndividual {
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  padding: 15px;
  margin: 10px;
  background-color: white;
  border-radius: 15px;
}

.home__totalIndividual > img {
  height: 50px;
  padding-top: 15px;
}

.home__totalIndividuals {
  display: flex;
  flex-direction: column;
  margin-left: 15px;
}

.home__lineChart {
  /* border: 1px solid black; */
  min-height: 40vh;
  /* margin-top: 25px; */
  background: white;
  padding: 1.5%;
  border-radius: 15px;
  margin: 20px 8px;
}

.home__col2 {
  border: 1px solid rgb(185, 31, 31);
  flex: 3.5;
}

.linechart__headers {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.linechart__headers > h3 {
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: bolder;
  letter-spacing: 0.8px;
}

.linechart__buttons {
  /* border: 1px solid yellow; */
  padding: 8px 5px;
  border-radius: 12px;
  font-family: "Montserrat", sans-serif;
  background-color: #f4f7fc;
}

.linechart__monthly {
  border: none;
  background-color: white;
  color: blue;
  font-weight: bolder;
  font-size: 14px;
  margin: 0 6px;
  padding: 8px 15px;
  border-radius: 8px;
}

.linechart__weekly {
  border: none;
  background-color: transparent;
  color: rgb(87, 87, 87);

  font-size: 14px;
  margin: 0 6px;
  padding: 8px 15px;
  border-radius: 8px;
}

.home__row4 {
  display: flex;
  /* border :1px solid black; */
}

.home__row4col1 {
  /* border: 1px solid blue; */
  flex: 8.5;
  /* min-height: 40vh; */
  display: flex;
  /* align-items: center; */
  justify-content: space-around;
  /* margin-top: 25px; */
  /* background: white; */
  /* background: white; */
  /* padding: 0 1.5%; */
  /* border-radius: 15px; */
  /* margin: 20px 50px 20px 0; */
  margin-right: 30px;
  /* background-color: blue; */
}

.home__piechart {
  /* border :1px solid black; */
  width: 45%;
  background: white;
  border-radius: 12px;
  padding: 1%;
  margin-top: 1%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: blue; */
  /* margin-right: 10%; */
}

.home__row4col2 {
  /* border: 1px solid blue; */
  flex: 3.5;
}
</style>
