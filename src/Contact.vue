<template>
      <div class="contact-container">
        <h2>Contact Us</h2>
        <p>Phone: +91-9535696698</p>
        <p>Email: work.prajwalgowda@gmail.com</p>

        <form @submit.prevent="submitForm">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required>

          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required>

          <label for="message">Message:</label>
          <textarea id="message" v-model="formData.message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </template>

    <script>
    export default {
      data() {
        return {
          formData: {
            name: '',
            email: '',
            message: ''
          }
        };
      },
      methods: {
        submitForm() {
          alert('Thank you for your message!');
          this.formData = {
            name: '',
            email: '',
            message: ''
          };
        }
      }
    }
    </script>

    <style scoped>
    .contact-container {
      padding: 2rem;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    label, input, textarea, button {
      margin-bottom: 1rem;
    }
    </style>
