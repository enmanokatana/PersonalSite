<template>
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <router-link to="/" class="btn btn-ghost normal-case text-xl">Study</router-link>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><a>Login</a></li>
          <li>
            <details>
              <summary>
                Year
              </summary>
              <ul class="p-2 bg-base-100">
                <li><a>1st Year</a></li>
                <li><a>2ec Year</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
    </template>
    
    <script>
    export default{
        name:'Header',
    
    }
    </script>