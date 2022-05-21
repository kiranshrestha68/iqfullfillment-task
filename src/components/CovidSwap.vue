<template>
  <div class="col2__body">
    <h2>Appointment Lists</h2>
    <div class="col2__bodyPart">
      <div class="col2__corona">
        <img :src="title.image" alt="" />

        <div class="col2__coronaDesc">
          <span>{{title.title}}</span>
          <span>{{title.time}}</span>
          <span>{{title.number}} Participants</span>
        </div>
      </div>
      <div class="allPeople">
        <div class="peoples">
          <div class="people">JK</div>
          <div class="people2">KS</div>
          <div class="people3">AS</div>
          <div class="people4">IP</div>
          <div class="all">15<sup> +</sup></div>
        </div>

        <div class="rightArrow">
          <img :src="require('../assets/right.svg')" alt="right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CovidSwap",
  props: ["title"],
};
</script>
