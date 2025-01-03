import { createRouter, createWebHistory } from 'vue-router';
    import Home from '../views/Home.vue';
    import Projects from '../views/Projects.vue';
    import Project from '../views/Project.vue';
    import About from '../views/About.vue';
    import Contact from '../views/Contact.vue';

    const routes = [
      { path: '/', component: Home },
      { path: '/projects', component: Projects },
      { path: '/project/:title', component: Project },
      { path: '/about', component: About },
      { path: '/contact', component: Contact }
    ];

    const router = createRouter({
      history: createWebHistory(),
      routes
    });

    export default router;
