import Vue from "vue";
import Router from "vue-router";

// import all routes
import Simple from "@/components/simple";
import Module from "@/components/module";
import Dynamic from "@/components/dynamic";
import Methods from "@/components/methods";
import Events from "@/components/events";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "simple",
      component: Simple
    },
    {
      path: "/module",
      name: "module",
      component: Module
    },
    {
      path: "/dynamic",
      name: "dynamic",
      component: Dynamic
    },
    {
      path: "/methods",
      name: "methods",
      component: Methods
    },
    {
      path: "/events",
      name: "events",
      component: Events
    }
  ]
});
