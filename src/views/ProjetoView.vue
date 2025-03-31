
<template>

    <div  v-if="valorResultArr != null" class="container">
        <h1>Projeto #{{valorResultArr.id}}</h1>
        <p>Titulo:{{valorResultArr.titulo}}</p>
        <p>Descrição:{{valorResultArr.descricao}}</p>
        <a :href=valorResultArr.link target="_blank">Repositorio</a>
    </div>
    <div class="container" v-else>
        <p class="descricao">Projeto não existe</p>
    </div>
    
    
</template>

<script setup>
    import { useRoute } from 'vue-router'
    import { computed } from 'vue'

    const route = useRoute()
    const idReq =  route.params.id

    const ListaProjeto = [
        {id:"1",titulo:"basic-vuejs-revision",link:'https://github.com/AndreBrennerbr/basic-vuejs-revision',imgSource:'vue.jpg',descricao:'O objetivo principal deste repositório foi revisar conceitos fundamentais do Vue.js.'},
        {id:"2",titulo:"fin-app",link:'https://github.com/AndreBrennerbr/fin-app',imgSource:'laravel.png',descricao:'SaaS voltado para controle financeiro, focando em boas praticas e deploy.'},
        {id:"3",titulo:"Paas-restapi-flask",link:'https://github.com/AndreBrennerbr/Paas-restapi-flask',imgSource:'flask.png',descricao:'Api para cadastro e busca de usuário com foco em deploy.'},
        {id:"4",titulo:"Golang-S3-AWS-Bucket",link:'https://github.com/AndreBrennerbr/Golang-S3-AWS-Bucket',imgSource:'golang.png',descricao:'Upload de imagem em um sistema que imita o bucket S3.'},
    ]

    const valorResultArr = computed(() => {
        return ListaProjeto.find(projeto => projeto.id === idReq) || null
    })
    

</script>