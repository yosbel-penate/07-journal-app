<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">15</span>
            <span class="mx-1 fs-3 fw-bold">julio</span>
            <span class="text-success fs-3 fw-bold">2021, jueves</span>
        </div>
        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary mx-2">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea 
            placeholder="¿Qué sucedió hoy?"
        ></textarea>
    </div>
    <FabComponent/>
    <img 
        src="@/assets/logo.png" 
        alt="entry-picture"
    >
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { getEntryById } from '../store/journal/getters';
import { mapGetters } from 'vuex';

export default {
    props:{
        id:{
            type: String,
            required: true
        }
    },
    components:{
        FabComponent: defineAsyncComponent(()=>import('../components/FabComponent.vue'))
    },
    data() {
        return {
            entry: null,
        };
    },
    computed:{
        ...mapGetters('journal', [getEntryById])
    },
    methods: {
        loadEntry() {
            const entry = this.getEntryById(this.id)
            if (!entry) {
                this.$router.push({name: 'no-entry'})
            }
            this.entry = entry
        }
    },
    created() {
        this.loadEntry()
    }
};
</script>

<style lang="scss" scoped>
    textarea{
        font-size: 20px;
        border: none;
        height: 100%;
        &:focus{
            outline: none;
        }
    }
    img{
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
    }
</style>