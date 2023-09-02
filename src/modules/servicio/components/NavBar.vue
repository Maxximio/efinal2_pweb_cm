<template>
    <div class="container">    
        <div class="menu">
            <router-link to="/token">Generar Token</router-link>
            <router-link to="/estudiante">Estudiante Ingrreso</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.container{
    text-align: left;
    margin-bottom: 20px;
}
.menu{
text-align: center;
}

a{
    border: solid;
    border-style: groove;
    border-color:black ;
    margin: 0;
    font-weight: bold;
    font-size: large;
    color:black;  
    padding-left: 2%;
    padding-right: 2%;
}

a:hover{
    background-color: blue;
} 


</style>