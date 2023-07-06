<template>
  <div class="navbar bg-base-200 fixed top-0 w-full z-[999] " >
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Homepage</a></li>
          <li><a>Portfolio</a></li>
          <li><a>About</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <a class="btn btn-ghost normal-case text-xl" href="/">Study Ensat</a>
    </div>
    <div class="navbar-end">
      <button class="btn btn-ghost btn-circle" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <div class="avatar online placeholder">
          <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
             <span class="text-xl">{{initials}}</span>
          </div>
        </div> 
      </button>
      <!-- <button class="btn btn-ghost btn-circle">
        
      </button> -->
      <div class="flex items-center md:order-2">
     
      <!-- Dropdown menu -->
      <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div class="px-4 py-3">
          <span class="block text-sm text-gray-900 dark:text-white">{{user.nom}} {{user.prenom}}</span>
          <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">{{user.email}}</span>
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
    </div>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Header',
  methods: {},
  computed: {
    ...mapState(['user']),
    initials() {
      if (this.user && this.user.prenom && this.user.nom) {
        const firstLetter = this.user.prenom.charAt(0);
        const lastLetter = this.user.nom.charAt(0);
        return `${firstLetter}${lastLetter}`;
      }
      return '';
    },
  },
};
</script>
