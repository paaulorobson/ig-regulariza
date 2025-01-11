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
   <v-container :style="{ maxWidth: '1536px' }" class="pa-0">
    <v-carousel
      height="700px"
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
.v-carousel {
  position: relative;
  border-radius: 1rem;
}
/* .v-carousel-item img {
  object-fit: cover; 
  width: 100%;
  height: 100%;
} */

/* .v-carousel-item {
  position: relative;
} */

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

.pulsating-image {
  position: absolute;
  top: 20%; /* Ajuste a posição vertical */
  left: 50%; /* Centraliza horizontalmente */
  transform: translate(-50%, -50%); /* Centraliza a imagem */
  width: auto; /* Ajuste o tamanho da imagem */
  height: auto; /* Ajuste o tamanho da imagem */
  z-index: 1000000; /* Coloca a imagem acima do slider */
  animation: pulse 2s infinite; /* Adiciona a animação de pulsação */
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.7;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}
</style>
