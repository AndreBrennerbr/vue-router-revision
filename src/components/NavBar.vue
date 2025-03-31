<template>
    <nav class="nav-bar">
        <ul class="ul-bar">
            <li>
                <RouterLink to="/">
                    <svg  xmlns="http://www.w3.org/2000/svg"  
                    width="24"  
                    height="24"  
                    viewBox="0 0 24 24"  
                    fill="none"  
                    stroke="currentColor" 
                    stroke-width="2"  
                    stroke-linecap="round"  
                    stroke-linejoin="round" 
                    class="icon icon-tabler icons-tabler-outline icon-tabler-brand-steam">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M16.5 5a4.5 4.5 0 1 1 -.653 8.953l-4.347 3.009l0 .038a3 3 0 0 1 -2.824 3l-.176 0a3 3 0 0 1 -2.94 -2.402l-2.56 -1.098v-3.5l3.51 1.755a2.989 2.989 0 0 1 2.834 -.635l2.727 -3.818a4.5 4.5 0 0 1 4.429 -5.302z" />
                    <circle cx="16.5" cy="9.5" r="1" fill="currentColor" />
                    </svg>
                </RouterLink>
            </li>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
        </ul>
    </nav>
</template>

<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
    .nav-bar{
        background-color: #1ABC9C;
    }
    .ul-bar{
        display: flex;
        gap: 12px;
        justify-content: flex-start;
        background-color: #1ABC9C;
        padding: 15px;

    }

    .ul-bar li, a{
        text-decoration: none;
        list-style: none;
        font-size: 20px;
        color: #FFFFFF;
        font-weight: bold;
        cursor: pointer;
    }

    .ul-bar a:hover{
        text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.8);
    }

</style>