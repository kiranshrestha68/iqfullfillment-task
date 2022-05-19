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
            <div class="home__totalIndividual">
              <img :src="require('../assets/staff1.svg')" alt="" />
              <div class="home__totalIndividuals">
                <span>Total Patients</span> <span>24,250</span>
              </div>
            </div>

            <div class="home__totalIndividual">
              <img :src="require('../assets/staff1.svg')" alt="" />
              <div class="home__totalIndividuals">
                <span>Total Patients</span> <span>24,250</span>
              </div>
            </div>

            <div class="home__totalIndividual">
              <img :src="require('../assets/staff1.svg')" alt="" />
              <div class="home__totalIndividuals">
                <span>Total Patients</span> <span>24,250</span>
              </div>
            </div>
          </div>
          <div class="home__lineChart">
            <div class="linechart__headers">
              <h3>Patients Covid Statistics</h3>
              <div class="linechart__buttons">
                <button class="linechart__monthly">Monthly</button>
                <button class="linechart__weekly">Weekly</button>
              </div>
            </div>
            <div class="linechart__body">
              <!-- <Linechart/> -->
              <GChart
                type="LineChart"
                :options="options"
                :data="collectionData"
              />
            </div>
          </div>
        </div>
        <div class="home__col2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from "../components/Topbar.vue";
// import Linechart from "../components/Linechart.vue";
import { GChart } from "vue-google-charts/legacy";

export default {
  name: "Home",
  components: {
    Topbar,
    GChart,
  },
  props: {},

  data() {
    return {
      collectionData: [
        ["Day", "Guardians of the Galaxy", "The Avengers", "Transformers"],
        [1, 40.45, 90.5, 42.8],
        [2, 22.5, 68.4, 33.4],
        [3, 36.5, 47, 55.5],
        [4, 12.7, 23.8, 14.5],
        [5, 10.9, 44.5, 10.3],
        [6, 7.8, 14.5, 6.7],
        [7, 8.6, 11.2, 19.6],
      ],
      options: {
        chart: {
          title: "First 7 days movies collection",
          subtitle: "In millions of dollars (USD)",
        },
        width: 1000,
        height: 400,
      },
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@200;400&family=Roboto:wght@500&display=swap");

.home__main {
  /* border: 1px solid black; */
  padding: 0 2%;
  min-height: 100vh;
  background-color: #f4f7fc;
}

.home__row2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid black; */
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
</style>
