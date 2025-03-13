<script setup lang="ts">
import { useMenu } from '~/composables/useMenu';

const menuContents = useMenu();
const route = useRoute();

watch(
  () => route.path,
  () => {
    const drawerCheckbox = document.getElementById(
      'drawer'
    ) as HTMLInputElement;
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  }
);
</script>

<template>
  <div
    class="sticky top-0 flex lg:hidden navbar bg-base-100/30 backdrop-blur-md shadow-sm px-4 z-10"
  >
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost pl-0 text-xl">MinePlan</NuxtLink>
    </div>
    <div class="navbar-end drawer">
      <input id="drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <label for="drawer" class="drawer-button"
          ><svg
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
        </label>
      </div>
      <div class="drawer-side z-10">
        <label
          for="drawer"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <div class="navbar-start">
            <NuxtLink to="/" class="btn btn-ghost text-xl">MinePlan</NuxtLink>
          </div>
          <li
            v-for="(item, index) in menuContents"
            :key="index"
            :class="['mb-2', { 'menu-disabled': !!item.disabled }]"
          >
            <NuxtLink
              :to="item.href"
              :class="[
                'flex',
                'py-2',
                { 'bg-gray-600': $route.path === item.href },
              ]"
            >
              <component :is="item.svg" v-if="item.svg" color="white" />

              {{ item.label.en
              }}{{ item.disabled && ' (Comming Soon)' }}</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
