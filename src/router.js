import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Lesson1 from "./views/Lesson1.vue";
import Lesson2 from "./views/Lesson2.vue";
import Lesson3 from "./views/Lesson3.vue";
import Lesson4 from "./views/Lesson4.vue";
import Lesson5 from "./views/Lesson5.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/lesson1",
      name: "lesson1",
      component: Lesson1
    },
    {
      path: "/lesson2",
      name: "lesson2",
      component: Lesson2
    },
    {
      path: "/lesson3",
      name: "lesson3",
      component: Lesson3
    },
    {
      path: "/lesson4",
      name: "lesson4",
      component: Lesson4
    },
    {
      path: "/lesson5",
      name: "lesson5",
      component: Lesson5
    }
  ]
});
