<template>
      <div class="slideshow-container">
        <div v-for="(slide, index) in slides" :key="index" class="mySlides fade">
          <img :src="slide.image" style="width:100%">
          <div class="text">{{ slide.title }}</div>
        </div>

        <a class="prev" @click="plusSlides(-1)">&#10094;</a>
        <a class="next" @click="plusSlides(1)">&#10095;</a>
      </div>
    </template>

    <script>
    export default {
      data() {
        return {
          slides: [
            { image: 'https://via.placeholder.com/800x600?text=Project+1', title: 'Project 1' },
            { image: 'https://via.placeholder.com/800x600?text=Project+2', title: 'Project 2' },
            { image: 'https://via.placeholder.com/800x600?text=Project+3', title: 'Project 3' }
          ],
          slideIndex: 1
        };
      },
      mounted() {
        this.showSlides(this.slideIndex);
      },
      methods: {
        plusSlides(n) {
          this.showSlides(this.slideIndex += n);
        },
        showSlides(n) {
          let i;
          const slides = document.getElementsByClassName("mySlides");
          if (n > slides.length) {this.slideIndex = 1}    
          if (n < 1) {this.slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          slides[this.slideIndex-1].style.display = "block";  
        }
      }
    }
    </script>

    <style scoped>
    .slideshow-container {
      max-width: 1000px;
      position: relative;
      margin: auto;
    }

    .mySlides {display:none;}

    .prev, .next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: auto;
      padding: 16px;
      margin-top: -22px;
      color: white;
      font-weight: bold;
      font-size: 18px;
      transition: 0.6s ease;
      border-radius: 0 3px 3px 0;
    }

    .next {
      right: 0;
      border-radius: 3px 0 0 3px;
    }

    @media only screen and (max-width: 300px) {
      .prev, .next,.text {font-size: 12px}
    }
    </style>
