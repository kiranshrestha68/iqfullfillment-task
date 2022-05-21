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

        <div class="home__col2">
          <div class="col2__header">
            <h2>Informations</h2>
            <div class="col2__threedot">
              <img :src="require('../assets/threedot.svg')" alt="" />
            </div>
          </div>

          <select class="col2__monthSelect">
            <option value="">Month</option>
            <option value="m" v-for="m in month" :key="m.id">{{ m }}</option>
          </select>

          <div class="col2__weekMain">
            <div class="col2__weekselect">
              <div class="col2__week">
                <span>Mon</span>
                <span>15</span>
              </div>
            </div>

            <div class="col2__weekselect">
              <div class="col2__week">
                <span>Tues</span>
                <span>16</span>
              </div>
            </div>
            <div class="col2__weekselectActive">
              <div class="col2__week">
                <span>Wed</span>
                <span>17</span>
              </div>
            </div>
            <div class="col2__weekselect">
              <div class="col2__week">
                <span>Thu</span>
                <span>18</span>
              </div>
            </div>
            <div class="col2__weekselect">
              <div class="col2__week">
                <span>Fri</span>
                <span>19</span>
              </div>
            </div>

            <div class="col2__weekselect">
              <div class="col2__week">
                <span>Sat</span>
                <span>20</span>
              </div>
            </div>
            <div class="col2__weekselect">
              <div class="col2__week">
                <span>Sun</span>
                <span>21</span>
              </div>
            </div>
          </div>

          <CovidSwap :title="title" />
          <CovidSwap :title="title2" />
        </div>
      </div>

      <div class="home__row4">
        <div class="home__row4col1">
          <div class="home__piechart"><Doughnut :resData="resData" /></div>
          <div class="home__piechart"><Doughnut2 :resData="resData" /></div>
        </div>
        <div class="home__row4col2">
          <div class="col2__header">
            <h2>Polyclinic Division</h2>
            <div class="col2__threedot">
              <img :src="require('../assets/threedot.svg')" alt="" />
            </div>
          </div>

          <div>
            <div class="col2__corona">
              <img :src="require('../assets/dental.svg')" alt="" />

              <div class="col2__coronaDesc">
                <span> Dental Polyclinic</span>
                <span>Open: 07:00 - 11:00 AM</span>
              </div>
            </div>

            <div class="button__polyclinic">
              <span> See More Polyclinic </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from "../components/Topbar.vue";
import Linechart from "../components/Linechart.vue";
import Doughnut2 from "../components/Doughnut2.vue";
import Doughnut from "../components/Doughnut.vue";
import CovidSwap from "../components/CovidSwap.vue";
import love from "../assets/love.svg";
import covid from "../assets/covid.svg";

import axios from "axios";

