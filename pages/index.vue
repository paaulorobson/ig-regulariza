<script setup lang="ts">

const slides = ref([
  {
    image: "/images/slide1.jpg",
    text: "Prazer Somos a IG Geotecnologia e Regularização de Imóveis Rurais",
    description: "Somos Especialista em Cadastro Territorial Rural e Urbano"
  },
  {
    image: "/images/slide2.jpg",
    text: "Prezamos pelo bom relacionamento e tratamos nossos clientes como nossos parceiros",
    description: ''
  },
  {
    image: "/images/slide3.jpg",
    text: "Acreditamos que o cadastro territorial transforma e revoluciona na administração e planejamento",
    description: ''
  },
])
</script>

<template>
  <div>
    <ImageSlider :slides="slides" />
  </div>
</template>
