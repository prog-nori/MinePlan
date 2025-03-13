<script setup lang="ts">
import type { Range } from '~/models/Range';
import { type Position, comparePositions } from '~/models/Position';

const props = defineProps<{
  /**
   * テーブル幅
   */
  width: Range<256>;

  /**
   * テーブル高さ
   */
  height: Range<256>;

  /**
   * 表示倍率
   */
  scale?: Range<10>;

  /**
   * ルーラーの表示有無
   */
  ruler?: boolean;

  /**
   * 塗りつぶしセル
   */
  filledCells?: Position[];
}>();

const rows = computed(() => Array.from({ length: props.height }));
const cols = computed(() => Array.from({ length: props.width }));

const filledCells = ref<Position[]>([]);

onMounted(() => {
  if (!props.filledCells) {
    filledCells.value = [];
  } else {
    filledCells.value = [...props.filledCells].sort(
      (a: Position, b: Position) => {
        if (a.y !== b.y) {
          return a.y - b.y; // y が小さい順
        }
        return a.x - b.x; // y が同じなら x が小さい順
      }
    );
    filledCells.value = [...(props.filledCells ?? [])].sort(comparePositions);
  }
});

// const filledCells = computed(() => {
//   if (!props.filledCells) {
//     return [];
//   }
//   return [...props.filledCells].sort((a: Position, b: Position) => {
//     if (a.y !== b.y) {
//       return a.y - b.y; // y が小さい順
//     }
//     return a.x - b.x; // y が同じなら x が小さい順
//   });
// });

console.log(filledCells);

const borderColor = 'rgba(255, 255, 255, 0.1)';
// 選択中のborderColor: 'var(--color-base-content)'

// セルのサイズは任意の倍率x2rem
const scale = (props.scale ? props.scale : 1) * 2;

const compare = (pos: Position) => {
  if (filledCells.value.length === 0) return false;

  const firstCell = filledCells.value[0]; // undefined の可能性を排除
  console.log(firstCell, filledCells.value.length);
  if (comparePositions(firstCell, pos) === 0) {
    console.log('shift');
    filledCells.value.shift();
    return true;
  }
  console.log('not shift');
  return false;
};

const isFilled = (x: number, y: number) => {
  return compare({ x, y });
};
// const compare = (pos: Position) => {
//   console.log(filledCells);
//   console.log(filledCells.value.at(0));
//   if (
//     comparePositions(filledCells.value.at(0), {
//       x: pos.x,
//       y: pos.y,
//     }) === 0
//   ) {
//     filledCells.value.shift();
//     return 0;
//   }
// };
</script>

<template>
  <!-- TODO: 欲しい機能
     ・セルの選択機能（インデックスはv-model）
     ・ルーラーの設置オプション
     ・セルの塗りつぶし情報を配列で受け取る（今は白のままで良いがゆくゆくはrgba）
     ・選択機能を1つのセルから範囲で選択できるよう改良（複数の長方形は選択できなくて良い）
     ・(ゆくゆく)
        ・塗りつぶし色の選択
        ・階段/ハーフブロックの塗りつぶし機能
     -->
  <table class="border-collapse border-none" :style="{ borderColor }">
    <tbody>
      <tr v-if="props.ruler" class="sticky top-0">
        <th
          v-for="colIndex in cols.length + 1"
          :key="colIndex"
          :class="[
            'font-normal',
            'z-50',
            { 'sticky left-0 border-none font-normal': colIndex === 0 },
          ]"
        >
          <template v-if="colIndex !== 1">{{ colIndex - 1 }}</template>
        </th>
      </tr>
      <tr v-for="(_, rowIndex) in rows" :key="rowIndex">
        <th v-if="props.ruler" class="sticky left-0 font-normal">
          {{ rowIndex + 1 }}
        </th>
        <td
          v-for="(_, colIndex) in cols"
          :key="colIndex"
          :class="[
            'relative',
            'border',
            isFilled(colIndex, rowIndex) ? 'bg-white' : '',
            // {
            //   'bg-white': compare({ x: colIndex, y: rowIndex }),
            // },
          ]"
          :style="{
            borderColor,
            backgroundColor: 'var(--b1)',
            width: `${scale}rem`,
            height: `${scale}rem`,
            minWidth: `${scale}rem`,
            minHeight: `${scale}rem`,
          }"
        ></td>
      </tr>
    </tbody>
  </table>
</template>

<style></style>
