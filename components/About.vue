<template>
  <v-container :style="{ maxWidth: '1536px' }" class="pa-0">
    <div class="about">
      <div class="wrapper">
        <div>
          <div class="pt-8 ma-2">
            <div class="wrapper-about">
              <div>
                <h1 class="title">Sobre nós</h1>
                Nossa empresa se dedica à excelência e à ética em tudo o que
                faz. Somos guiados por princípios cristãos, como integridade,
                justiça e respeito ao próximo, que refletem em nosso compromisso
                com clientes, parceiros e com a sociedade. Valorizamos a
                transparência e buscamos sempre oferecer soluções que promovam o
                bem comum, com foco na qualidade e na responsabilidade."
              </div>
              <div class="pa-8 ma-2">
                <img
                  src="/images/about.jpeg"
                  alt="imagem drone no campo"
                  class="image"
                />
              </div>
            </div>

            <h2 class="subtitle">Por que escolher a IG Geotecnologia?</h2>
            A <strong>IG Geotecnologia</strong> atua a partir de um modelo
            moderno de consultoria, baseado em tecnologia, inteligência
            territorial e dados geoespaciais. <br />Nossa operação é estruturada
            em um ecossistema nacional de parceiros técnicos, o que garante
            escala, agilidade e qualidade técnica em projetos realizados em
            diferentes regiões do Brasil. <br />Entregamos diagnósticos
            precisos, monitoramento contínuo e suporte estratégico, apoiando
            decisões seguras e sustentáveis, sempre com atuação consultiva,
            preventiva e orientada por dados.

            <div class="values">
              <h3 class="subtitle">Valores</h3>
              <div class="items">
                <span class="neon-bar"></span> Empreendedorismo é um dom
              </div>
              <div class="items">
                <span class="neon-bar"></span> Transparência
              </div>
              <div class="items">
                <span class="neon-bar"></span> Ética inegociável
              </div>
              <div class="items">
                <span class="neon-bar"></span> Honestidade
              </div>
              <div class="items">
                <span class="neon-bar"></span> Conhecimento
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ma-2">
        <h3 class="subtitle">Missão</h3>
        <div>
          Se redução de custo, aumento de faturamento, planejamento estratégico,
          for requisitos importantes para você, a IG Transforma grandes dados em
          soluções precisas, garantindo decisões mais assertivas para o seu
          negócio. Acreditamos que o Cadastro Territorial transformará a gestão
          e o planejamento dos municípios no Brasil.
        </div>
      </div>
    </div>
  </v-container>
</template>

<style scoped>
.title {
  font-size: 3.75rem;
  margin: 3rem 0 1rem;
}

.wrapper {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-evenly;
}

.wrapper-about {
  display: flex;
  align-items: flex-start;
}

.about {
  background-image: url(/images/padrao.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: radial-gradient(
    50% 100% at 50% 0%,
    #2e482c 0%,
    #16281f 100%
  );
  margin-bottom: 3rem;
}

.image {
  border-radius: 8px;
  width: 100%;
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
  background-color: #acef75;
  display: inline-block;
  box-shadow: 0 0 5px #acef75, 0 0 10px #acef75, 0 0 20px #acef75;
}

@media (max-width: 1024px) {
  .title {
    font-size: 2.5rem;
  }

  .about {
    margin-bottom: 2rem;
  }

  .image {
    display: none;
  }

  .values {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .items {
    flex-direction: row;
    gap: 5px;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }

  .about {
    margin-bottom: 1.5rem;
  }

  .wrapper {
    flex-direction: column;
    padding: 16px;
  }

  .image {
    max-width: 100%;
  }

  .values {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .mission {
    padding: 16px;
  }

  .items {
    flex-direction: row;
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.5rem;
  }

  .about {
    margin-bottom: 1rem;
  }

  .wrapper {
    flex-direction: column;
    padding: 16px;
  }

  .image {
    max-width: 100%;
  }

  .items {
    flex-direction: row;
    gap: 10px;
  }
}
</style>
