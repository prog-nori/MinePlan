<script setup lang="ts">
// import { useMenu } from '~/app/composables/useMenu';

const menuContents = useMenu();
</script>

<template>
  <aside class="hidden lg:block w-64 bg-gray-800 text-white p-4">
    <h2 class="text-xl font-bold mb-4"><a href="/">MinePlan</a></h2>
    <ul class="menu px-0 w-full">
      <li
        :class="['mb-2', { 'menu-disabled': !!item.disabled }]"
        v-for="(item, index) in menuContents"
        :key="index"
      >
        <NuxtLink
          :to="item.href"
          :class="[
            'flex',
            'p-2',
            'rounded',
            'hover:bg-gray-700',
            { 'bg-gray-600': $route.path === item.href },
          ]"
        >
          <component v-if="item.svg" :is="item.svg" />

          {{ item.label.en }}{{ item.disabled && ' (Comming Soon)' }}</NuxtLink
        >
      </li>
    </ul>
  </aside>
</template>
