<script setup lang="ts">
useHead({
  title: 'Excel Column Converter',
});

const text = ref(undefined);
const result = computed(() =>
  typeof text.value !== 'undefined' || text.value === ''
    ? excelColumnToNumber(text.value)
    : null
);

const showAlert = ref(false);

const showSuccessAlert = () => {
  showAlert.value = true;

  // 2秒後に非表示
  setTimeout(() => {
    showAlert.value = false;
  }, 2000);
};

const copyText = async () => {
  if (text.value && typeof result.value !== 'undefined') {
    try {
      await navigator.clipboard.writeText(String(result.value));
      // 成功
      showSuccessAlert();
    } catch (err) {
      // 失敗
      console.log(err);
    }
  }
};

function excelColumnToNumber(column: string | undefined): number | undefined {
  let result = 0;

  if (typeof column === 'undefined' || column === '') return undefined;

  for (let i = 0; i < column.length; i++) {
    const charCode = column.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
    result = result * 26 + charCode;
  }

  return result;
}
</script>

<template>
  <!-- アラート -->
  <transition name="fade">
    <div
      v-if="showAlert"
      role="alert"
      class="alert alert-success fixed top-4 left-1/2 transform -translate-x-1/2 shadow-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Copied!</span>
    </div>
  </transition>
  <h1 class="text-2xl font-bold">Excel Column Converter</h1>
  <p class="my-4">Excel列 → 数字変換</p>
  <div class="grid grid-cols-2 gap-4">
    <input
      v-model="text"
      type="text"
      placeholder="i.g.) AA"
      class="input w-full"
    />
    <div :class="[{ tooltip: typeof result !== 'undefined' }]" data-tip="Copy">
      <input
        type="text"
        placeholder="i.g.) 27"
        class="input w-full"
        :value="result"
        readonly
        @click="copyText"
      />
    </div>
  </div>
</template>

<style>
/* フェードイン・フェードアウトのアニメーション */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
