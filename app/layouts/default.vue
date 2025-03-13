<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';

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

const isLoading = ref(true);
onMounted(async () => {
  await nextTick(); // Vue の描画を一度待つ
  requestAnimationFrame(() => {
    isLoading.value = false; // 次の描画フレームで Loader を消す
  });
});
</script>
<template>
  <div
    v-if="isLoading"
    class="flex align-center justify-center w-screen h-screen fixed bg-black"
  >
    <span class="loading loading-bars loading-xl"></span>
  </div>
  <template v-else>
    <div class="block lg:flex min-h-screen">
      <!-- Todo: SideMenu固定のもっと良いプラクティスを考えたい -->
      <div class="lg:h-screen lg:fixed lg:bg-gray-800">
        <CommonSideMenu />
      </div>
      <CommonHeader />

      <!-- メインコンテンツ -->
      <main
        class="relative flex-1 py-8 px-4 lg:p-8 z-1 lg:ml-64 overflow-x-hidden max-w-full"
      >
        <NuxtPage />
      </main></div
  ></template>
</template>
