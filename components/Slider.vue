<script setup lang="ts">

interface Slide {
  image: string;
  text: string;
  description: string;
}

const props = withDefaults(
    defineProps<{
      slides: Slide[]
    }>(),
    {
      slides: () => []
    }
  )

</script>

<template>
  <v-container class="slider-container pa-0" :style="{ maxWidth: '1536px' }" >
    <v-carousel
      height="700"
      show-arrows="hover"
      cycle 
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(slide, index) in slides"
        :key="index"
        :src="slide.image"
        cover
      >
        <div class="overlay"></div>
        <div class="d-flex fill-height justify-center align-center">
          <div class="content">
            <h1 class="title">{{ slide.text }}</h1>
            <p class="description"> {{ slide.description }}</p>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<style scoped>
.slider-container {
  position: relative;
}

.v-carousel {
  margin: 16px 0;
  border-radius: 16px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(22, 40, 31, 0.7), rgba(22, 40, 31, 0.7));
  z-index: 1;
}

.v-carousel-item .d-flex {
  position: relative;
  z-index: 2;
  color: white;
}

.content {
  font-family: 'Inter';
  width: 1000px;
  text-align: center;
}

.title {
  font-size: 34px;
  font-weight: 600;
  text-transform: uppercase;
  font-style: italic;
}

.description {
  margin-top: 1.5rem;
  font-size: 24px;
  font-weight: 500;
}
</style>
