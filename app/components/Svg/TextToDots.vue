<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5 16.5V19.1667C4.50927 19.8239 5.20097 20.51 5.83333 20.4996H8.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path
      d="M19.5 9.5V6.83333C19.4907 6.17615 18.799 5.48999 18.1667 5.50043H15.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <rect
      x="3.5"
      y="4.5"
      width="10"
      height="10"
      rx="2.5"
      stroke="currentColor"
    />
    <defs>
      <mask id="dots-a">
        <!-- 背景（デフォルトで白にする） -->
        <rect width="100%" height="100%" fill="currentColor" />
        <!-- くり抜きたい部分（黒にする） -->
        <rect x="12.5" y="16.5" width="2" height="2" fill="black" />
        <rect x="12.5" y="18.5" width="2" height="2" fill="black" />
        <rect x="14.5" y="16.5" width="2" height="2" fill="black" />
        <rect x="14.5" y="12.5" width="2" height="2" fill="black" />
        <rect x="12.5" y="14.5" width="2" height="2" fill="black" />
        <rect x="16.5" y="14.5" width="2" height="2" fill="black" />
        <rect x="16.5" y="16.5" width="2" height="2" fill="black" />
        <rect x="16.5" y="18.5" width="2" height="2" fill="black" />
      </mask>
    </defs>

    <!-- くり抜き適用 -->
    <rect
      x="10.5"
      y="11.5"
      width="10"
      height="10"
      rx="2.5"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="1"
      mask="url(#dots-a)"
    />
    <path
      d="M6.5 12L7.8931 7.35633C7.95655 7.14483 8.15121 7 8.37202 7H8.62285C8.84609 7 9.04228 7.14799 9.10361 7.36264L10 10.5L10.25 11.25M7.5 10.125H9.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </svg>
</template>
