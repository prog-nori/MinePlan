<script setup lang="ts">
// import { useMenu } from '~/app/composables/useMenu';

const menuContents = useMenu();
</script>

<template>
  <div class="flex lg:hidden navbar bg-base-100 shadow-sm">
    <div class="navbar-start">
      <a class="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div class="navbar-end">
      <div class="dropdown static">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content left-0 bg-base-100 rounded-box z-1 mt-3 w-screen p-2 shadow"
        >
          <li
            :class="[{ 'menu-disabled': !!item.disabled }]"
            v-for="(item, index) in menuContents"
            :key="index"
          >
            <NuxtLink
              :to="item.href"
              :class="['flex', { 'bg-gray-600': $route.path === item.href }]"
            >
              <component v-if="item.svg" :is="item.svg" />

              {{ item.label.en
              }}{{ item.disabled && ' (Comming Soon)' }}</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
