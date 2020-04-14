import Vue from "vue";
import VueRouter from "vue-router";
import EventCreate from "../views/EventCreate";
import EventList from "../views/EventList";
import EventShow from "../views/EventShow";
import User from "../views/User";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'event-show',
    component: EventShow,
    props: true
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: EventCreate
  },
  {
    path: '/user/:username',
    name: 'user',
    component: User,
    props: true
  }
];

const router = new VueRouter({
  mode: 'history', // remove # from the address bar
  // base: process.env.BASE_URL,
  routes
});

export default router;
