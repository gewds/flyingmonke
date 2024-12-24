<template>
      <div class="about-container">
        <h1>About Us</h1>
        <p>Flying Monké is a leading architecture practice known for our innovative designs and commitment to sustainability.</p>
        <h2>Team</h2>
        <div class="team-members">
          <div class="member">
            <img src="https://via.placeholder.com/150" alt="Member 1">
            <p>Name: Member 1</p>
            <p>Role: Architect</p>
          </div>
          <div class="member">
            <img src="https://via.placeholder.com/150" alt="Member 2">
            <p>Name: Member 2</p>
            <p>Role: Designer</p>
          </div>
        </div>
      </div>
    </template>

    <script>
    export default {
      name: 'About'
    }
    </script>

    <style scoped>
    .about-container {
      padding: 2rem;
    }

    .team-members {
      display: flex;
      justify-content: space-around;
    }

    .member img {
      width: 100%;
      height: auto;
    }
    </style>
