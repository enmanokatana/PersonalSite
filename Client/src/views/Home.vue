<template>


<div id="animat" class="hero min-h-screen bg-base-200 w-full">
    <div class="text-center">
  <p class="text-2xl font-bold">Hey I'm</p>
  <br>
  <h1 class="text-8xl font-bold ">HAYAOUI MOUAD</h1>

  <h2 class="text-5xl font-bold animate-letters"> I'm a  Student/SoftwareDev</h2>
  <br>
  <br>
  <br>
  <div class="text-center">
  <a href="#1" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full relative overflow-hidden bg-gray-800 text-white hover:text-gray-800 hover:bg-white hover:border-gray-800">
    <svg class="arrow-down absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
    <span class="hover-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300">SHOW MORE</span>
  </a>
</div>

</div>

</div>
<div id="1" class="m-10">
    <div class="flex justify-center">

  <div class="join join-vertical lg:join-horizontal text-center">
  <P class=" text-xl mr-10 mt-2 ">Quick search : </P> 
   <button class="btn join-item"><a href="#info-p">Personal Info</a></button>
   <button class="btn join-item"><a href="#info-p">Eductaion</a></button>
   <button class="btn join-item"><a href="#info-p">Skills</a></button>
   <button class="btn join-item"><a href="#info-p">Projects</a></button>

  </div>
</div>

</div>
<div id="info-p" class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Personal Information</h1>
      <br>
      <br>
      <div class=" text-xl bg-white shadow-lg rounded-lg p-20 ">
    <p><strong>First Name:</strong> Mouad</p>
    <br>
    <p><strong>Last Name:</strong> Hayaoui</p>
    <br>
    <p><strong>Email:</strong> hayaouimouadoff@gmail.com</p>
    <br>
    <p><strong>Phone:</strong> (+212)762444969</p>
    <br>
    <p><strong>Address:</strong> Casablanca,Morocco</p>
  </div>

    </div>
  </div>
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


</template>

<script>
import chart from '../components/chart.vue';
export default{
    name:'Home',
    components:{
chart,
    },

}
</script>

<style>
@keyframes showLetters {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-letters {
  display: inline-block;
  animation: showLetters 2s forwards;
  animation-delay: 0.1s;
}

</style>