<script setup lang="ts">
useHead({
  htmlAttrs: {
    'data-theme': 'dark',
  },
});
</script>
<template>
  <div class="block lg:flex min-h-screen">
    <CommonSideMenu />
    <CommonHeader />

    <!-- メインコンテンツ -->
    <main class="flex-1 p-8">
      <NuxtPage />
    </main>
  </div>
</template>
