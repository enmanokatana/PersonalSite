<template>
<div class="flex flex-col w-full">
  
  <!-- login place -->
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
    <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Welcom to Study</h1>
      <p class="py-6">Get the best Uni studying experience with us on the platform</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" class="input input-bordered" />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
            <router-link to="/register" class="label-text-alt link link-hover">Create an account</router-link>
          </label>
         
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
</template>

<script>
export default{
    name:'Login',
    components:{

    },

}
</script>

<style>
</style>