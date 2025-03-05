<script setup lang="ts">
export const menuContents: {
  href: string;
  label: {
    en: string;
    ja: string;
  };
  iconFile?: string;
  svg?: ReturnType<typeof resolveComponent>;
  disabled?: boolean;
}[] = [
  {
    href: '/tools/angle-line',
    label: { en: 'Line by Angle', ja: '角度から斜線作成' },
    svg: resolveComponent('SvgLineByAngle'),
    disabled: true,
  },
  {
    href: '/tools/straight-line',
    label: { en: 'Straight Line', ja: '2点間の直線' },
    svg: resolveComponent('SvgStraightLine'),
    disabled: true,
  },
  {
    href: '/tools/s-curve',
    label: { en: 'S-Curve', ja: '2点間のS字カーブ' },
    svg: resolveComponent('SvgSCurve'),
    disabled: true,
  },
  {
    href: '/tools/text-to-dots',
    label: { en: 'Text to Dots', ja: '文字をドットで表現' },
    svg: resolveComponent('SvgTextToDots'),
    disabled: true,
  },
  {
    href: '/tools/random-pattern',
    label: { en: 'Random Pattern', ja: 'ランダム模様を作成' },
    svg: resolveComponent('SvgRandomPattern'),
    disabled: true,
  },
  {
    href: '/tools/excel-column',
    label: { en: 'Excel Column Converter', ja: 'Excel列 → 数字変換' },
    svg: resolveComponent('SvgExcelConverter'),
  },
];
</script>

<template>
  <aside class="w-64 bg-gray-800 text-white p-4">
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
