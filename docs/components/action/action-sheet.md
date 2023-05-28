---
title: ActionSheet 动作面板
---

# ActionSheet 动作面板

## 基础用法

动作面板通过 `actions` 属性来定义选项，`actions` 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象格式见文档下方表格。

```html
<script setup lang="ts">
  import { ref } from 'vue'
  import { ActionSheetAction } from 'ano-ui'

  const show = ref(false)
  const actions = ref<ActionSheetAction[]>([
    { name: '选项一' },
    { name: '选项二' },
    { name: '选项三' },
  ])
</script>

<template>
  <AButton text="展示动作面板" @click="show = true" />
  <ActionSheet v-model:show="show" :actions="actions" />
</template>
```

## 展示取消按钮

通过 `cancel-text` 属性设置取消按钮的文本。

```html
<template>
  <AButton text="展示动作面板" @click="show = true" />
  <ActionSheet v-model:show="show" :actions="actions" cancel-text="取消" />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:show | 是否展示动作面板 | `boolean` | `false` |
| actions | 动作面板选项 | `ActionSheetAction[]` | `[]` |
| cancel-text | 取消按钮文本 | `string` | `取消` |

### ActionSheetAction 数据结构

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 选项名称 | `string` | - |
| className | 选项类名 | `string` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| open | 动作面板打开时触发 | - |
| close | 动作面板关闭时触发 | - |
| opened | 动作面板打开动画结束时触发 | - |
| closed | 动作面板关闭动画结束时触发 | - |
| cancel | 点击取消按钮时触发 | - |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义内容 |
