<template>
    <div class="mt-20">
      <div class="grid h-40 card rounded-box place-items-center m-20 mt-3">
        <h1 class="text-5xl text-Black font-bold">2eme Annee preaparatoire</h1>
      </div>
      <h2 class="accordion-subtitle text-3xl font-bold m-5 ml-10">Semestre 3</h2>
       <S3/>
  
       <h2 class="accordion-subtitle text-3xl font-bold m-5 ml-10">Semestre 4</h2>
  
       <S4/>
    </div>
  </template>

<script>
import S3 from '../../components/S3.vue';
import S4 from '../../components/S4.vue'
export default {
  name:'User2',
  data() {
    return {
      // Add your data properties here
    };
  },
  methods: {
    // Add your methods here
  },
  components:{
    S3,
    S4
  }
};
</script>