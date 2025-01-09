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
    <v-carousel 
      width="100%" 
      height="100vh"
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
</template>

<style scoped>
.v-carousel-item img {
  object-fit: cover; 
  width: 100%;
  height: 100%;
}

.v-carousel-item {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(21, 104, 39, 0.7));
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
  font-size: 44px;
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
