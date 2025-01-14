<template>
  <v-container :style="{ maxWidth: '1536px' }" class="pa-4">
    <div class="row">
      <div class="direitos">
        © 2024 Regulariza Imovéis Rurais. Todos os direitos reservados.
      </div>
      <div class="social">
        <p class="link-social">Instagram</p>
        <a href="https://www.linkedin.com/in/ig-geotecnologia-e-regulariza%C3%A7%C3%A3o-de-im%C3%B3veis-rurais-371322318/" target="_blank" class="link-social">Linkedin</a>
      </div>
    </div>
  </v-container>
</template>

<style lang="css" scoped>

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.direitos {
  color: #ddd;
}

.social {
  display: flex;
  align-items: center;
  gap: 16px;
}

.link-social {
  color: #ddd;
}
</style>