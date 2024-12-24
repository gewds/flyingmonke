<template>
      <div class="project-details">
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
        <img :src="project.image" alt="Project Image">
        <p>Category: {{ project.category }}</p>
        <p>Area: {{ project.area }} sqft</p>
        <p>Materials: {{ project.materials }}</p>
      </div>
    </template>

    <script>
    export default {
      data() {
        return {
          project: {}
        };
      },
      created() {
        const title = this.$route.params.title;
        this.project = this.getProjectByTitle(title);
      },
      methods: {
        getProjectByTitle(title) {
          // Assuming projects.json is available
          const projects = require('../projects.json');
          return projects.find(project => project.title === title);
        }
      }
    }
    </script>

    <style scoped>
    .project-details {
      padding: 2rem;
      text-align: center;
    }

    .project-details img {
      width: 100%;
      height: auto;
    }
    </style>
