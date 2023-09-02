<template>
    <div>
    
    <div class="componente 1">
        <DatosIngresar/>
    </div>
    <div class="componente  2">
        <DatosBuscar/>
    </div>
    </div>
</template>

<script >

import DatosIngresar from '../components/EstudianteIngresar.vue';
import DatosBuscar from '../components/EstudianteBuscar.vue';

export default {
    components: {
        DatosIngresar,
        DatosBuscar,
    },
};

</script>

<style scoped>

.componente1{
    margin-bottom: 20px;
}

</style>