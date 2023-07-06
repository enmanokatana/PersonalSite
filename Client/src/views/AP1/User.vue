<template>
  <div class="mt-20">
    <div class="grid h-40 card rounded-box place-items-center m-20 mt-3">
      <h1 class="text-5xl text-Black font-bold">1er Annee preaparatoire</h1>
    </div>
    <h2 class="accordion-subtitle text-3xl font-bold m-5 ml-10">Semestre 1</h2>
     <S1/>

     <h2 class="accordion-subtitle text-3xl font-bold m-5 ml-10">Semestre 2</h2>

     <S2/>
  </div>
</template>

<script>
import S1 from '../../components/S1.vue';
import S2 from '../../components/S2.vue'
export default {
  name:'User1',
  data() {
    return {
      // Add your data properties here
    };
  },
  methods: {
    // Add your methods here
  },
  components:{
    S1,
    S2
  }
};
</script>

<style>
/* Add your custom styles here */
</style>
