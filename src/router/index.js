import Vue from 'vue'
import VueRouter from 'vue-router'

// import Login from '../views/login/Login'
const Login=()=>import('../views/login/Login');
const Home=()=>import('../views/home/Home')
const Option=()=>import("../views/option/Option")
const Test=()=>import("../views/test/Test")

Vue.use(VueRouter)

  const routes = [
  {
    path: '',
    redirect:"/login"
  },
  {
    path: "/login",
    component: Login

  }, {
          path: "/home",
          component: Home

      },
      {
          path:"/option",
          component:Option
      },{
          path:"/test",
          component:Test
      }
  ]

const router = new VueRouter({
  routes,
    mode:'history'
})

export default router
