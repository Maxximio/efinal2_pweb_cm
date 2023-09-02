<template>
    <div>
        <h1>Estudiante</h1>

        <div>
            <Label>Token </Label>
            <input v-model="token" type="text" placeholder="ingrese token...">
        </div>

        <div>
            <Label>Nombre </Label>
            <input v-model="nombre" type="text" placeholder="ingrese nombre...">
        </div>
        
        <div>
            <Label>Apellido </Label>
            <input v-model="apellido" type="text" placeholder="ingrese apellido...">
        </div>
       
       <div>
            <Label>Cedula </Label>
            <input v-model="cedula" type="text" placeholder="ingrese cedula...">
       </div> 
        
       <div>
            <button class="btn btn-success" v-on:click="ingresarEstudiante">Ingresar</button>
       </div>

       <div v-if="exito">
        <h3>{{ mensaje }}</h3>
       </div>
       
    </div>
</template>

<script >

import{ingresarEstudianteFachada}from "../helpers/EstudianteCliente.js"

export default {
    data(){
        return{
            nombre:null,
            apellido:null,
            token:null,
            cedula:null,

            mensaje:null,
            exito:false
        }
    }, 
    methods:{

        async ingresarEstudiante(){
            const data={
                nombre: this.nombre,
                apellido: this.apellido,
                cedula: this.cedula,
            }

            await ingresarEstudianteFachada(data,this.token);
            this.mensaje="se ha ingresado correctamente"
            this.exito=true

            this.nombre=null,
            this.apellido=null,
            this.cedula=null
        }

    }
};

</script>

<style scoped>

</style>