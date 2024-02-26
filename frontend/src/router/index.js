import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from "../views/LandingPage.vue";
import CreateNewTask from "../views/CreateNewTask.vue"
import EditTask from "../views/EditTask.vue"

const routes = [

  {
    name: "LandingPage",
    path: "/",
    component: LandingPage,
  },

  {
    name: "CreateNewTask",
    path: "/addnewtask",
    component: CreateNewTask,
  },

  {
    name: "EditTask",
    path: "/edit/:id",
    component: EditTask,
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
