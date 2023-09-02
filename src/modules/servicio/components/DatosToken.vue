<template>
    <div class="container">

        <h1>Token</h1>

        <div>
            <Label>Semilla </Label>
            <input v-model="semilla" type="text" placeholder="ingrese semilla...">
        </div>
        
        <div>
            <Label>Tiempo </Label>
            <input v-model="tiempo" type="text" placeholder="ingrese tiempo...">
        </div>

        <div>
            <div>
                <Label>Token </Label>
            </div>
            <!-- <input rows:2 v-model="token" type="text"> -->
            <textarea id="1" cols="20" rows="3" v-model="token" type="text"></textarea>
        </div>
        

        <div class="boton">
            <button class="btn btn-primary" v-on:click="generarToken">Generar</button>
        </div>
        
    </div>
</template>

<script>

import{generarTokenFachada}from "../helpers/TokenCliente"

export default {
    data(){
        return{
            semilla:null,
            tiempo:null,
            token:null,

            mensaje:null,
            exito:false
        }
    }, 
    methods:{

        async generarToken(){
            const data={
                tiempo: this.tiempo,
                semilla: this.semilla,
            }

            return this.token=await generarTokenFachada(data);
        }

    }
};

</script>

<style scoped>

.container{
    text-align: center;
}


</style>