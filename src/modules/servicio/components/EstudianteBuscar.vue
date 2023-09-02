<template>
    <div>

        <div class="token">
            <Label>Token</Label>
        <input v-model="token" type="text" placeholder="ingrese token...">
        </div>
        
        <div>
    <table class="table table-success table-striped">
          <tr class="bordes">
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Cedula</th>
          </tr>
          <tr v-for="estu in estudiantes" class="table">
            <td>{{estu.id}}</td>
            <td>{{estu.nombre}}</td>
            <td>{{estu.apellido}}</td>
            <td>{{estu.cedula}}</td>
          </tr>
      </table>

      <button class="btn btn-success" v-on:click="buscaTodos">Refrescar</button>

  </div>



    </div>
</template>

<script>

import {buscarTodosFachada} from "../helpers/EstudianteCliente"

export default {
    data(){
        return{
            id:null,
            nombre:null,
            apellido:null,
            token:null,
            cedula:null,

            estudiantes:[],

            mensaje:null,
            exito:false,
        }
    },methods:{
        async buscaTodos() {
        const res = await buscarTodosFachada(this.token);
        //console.log(res);
        this.estudiantes = res.data;
    },
    mounted(){
        // this.buscaTodos;
    }
}
}


</script>

<style scoped>

.token{
    margin-top: 20px;
    margin-bottom: 20px;
}


</style>