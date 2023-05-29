---
title: Notify 消息通知
aside: false
---

# Notify 消息通知

## 基础用法

```html
<script setup lang="ts">
import { ref } from 'vue'
import { NotifyInst, NotifyOptions } from 'ano-ui'

const notify = ref<NotifyInst>()

function showNotify(options: NotifyOptions) {
  notify.value?.show(options)
}
</script>

<template>
  <ANotify ref="notify" />
  <AButton @click="showNotify({ title: '标题', message: '这是一个消息通知' })">
    展示消息通知
  </AButton>
</template>
```

## 消息通知类型&图标

```html
<script setup lang="ts">
import { ref } from 'vue'
import { NotifyInst, NotifyOptions } from 'ano-ui'

const notify = ref<NotifyInst>()

function showNotify(options: NotifyOptions) {
  notify.value?.show(options)
}
</script>

<template>
  <ANotify ref="notify" />

  <ACellGroup arrow divider inset>
    <ACell title="主要通知" @click="showNotify({ type: 'primary', showIcon: true, message: '通知内容' })" />
    <!-- <ACell title="信息通知" @click="showNotify({ type: 'info', showIcon: true, message: '通知内容' })" /> -->
    <ACell title="成功通知" @click="showNotify({ type: 'success', showIcon: true, message: '通知内容' })" />
    <ACell title="警告通知" @click="showNotify({ type: 'warning', showIcon: true, message: '通知内容' })" />
    <ACell title="危险通知" @click="showNotify({ type: 'danger', showIcon: true, message: '通知内容' })" />
  </ACellGroup>
</template>
```

## 消息通知位置

Notify 默认渲染在屏幕正中位置，通过 `position` 属性可以控制 Notify 展示的位置。

```html
<script setup lang="ts">
import { ref } from 'vue'
import { NotifyInst, NotifyOptions } from 'ano-ui'

const notify = ref<NotifyInst>()

function showNotify(options: NotifyOptions) {
  notify.value?.show(options)
}
</script>

<template>
  <ANotify ref="notify" />

  <ACellGroup arrow divider inset>
    <ACell title="默认顶部" @click="showNotify({ position: 'default', message: '通知内容' })" />
    <ACell title="上方" @click="showNotify({ position: 'top', message: '通知内容' })" />
    <ACell title="左上角" @click="showNotify({ position: 'top-left', message: '通知内容' })" />
    <ACell title="右上角" @click="showNotify({ position: 'top-right', message: '通知内容' })" />
    <ACell title="下方" @click="showNotify({ position: 'bottom', message: '通知内容' })" />
    <ACell title="左下角" @click="showNotify({ position: 'bottom-left', message: '通知内容' })" />
    <ACell title="右下角" @click="showNotify({ position: 'bottom-right', message: '通知内容' })" />
  </ACellGroup>
</template>
```

## API

### NotifyOptions 数据结构

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| message | 消息内容 | `string` | - |
| type | 类型，可选值为 `primary` `success` `warning` `danger` | `string` | `primary` |
| position | 位置，可选值为 `default` `top` `top-left` `top-right` `bottom` `bottom-left` `bottom-right` | `string` | `default` |
| duration | 展示时长(ms)，值为 0 时，notify 不会消失 | `number` | `3000` |
| showIcon | 是否显示图标 | `boolean` | `false` |
| showClose | 是否显示关闭按钮 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义内容 |
| icon | 自定义图标 |
