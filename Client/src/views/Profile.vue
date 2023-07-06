<template>
    <div class="mt-20">
        <div class="user-profile m-10">
      <h2 class="text-3xl font-bold mb-4">Profile Information</h2>
      <hr class="m-5">
      <div class="flex items-center">
        <div class="w-20 h-20 bg-gray-300 rounded-full"></div>
        <div class="ml-10 text-xl">
          <div class="flex m-5">
            <span class="font-bold w-20">Name:</span>
            <span>John Doe</span>
          
            <span class="font-bold w-20 ml-20">Email:</span>
            <span>johndoe@example.com</span>
         
            <span class="font-bold w-20 ml-20">School:</span>
            <span>Example High School</span>
        
            <span class="font-bold w-20 ml-20">Year:</span>
            <span>Senior</span>
          </div>
        </div>
      </div>
      <hr class="m-5">

    </div>
    <!-- CARDS -->
      <div class="grid grid-cols-4 gap-4 m-10">
        <div class="card w-full bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">Number of Hours worked</h2>
                <div class="radial-progress ml-auto" style="--value:70;">70%</div>
            </div>
        </div>
        <div class="card w-full bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">Number of lessons dowloaded</h2>
               
            </div>
        </div>
        <div class="card w-full bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">Card title!</h2>
               
            </div>       
         </div>
        <div class="card w-full bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">Card title!</h2>
               
            </div>       
         </div>
         
      </div>
      <hr class="m-5 ml-10 mr-10">
    <chart/>

    </div>
  </template>
  
<script>
import chart from '../components/chart.vue';
export default {
    name:'Profile',
    components:{
      chart,
    }
}

</script>