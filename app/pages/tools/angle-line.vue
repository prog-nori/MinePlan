<script setup lang="ts">
useHead({
  title: 'Line by Angle',
});

const tableSize = 64;
</script>

<template>
  <h1 class="text-2xl font-bold">Line by Angle</h1>
  <p class="mt-4">角度から斜線作成</p>
  <!-- TODO: 重い。255*255だとSafariでまともに動作せず。スクロールしたら追加読み込み、とかにした方が良さげ？ -->
  <CellTableContainer>
    <CellTable
      :width="tableSize"
      :height="tableSize"
      :scale="1"
      :filled-cells="[
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 1 },
        { x: 3, y: 1 },
      ]"
      ruler
    />
  </CellTableContainer>
</template>
