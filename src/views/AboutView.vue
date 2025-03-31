<template>
  <div class="container">
    <h1>Sobre</h1>
    <p class="description">
      Projeto voltado para revisão de conceitos de Vue Router.
    </p>
  </div>
  
  <div class="container">
    <div class="about-me">
      <h1>Sobre Mim</h1>
      
      <div class="img-info">
        <img src="../assets/eu-glibhi.jpeg" class="my-img" alt="foto do autor do site">
        <div>
          <p class="description">
            André Brenner
          </p>
          <div class="links-redes">
            <p><a href="https://www.linkedin.com/in/andrelrbrenner/" target="_blank">Linkedin</a></p>
            <p><a href="https://github.com/AndreBrennerbr"  target="_blank">GitHub</a></p>
          </div>  
        </div>
      
      </div>
      
      
      <p class="description">
        Desenvolvedor de software com mais de 3 anos de experiência em desenvolvimento web e aprimoramento de
        sistemas. Expertise em PHP, Laravel, escalabilidade de sistemas e otimização de performance, utilizando RabbitMQ,
        cache e otimização de consultas SQL. Comprometido com a qualidade do código por meio de testes unitários, boas
        práticas de desenvolvimento e aplicação de padrões de design. Experiência na melhoria da usabilidade de interfaces,
        resultando em interações mais intuitivas e eficientes para os usuários, além de facilitar a manutenção e evolução dos
        sistemas.
      </p>
  
    </div>
  </div>

  

  
</template>

<style scoped>
  .img-info{
    display: flex;
    align-items:center;
    margin-bottom: 10px;
  }

  .my-img{
    border-radius: 100px;
    width: 120px;
    margin-right: 10px;

  }


  
</style>

