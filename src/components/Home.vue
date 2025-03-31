
<template>

<div class="container">
    <h1>Projetos</h1>
    <Projetos :projetos="ListaProjeto"/>
</div>



</template>

<script setup>
    import Projetos from './Projetos.vue';
    const ListaProjeto = [
        {id:"1",titulo:"basic-vuejs-revision",link:'https://github.com/AndreBrennerbr/basic-vuejs-revision',imgSource:'vue.jpg',descricao:'O objetivo principal deste repositório foi revisar conceitos fundamentais do Vue.js.'},
        {id:"2",titulo:"fin-app",link:'https://github.com/AndreBrennerbr/fin-app',imgSource:'laravel.png',descricao:'SaaS voltado para controle financeiro, focando em boas praticas e deploy.'},
        {id:"3",titulo:"Paas-restapi-flask",link:'https://github.com/AndreBrennerbr/Paas-restapi-flask',imgSource:'flask.png',descricao:'Api para cadastro e busca de usuário com foco em deploy.'},
        {id:"4",titulo:"Golang-S3-AWS-Bucket",link:'https://github.com/AndreBrennerbr/Golang-S3-AWS-Bucket',imgSource:'golang.png',descricao:'Upload de imagem em um sistema que imita o bucket S3.'},
    ]
</script>