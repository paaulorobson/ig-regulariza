<script setup lang="ts">

const slides = ref([
  {
    image: "/images/slide1.jpg",
    text: "Prazer Somos a IG Geotecnologia e Regularização de Imóveis Rurais",
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
    <ImageSlider :slides="slides" />
    <About />
    <Services />
  </div>
</template>
