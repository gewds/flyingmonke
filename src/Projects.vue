<template>
      <div class="projects-container">
        <h2>Projects</h2>
        <button @click="filter('Residential')">Residential</button>
        <button @click="filter('Interior')">Interior</button>
        <button @click="filter('Commercial')">Commercial</button>
        <button @click="filter('Hospitality')">Hospitality</button>
        <button @click="filter('Miscellaneous')">Miscellaneous</button>

        <div class="project-grid">
          <div v-for="(project, index) in filteredProjects" :key="index" class="project-item">
            <img :src="project.image" alt="Project Image">
            <h3>{{ project.title }}</h3>
            <p>{{ project.category }}</p>
            <a @click="openProject(project)">View Details</a>
          </div>
        </div>
      </div>
    </template>

    <script>
    export default {
      data() {
        return {
          projects: [
            { image: 'https://via.placeholder.com/200x150?text=Residential+Project', title: 'Residential Project 1', category: 'Residential' },
            { image: 'https://via.placeholder.com/200x150?text=Interior+Project', title: 'Interior Project 1', category: 'Interior' },
            { image: 'https://via.placeholder.com/200x150?text=Commercial+Project', title: 'Commercial Project 1', category: 'Commercial' },
            { image: 'https://via.placeholder.com/200x150?text=Hospitality+Project', title: 'Hospitality Project 1', category: 'Hospitality' },
            { image: 'https://via.placeholder.com/200x150?text=Miscellaneous+Project', title: 'Miscellaneous Project 1', category: 'Miscellaneous' }
          ],
          currentFilter: ''
        };
      },
      computed: {
        filteredProjects() {
          if (this.currentFilter === '') return this.projects;
          return this.projects.filter(project => project.category === this.currentFilter);
        }
      },
      methods: {
        filter(category) {
          this.currentFilter = category;
        },
        openProject(project) {
          window.location.href = `/project/${project.title}`;
        }
      }
    }
    </script>

    <style scoped>
    .projects-container {
      padding: 2rem;
    }

    .project-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
    }

    .project-item {
      border: 1px solid #ddd;
      padding: 1rem;
      text-align: center;
    }

    .project-item img {
      width: 100%;
      height: auto;
    }
    </style>