export default {
  name: "Home",
  components: {
    Topbar,
    Linechart,
    Doughnut2,
    Doughnut,
    CovidSwap,
  },
  props: {},

  data() {
    return {
      resData: null,
      month: [],
      title: {
        title: "Covid Swab Test",
        time: "8:00 AM - 4:00 PM",
        number: "120",
        image: covid,
      },

      title2: {
        title: "Covid Rapid Test",
        time: "9:00 AM - 5:00 PM",
        number: "240",
        image: love,
      },
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
            this.month = res.data.covid_report.categories;
            // console.log(this.month, "hello thisis resdata")
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@200;400&family=Roboto:wght@500&display=swap");

.home__main {
  padding: 0 2% 3% 2%;
  /* min-height: 120vh; */
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

.home__registerButton:hover,
.home__registerButton > button:hover {
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

.home__totalIndividuals > span:nth-child(1) {
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  color: rgb(87, 87, 87);
  font-weight: bolder;
  letter-spacing: 0.5px;
  margin: 4px 0;
}

.home__totalIndividuals > span:nth-child(2) {
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  /* color: rgb(87, 87, 87); */
  font-weight: bolder;
  letter-spacing: 0.5px;
  /* margin: 10px 0; */
  margin: 4px 0;

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
  flex: 3.5;
  margin-bottom: 21px;
  border-radius: 15px;
  background-color: white;
  padding: 1.5%;
  display: flex;
  flex-direction: column;
}

.col2__header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.col2__header > h2 {
  color: #292929;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: bolder;
  letter-spacing: 0.5px;
}

.col2__threedot {
  border: 1px solid #cecece;
  border-radius: 10px;
  padding: 0 1.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.col2__threedot > img {
  height: 25px;
  padding-top: 5px;
}

.col2__monthSelect {
  border: 1px solid #cecece;

  width: 22%;
  padding: 6px 5px;
  background: #ffffff;
  font-family: "Montserrat", sans-serif;
  color: #474747;
  font-size: 15px;
  font-weight: bolder;
  cursor: pointer;
  outline: none;
  border-radius: 10px;
}

.col2__monthSelect > option {
  font-family: "Montserrat", sans-serif;
  color: #777777;
  font-size: 15px;
}

.col2__weekselect {
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 5px;

  font-family: "Montserrat", sans-serif;
  text-align: center;
}

.col2__weekMain {
  display: flex;
}

.col2__weekselectActive {
  /* border: 1px solid black; */
  color: blue;
  background-color: #f4f7fc;
  font-weight: bolder;
  border-radius: 25px;

  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 8px;
  padding: 20px 3px;
  font-family: "Montserrat", sans-serif;
  text-align: center;
}

/* .col2__body{
  border: 1px solid black;

} */

.col2__body > h2 {
  color: #292929;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: bolder;
  letter-spacing: 0.3px;
}

.col2__bodyPart {
  border: 1px solid #f4f7fc;
  padding: 0 20px;
  margin: 25px 0;
  background-color: #f4f7fc;
  border-radius: 30px;
  position: relative;
}

.col2__corona {
  display: flex;
  align-items: center;
  margin: 20px 0;
}

.col2__corona > img {
  height: 90px;
  background-color: #e6eefc;
  border-radius: 18px;
  padding-top: 20px;
}

.col2__coronaDesc {
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  margin-left: 25px;
}

.col2__coronaDesc > span:nth-child(1) {
  font-family: "Montserrat", sans-serif;
  margin: 4px 0;
  font-weight: bolder;
  letter-spacing: 1px;
  font-size: 18px;
}

.col2__coronaDesc > span:nth-child(2) {
  font-family: "Montserrat", sans-serif;
  margin: 4px 0;
  font-weight: bolder;
  letter-spacing: 1px;
  font-size: 15px;
  color: grey;
}

.col2__coronaDesc > span:nth-child(3) {
  font-family: "Montserrat", sans-serif;
  margin: 4px 0;
  font-weight: bolder;
  letter-spacing: 1px;
  font-size: 15px;
  color: #2b2b2b;
}

.allPeople {
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 14px;
}

.peoples {
  display: flex;
  align-items: center;
}
.people {
  /* border: 1px solid black; */
  padding: 15px;
  color: white;
  font-family: "Montserrat", sans-serif;
  background: rgb(209, 73, 152);
  font-size: 14px;
  font-weight: bolder;
  border-radius: 50%;
}

.people2 {
  border: 2px solid white;
  padding: 15px;
  color: white;
  font-family: "Montserrat", sans-serif;
  background: blue;
  font-size: 14px;
  font-weight: bolder;
  border-radius: 50%;
  margin-left: -14px;
}

.people3 {
  border: 2px solid white;
  padding: 15px;
  color: white;
  font-family: "Montserrat", sans-serif;
  background: red;
  font-size: 14px;
  font-weight: bolder;
  border-radius: 50%;
  margin-left: -14px;
}

.people3 {
  border: 2px solid white;
  padding: 15px;
  color: white;
  font-family: "Montserrat", sans-serif;
  background: #ff0000;
  font-size: 14px;
  font-weight: bolder;
  border-radius: 50%;
  margin-left: -14px;
}

.people4 {
  border: 2px solid white;
  padding: 15px;
  color: white;
  font-family: "Montserrat", sans-serif;
  background: #158eb3;
  font-size: 14px;
  font-weight: bolder;
  border-radius: 50%;
  margin-left: -14px;
}

.all {
  border: 2px solid white;
  padding: 15px;
  color: white;
  font-family: "Montserrat", sans-serif;
  background: #2c2d7c;
  font-size: 14px;
  font-weight: bolder;
  border-radius: 50%;
  margin-left: -14px;
  /* padding-left: 20px; */
}

.rightArrow {
  position: absolute;
  right: 0;
  bottom: 0;
  border: 1px solid black;
  padding: 12px 14px;
  border-radius: 14px 0 30px 0;
  background: #2c2d7c;
}

.rightArrow > img {
  height: 20px;
}

.col2__week {
  display: flex;
  flex-direction: column;
}

.col2__week > span:nth-child(1) {
  color: #5e5e5e;
  font-weight: bolder;
  font-size: 16px;
  margin-bottom: 12px;
}

.col2__week > span:nth-child(2) {
  font-size: 18px;
  font-weight: bolder;
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
}

.home__row4col1 {
  flex: 8.5;
  display: flex;
  justify-content: space-around;

  margin-right: 10px;
  margin-top: -158px;
}

.home__piechart {
  /* border :1px solid black; */
  width: 44%;
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
  padding: 1.5%;

  flex: 3.5;
  background: white;
  border-radius: 20px;
}

.button__polyclinic {
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  margin: 10px 0.4%;
  padding: 14px 0;
  border-radius: 14px;
  background-color: #d0e1ff;
}

.button__polyclinic:hover {
  background-color: #9ec1ff;
  cursor: pointer;
  transition: 0.5s all;
}

.button__polyclinic > span {
  color: #0000ff;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 1px;
}
</style>
