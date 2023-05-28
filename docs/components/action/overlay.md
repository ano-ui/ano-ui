---
title: Overlay 遮罩层
---

# Overlay 遮罩层

## 基础用法

```html
<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)
</script>

<template>
  <AOverlay :show="show" />
  <AButton @click="show = true">展示遮罩层</AButton>
</template>
```

## 嵌入内容

```html
<template>
  <AOverlay :show="show">
    <div class="h-full flex items-center justify-center">
      <div class="h-20 bg-white w-20" @click.stop />
    </div>
  </AOverlay>
  <AButton @click="show = true">展示遮罩层</AButton>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否展示遮罩层 | `boolean` | `false` |
| duration | 动画时长，单位为毫秒 | `number` | `200` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击遮罩层时触发 | - |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义内容 |
