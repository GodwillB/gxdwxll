import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/contact.vue'
import blog from './views/blog.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
   {
    path: '/contact',
    name: 'contact',
    component: Contact
   },
   {
    path: '/blog',
    name: 'blog',
    component: blog
   }  
   ]
})
