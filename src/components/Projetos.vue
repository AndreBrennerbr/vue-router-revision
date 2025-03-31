<template>
    <div class="main-content-projects">
        <div v-for="projeto in projetos" class="content-card">
           <img class="img-style" :src="imgPath + projeto.imgSource">
            <p class="description">Titulo: {{ projeto.titulo }}</p>
            <p class="description">Descrição: {{ projeto.descricao }}</p>
            <p><RouterLink :to="`/projeto/${projeto.id}`">Clica aqui!</RouterLink></p>
            <a :href=projeto.link target="_blank">Ver Detalhes do Projeto (GitHub)</a>
    
        </div>
    </div>
</template>

<script setup>
 import { defineProps,ref } from 'vue';
    
    defineProps({
        projetos:Array
    })

    const imgPath = ref('../public/img/') 


</script>

<style scoped>
.content-card{
    border: 1px solid #1ABC9C;
    border-radius: 10px;
    width:47%;
    padding: 15px;
}

/* content-card:hover{

} */

.main-content-projects{
    display: flex;
    flex-wrap: wrap;
    gap:10px
}

.description{
    width: 100%;
}


.img-style{
    width: 170px;
    height: 103px;
}

@media (max-width: 1342px) {
  .content-card {
    width: 100%;
  }
}
</style>