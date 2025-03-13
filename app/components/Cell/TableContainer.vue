<template>
  <div class="relative w-full h-full overflow-auto py-4">
    <!-- 上部の影 -->
    <div
      class="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-gray-300 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none"
      :class="{ 'opacity-100': isScrolled }"
    ></div>

    <!-- コンテンツ -->
    <div ref="scrollBox" class="space-y-4">
      <slot />
    </div>

    <!-- 下部の影 -->
    <div
      class="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-gray-300 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none"
      :class="{ 'opacity-100': isScrolledBottom }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const scrollBox = ref<HTMLDivElement | null>(null);
const isScrolled = ref(false);
const isScrolledBottom = ref(false);

const handleScroll = () => {
  if (!scrollBox.value) return;
  isScrolled.value = scrollBox.value.scrollTop > 0;
  isScrolledBottom.value =
    scrollBox.value.scrollTop + scrollBox.value.clientHeight <
    scrollBox.value.scrollHeight;
};

onMounted(() => {
  if (scrollBox.value) {
    scrollBox.value.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期判定
  }
});

onUnmounted(() => {
  if (scrollBox.value) {
    scrollBox.value.removeEventListener('scroll', handleScroll);
  }
});
</script>

<style scoped>
/* スクロールバーをカスタマイズ（オプション） */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}
</style>
