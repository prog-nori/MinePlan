<script setup lang="ts">
import { useMenu } from '~/composables/useMenu';

const menuContents = useMenu();
</script>

<template>
  <aside class="sticky top-0 hidden lg:block w-64 text-white p-4">
    <h2 class="text-xl font-bold mb-4"><a href="/">MinePlan</a></h2>
    <ul class="menu px-0 w-full">
      <li
        v-for="(item, index) in menuContents"
        :key="index"
        :class="['mb-2', { 'menu-disabled': !!item.disabled }]"
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
          <component
            :is="item.svg"
            v-if="item.svg"
            :color="item.disabled ? 'oklch(97.807% 0.029 256.847)' : 'white'"
          />

          {{ item.label.en }}{{ item.disabled && ' (Comming Soon)' }}</NuxtLink
        >
      </li>
    </ul>
  </aside>
</template>
