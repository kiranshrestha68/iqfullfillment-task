<template>
  <div class="header__locationDropdown">
    <span v-for="country in searchFound" :key="country.id"> {{ country }}</span>
  </div>
</template>

<script>
export default {
  name: "AutoComplete",
  components: {},
  props: ["searchFound"],
  data() {
    return {
      branch: [],
    };
  },

  methods: {},
  mounted() {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat&family=Roboto:wght@500&display=swap");

.header__locationDropdown {
  background-color: white;
  display: flex;
  flex-direction: column;

  position: absolute;
  box-shadow: 0 1px 3px #0000001f, 0 1px 2px #0000003d;
  width: 100%;
  opacity: 1;
  color: black;
  z-index: 9999;
  transition: all 0.8s ease;
  font-family: "Montserrat", sans-serif;

  border-radius: 3px;
}

.header__locationDropdown > span {
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  color: rgb(80, 80, 80);
  padding: 3px 5px;
  font-weight: 200;
  cursor: pointer;
}

.header__locationDropdown > span:hover {
  text-decoration: underline;
  background: rgb(247, 247, 247);
}
</style>
