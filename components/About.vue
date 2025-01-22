<template>
  <v-container :style="{ maxWidth: '1536px' }" class="pa-0">
    <div class="about">
      <v-row no-gutters>
          <v-col>
            <div class="pt-8 ma-2">
              <h1 class="title">Sobre nós</h1>
              Nossa empresa se dedica à excelência e à ética em tudo o que faz. Somos guiados por princípios cristãos, como integridade, justiça e respeito ao próximo, que refletem em nosso compromisso com clientes, parceiros e com a sociedade. Valorizamos a transparência e buscamos sempre oferecer soluções que promovam o bem comum, com foco na qualidade e na responsabilidade."

              <h2 class="subtitle">Valores</h2>
              <div class="items"><span class="neon-bar"></span> Empreendedorismo é um dom</div>
              <div class="items"><span class="neon-bar"></span> Transparência</div>
              <div class="items"><span class="neon-bar"></span> Ética inegociável</div>
              <div class="items"><span class="neon-bar"></span> Honestidade</div>
              <div class="items"><span class="neon-bar"></span> Conhecimento</div>
            </div>
          </v-col>
          <v-col>
            <div class="pa-8 ma-2">
              <img src="/images/cadastrorural.jpg" alt="imagem drone no campo" height="400px" class="image"/>
            </div>
          </v-col>
      </v-row>
      <h2 class="subtitle">Missão</h2>
      <div>
        Se redução de custo, aumento de faturamento, planejamento estratégico, for requisitos importantes para você, a IG Transforma grandes dados em soluções precisas, garantindo decisões mais assertivas para o seu negócio.
        Acreditamos que o Cadastro Territorial transformará a gestão e o planejamento dos municípios no Brasil.
      </div>
    </div>
  </v-container>
</template>

<style scoped>
.title {
  font-size: 3.75rem;
  margin: 3rem 0 1rem;
}

.about {
  background-image: url(/images/padrao.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: radial-gradient(50% 100% at 50% 0%, #2E482C 0%, #16281F 100%);
  margin-bottom: 3rem;
}

.image {
  margin: 3rem 0 1rem;
  border-radius: 8px;
}

.subtitle {
  margin: 3rem 0 1rem;
}

.items {
  display: flex;
  align-items: center;
  gap: 10px;
}

.neon-bar {
  height: 2px;
  width: 24px;
  background-color: #ACEF75;
  display: inline-block;
  box-shadow: 0 0 5px #ACEF75, 0 0 10px #ACEF75, 0 0 20px #ACEF75;
}

</style>