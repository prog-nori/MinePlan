<script setup lang="ts">
useHead({
  htmlAttrs: {
    'data-theme': 'dark',
  },
  meta: [
    {
      hid: 'viewport',
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
    },
  ],
});
</script>
<template>
  <div class="block lg:flex min-h-screen">
    <CommonSideMenu />
    <CommonHeader />

    <!-- メインコンテンツ -->
    <main class="flex-1 py-8 px-4 lg:p-8">
      <NuxtPage />
    </main>
  </div>
</template>
