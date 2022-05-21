<template>
  <div class="sidebar__main">
    <div>
      <div class="sidebar__logo">
        <img :src="require('../assets/logo1.png')" alt="profile" />
      </div>

      <div class="test">
        <div class="sidebar__managementContents">
          <h3>managements</h3>

          <div class="sidebar__contents">
            <router-link to="/">
              <div class="sidebar__content">
                <img :src="require('../assets/overview.svg')" alt="" />
                <span class="test"> Overview</span>
              </div>
            </router-link>

            <router-link to="/statistics">
              <div class="sidebar__content">
                <img :src="require('../assets/statitics.svg')" alt="" />
                <span> Statistics</span>
              </div>
            </router-link>

            <router-link to="/patients">
              <div class="sidebar__content">
                <img :src="require('../assets/patients.png')" alt="" />
                <span> Patients</span>
              </div>
            </router-link>

            <router-link to="/polyclinic">
              <div class="sidebar__content">
                <img :src="require('../assets/polyclinic.svg')" alt="" />
                <span> Polyclinic</span>
              </div>
            </router-link>

            <router-link to="/doctors">
              <div class="sidebar__content">
                <img :src="require('../assets/doctors.svg')" alt="" />
                <span> Doctor</span>
              </div>
            </router-link>

            <router-link to="/medicines">
              <div class="sidebar__content">
                <img :src="require('../assets/medicines.svg')" alt="" />
                <span> Medicines</span>
              </div>
            </router-link>
          </div>

          <h3>Support</h3>
          <div>
            <div class="sidebar__content">
              <img :src="require('../assets/message.svg')" alt="" />
              <span> Messages</span>
            </div>

            <div class="sidebar__content">
              <img :src="require('../assets/settings.svg')" alt="" />
              <span> Settings</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sidebar__bottom">
      <div class="sidebar__bottomFirst">
        <h3>Covid Informations</h3>
        <div class="sidebar__bottomWorld">
          <img :src="require('../assets/world.png')" alt="" />
          <span>World</span>
        </div>
        <span> Infected - <strong> 8,119,789 </strong> </span>
        <span> Recovered - <strong> 4,215,589</strong> </span>
        <span>Deaths - <strong>569,458</strong> </span>
        <button>Check Covid</button>
      </div>

      <div class="sidebar__bottomSecond">
        <span> © Poli Clinic, 2020 </span>
        <p>
          Poly Clinic is medical management for all doctors, patient & staff
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "Sidebar",
  props: {},
  data() {
    return {};
  },

  created() {
    //   const kiran = this.item.map((m) => m.id[0])
    //   console.log(kiran, 'hello krian')
    // console.log(this.item, "hello this is item ");
  },

  methods: {
    getsidebarId(id) {
      //   alert("ehllklaf");
      this.managementId = id;
      // alert(this.getId)
    },

    getPath(path) {
      router.push(path);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@200;400&family=Roboto:wght@500&display=swap");

.router-link-exact-active {
  color: black;
  text-decoration: underline black;
  font-weight: bolder;
  font-size: 16px;

}

.sidebar__main {
  /* border: 1px solid black; */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
}

.test {
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
}

.sidebar__logo {
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}

.sidebar__managementContents {
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  /* text-align: center; */
  width: 50%;
  /* border: 1px solid black; */
}

.sidebar__managementContents > h3 {
  color: rgb(119, 119, 119);
  font-family: "Montserrat", sans-serif;
  font-size: 13.5px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  margin: 10px 0;
}

.sidebar__contents {
  width: 100%;
}

.sidebar__content {

  padding: 10px 0;
  margin: 5px 0;
  display: flex;
  flex-direction: row;
}

.sidebar__content > span {
  color: rgb(87, 87, 87);
  text-decoration: underline white;
  font-size: 13px;
  font-family: "Montserrat", sans-serif;
  margin-left: 18px;
  letter-spacing: 1.2px;
}

.sidebar__bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20%;
}

.sidebar__bottomFirst {
  border: 1px solid #ebf4ff;
  background-color: #ebf4ff;
  width: 80%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 8px;
  border-radius: 12px;
  margin: 30px;
}

.sidebar__bottomWorld {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  margin: 8px 0;
  margin-left: 6px;
}

.sidebar__bottomWorld > img {
  height: 15px;
}

.sidebar__bottomWorld > span {
  margin-left: 8px;
}

.sidebar__bottomFirst > h3 {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: bolder;
  margin: 10px 0;
}

.sidebar__bottomFirst > span {
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  margin: 4px 0;
  letter-spacing: 1px;
}

.sidebar__bottomFirst > button {
  border: none;
  padding: 8px 2vw;
  border-radius: 8px;
  color: white;
  font-size: 13px;
  background-color: #0000ff;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  font-weight: bolder;
  margin: 8px;
}

.sidebar__bottomFirst > button:hover {
  background-color: #0909ac;
  transition: 0.5s all;
}

.sidebar__bottomSecond {
  font-family: "Montserrat", sans-serif;
}

.sidebar__bottomSecond > span{
  font-size: 13px;
  color: black;
  font-weight: bolder;
  letter-spacing: 1px;
}

.sidebar__bottomSecond > p{
  font-size: 12px;
  color: #8b8b8b;
  letter-spacing: 0.3px;
  margin-top: 15px;
  margin: 3%;

}
</style>
