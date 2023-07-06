<template>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Register now!</h1>
          <p class="py-6">For a better experience make an account</p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control flex">
              <div class="w-1/2 pr-1">
                <label class="label">
                  <span class="label-text">First Name</span>
                </label>
                <input type="text" placeholder="First Name" class="input input-bordered" v-model="firstName" />
              </div>
              <div class="w-1/2 pl-1">
                <label class="label">
                  <span class="label-text">Last Name</span>
                </label>
                <input type="text" placeholder="Last Name" class="input input-bordered" v-model="lastName" />
              </div>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input type="email" placeholder="Email" class="input input-bordered" v-model="email" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Phone Number</span>
              </label>
              <input type="tel" placeholder="Phone Number" class="input input-bordered" v-model="phoneNumber" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input type="password" placeholder="Password" class="input input-bordered" v-model="password" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Confirm Password</span>
              </label>
              <input type="password" placeholder="Confirm Password" class="input input-bordered" v-model="confirmPassword" />
            </div>
            <div class="form-control mt-4">
              <label class="cursor-pointer label">
                <input type="checkbox" class="checkbox" v-model="agreeToLicense" />
                <span class="label-text ml-2">I agree to the license terms and conditions</span>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary" @click="register" :disabled="!agreeToLicense">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Register',
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        agreeToLicense: false,
      };
    },
    methods: {
      register() {
        if(!this.checkpassword()){

        }
        // Handle registration logic
        // Access form values using this.firstName, this.lastName, etc.
      },
      checkpassword(){
        if(this.password===this.confirmPassword){
            return true;
            
        }else{
            console.log('error not matching passwords')
            return false;

        }

      }
    },

  };
  </script>
  