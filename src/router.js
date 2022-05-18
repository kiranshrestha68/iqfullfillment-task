import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./pages/Home.vue";
import Statistics from "./pages/Statitics.vue"
import Patients from "./pages/Patients.vue"
import Polyclinic from "./pages/Polyclinic.vue"
import Doctors from "./pages/Doctors.vue"
import Medicines from "./pages/Medicine.vue"

import Error from "./pages/Error.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  base: __dirname,
  routes: [
    { path: "/", component: Home },
    { path: "/statistics", component: Statistics },
    { path: "/patients", component: Patients },
    { path: "/polyclinic", component: Polyclinic },
    { path: "/doctors", component: Doctors },
    { path: "/medicines", component: Medicines },



    { path: "*", component: Error },
   
  ],
});

export default router;
