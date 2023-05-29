---
title: Popup 弹出层
aside: false
---

# Popup 弹出层

## 基础用法

通过 `v-model:show` 控制弹出层是否展示。

```html
<script setup lang="ts">
import { ref } from 'vue'
const showValue = ref(false)
</script>

<template>
  <APopup v-model:show="showValue">
    <div class="flex items-center justify-center text-white h-100px w-200px bg-primary">
      内容
    </div>
  </APopup>
  <ACell title="展示弹出层" arrow @click="showValue = true" />
</template>
```

## 弹出位置

通过 `position` 属性设置弹窗的弹出位置，默认为居中弹出，可以设置为 `top`、`bottom`、`left`、`right`。

```html
<template>
  <!-- 顶部弹出 -->
  <APopup v-model:show="showValue" position="top"></APopup>

  <!-- 底部弹出 -->
  <APopup v-model:show="showValue" position="bottom"></APopup>

  <!-- 左侧弹出 -->
  <APopup v-model:show="showValue" position="left"></APopup>

  <!-- 右侧弹出 -->
  <APopup v-model:show="showValue" position="right"></APopup>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:show | 是否展示弹出层 | `boolean` | `false` |
| position | 弹出位置，可选值为 `top` `bottom` `left` `right` | `string` | `center` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| open | 打开弹出层时触发 | - |
| close | 关闭弹出层时触发 | - |
| opened | 打开弹出层动画结束时触发 | - |
| closed | 关闭弹出层动画结束时触发 | - |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义内容 |
