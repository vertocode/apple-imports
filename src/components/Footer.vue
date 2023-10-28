<template>
  <div class="footer">
    <!--  TODO: Implement I18N  -->
    <div class="content">
      <div class="description">
        <h2>Description</h2>
        <p>Bem-vindo à nossa loja de importações, onde trazemos o melhor do mundo diretamente para você! Especializada em produtos Apple, cada item é cuidadosamente selecionado para oferecer a você a experiência mais premium. Dirigida com maestria por Everton Vanoni Fernandes (CNPJ: 52.141.632/0001-79), nossa equipe está empenhada em proporcionar o mais alto padrão de qualidade e satisfação. Deixe-nos ajudar você a descobrir a magia da tecnologia de ponta - estamos aqui para tornar seus sonhos tecnológicos uma realidade.</p>
      </div>

      <div class="contact">
        <h2>Contact</h2>
        <p class="email">
          <i class="fa fa-envelope p-2"></i>
          <a href="mailto:evertonvanoni1@gmail.com">evertonvanoni1@gmail.com</a>
        </p>

        <p class="email">
          <i class="fa fa-phone p-2"></i>
          <a target="_blank" href="https://wa.me/5535992712327">
            <i class="fa fa-whatsapp p-2"></i>
            +55 (35) 99271-2327
          </a>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>

<style>
.footer {
  margin-top: 1em;
  background-color: black;
  color: white;
  gap: 4em;

  .content {
    margin: 0 3em;
    padding: 1em 0;
    display: flex;
    justify-content: space-evenly;
    gap: 2em;
    flex-wrap: wrap;

    .description {
      max-width: 70%;
    }


    .contact {
      max-width: 100%;

      .email a {
        color: white;
        text-decoration: none;
      }
    }
  }
}
</style>