<template>
  <div>
    <div class="topbar__main">
      <div class="topbar__left">
        <div class="topbar__leftleft">
          <img :src="require('../assets/search.svg')" alt="" />

          <input placeholder="Search..." v-model="searchText" />

          <div class="search__autoComplete" v-show="showSearchSuggestion">
            <AutoComplete :searchFound="searchFound" />
          </div>
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
import AutoComplete from "../components/AutoComplete.vue";
import { search } from "../services/api.service";

export default {
  name: "Topbar",
  components: {
    AutoComplete,
  },

  data() {
    return {
      showSearchSuggestion: false,
      searchText: "",
      searchItems: [],
      searchFound: null,
    };
  },
  props: {},

  created() {
    this.getdata();
  },

  watch: {
    searchText(val) {
      if (this.searchText.length > 1) {
        this.getdata();
      }

      if (val.length == 0) {
        this.showSearchSuggestion = false;
      }
    },
  },
  methods: {
    getdata() {
      const _data = {
        q: this.searchText,
      };

      search
        .getsearchItem(_data)
        .then((response) => {
          // console.log(
          //   response.data.results,
          //   "hello response from search textttttt"
          // );
          this.searchItems = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
      const data = this.searchItems.filter((val) => {
        if (this.searchText === "") {
          return val && this.showSearchSuggestion == false;
        } else if (val.toLowerCase().includes(this.searchText.toLowerCase())) {
          this.showSearchSuggestion = true;
          return val;
        }
      });
      // console.log(this.showSearchSuggestion, "show searchsuggestion");
      this.searchFound = data;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@200;400&family=Roboto:wght@500&display=swap");

.search__autoComplete {
  position: absolute;
  z-index: 9999;
  top: 41px;
  width: 94%;
}

.topbar__main {
  margin: 10px 0;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
}

.topbar__left {
  display: flex;
  border: 1px solid #e4e4e4;
  border-radius: 40px;
  width: 18vw;
  height: 40px;
}

.topbar__leftleft {
  display: flex;
  padding: 10px 15px;
  align-items: center;
  position: relative;
}

.search__autocomplete {
  position: absolute;
  bottom: 0;
  z-index: 99;
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
  color: #535353;
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
  border-left: 1px solid #e4e4e4;
  padding-left: 10px;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  color: #535353;
  cursor: pointer;
}

.topbar__filter:hover {
  color: #000000;
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
  color: #6b6b6b;
  margin-left: 10px;
}

.topbar__profileName > span:nth-child(1) {
  color: #000000;
  font-size: 14px;
  font-weight: bolder;
}

.topbar__profileName > span:nth-child(2) {
  color: #6b6b6b;
  font-size: 12px;
}
</style>
