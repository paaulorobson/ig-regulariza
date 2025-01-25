<script setup lang="ts">
import About from './about.vue';
import Services from './services.vue';
import Contact from './contact.vue';

const slides = ref([
  {
    image: "/images/slide1.jpg",
    text: "Prazer Somos a IG Geotecnologia e Regularização de Imóveis Rurais",
    description: ''
  },
  {
    image: "/images/slide6.jpg",
    text: "Prezamos pelo bom relacionamento e tratamos nossos clientes como nossos parceiros",
    description: ''
  },
  {
    image: "/images/slide5.jpg",
    text: "Acreditamos que o cadastro territorial transforma e revoluciona na administração e planejamento",
    description: ''
  },
])
</script>

<template>
  <div>
    <Slider :slides="slides" id="home"/>
    <About id="about"/>
    <Services id="service" />
    <Contact id="contact"/>
  </div>
</template>
