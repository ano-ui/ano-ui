---
title: Dialog 弹出框
aside: false
---

# Dialog 弹出框

## 基础用法

```html
<script setup lang="ts">
import { ref } from 'vue'
import { DialogInst, DialogOptions } from 'ano-ui'

const dialog = ref<DialogInst>()

function showDialog(options: DialogOptions) {
  dialog.value?.show(options)
}
</script>

<template>
  <ADialog ref="dialog" />
  <AButton @click="showDialog({ title: '标题', message: '这是一个弹出框' })">
    展示弹出框
  </AButton>
</template>
```

## 消息确认

用于确认消息，包含取消和确认按钮。

```html
<script setup lang="ts">
import { ref } from 'vue'
import { DialogInst, DialogOptions } from 'ano-ui'

const dialog = ref<DialogInst>()

function showDialog(options: DialogOptions) {
  dialog.value?.show(options)
}
</script>

<template>
  <ADialog ref="dialog" />
  <AButton @click="showDialog({ title: '标题', message: '这是一个弹出框', showCancelButton: true })">
    展示弹出框
  </AButton>
</template>
```

## API

### DialogOptions 数据结构

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | - |
| message | 内容 | `string` | - |
| showCancelButton | 是否展示取消按钮 | `boolean` | `false` |
| showConfirmButton | 是否展示确认按钮 | `boolean` | `true` |
| cancelButtonText | 取消按钮文本 | `string` | `取消` |
| confirmButtonText | 确认按钮文本 | `string` | `确认` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| confirm | 点击确认按钮时触发 | - |
| cancel | 点击取消按钮时触发 | - |
