<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center">No hay dada seleccionado</h1>
    </div>
    <FabComponent  icon="fa-plus" />
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
   components:{
    FabComponent: defineAsyncComponent( () => import('../components/FabComponent.vue') )
   }
};
</script>

<style lang="scss" scoped>
    div{
        height: 100%;
    }
</style>