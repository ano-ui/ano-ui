---
title: Checkbox 复选框
aside: false
---

# Checkbox 复选框

## 基础用法

通过 `v-model` 绑定复选框的勾选状态。

```html
<template>
  <ACheckbox v-model="checked" label="主要" />
</template>
```

## 复选框大小

通过 `size` 属性设置复选框的大小，可选值为 `mini`、`small`、`normal`、`large`，默认为 `normal`。

```html
<template>
  <ACheckbox v-model="checked" label="迷你" size="mini" />
  <ACheckbox v-model="checked" label="小型" size="small" />
  <ACheckbox v-model="checked" label="普通" size="normal" />
  <ACheckbox v-model="checked" label="大型" size="large" />
</template>
```

## 禁用文本点击

设置 `label-disabled` 属性后，点击图标以外的内容不会触发复选框切换。

```html
<template>
  <ACheckbox v-model="checked" type="success" label-disabled label="禁用文本点击" />
</template>
```

## 禁用状态

通过 `disabled` 属性禁用复选框。

```html
<template>
  <ACheckbox v-model="checked" label="主要" disabled />
</template>
```

## 复选框类型

通过 `type` 属性设置复选框的选项类型，可选值为 `primary`、`success`、`info`、`warning`、`danger`。

```html
<template>
  <ACheckbox v-model="checked" label="主要" type="primary" />
  <ACheckbox v-model="checked" label="成功" type="success" />
  <ACheckbox v-model="checked" label="信息" type="info" />
  <ACheckbox v-model="checked" label="警告" type="warning" />
  <ACheckbox v-model="checked" label="危险" type="danger" />
</template>
```

## 复选框组

通过 `v-model` 绑定复选框组的勾选状态。

```html
<script setup lang="ts">
import { ref } from 'vue'
const checkedList = ref(['a'])
</script>

<template>
  <ACheckboxGroup v-model="checkedList">
    <ACheckbox value="a" label="A" />
    <ACheckbox value="b" label="B" />
    <ACheckbox value="c" label="C" />
  </ACheckboxGroup>
</template>
```

## 限制勾选数量

通过 `min` 和 `max` 属性限制复选框组的勾选数量。

```html
<script setup lang="ts">
import { ref } from 'vue'
const checkedList = ref(['a'])
</script>

<template>
  <ACheckboxGroup v-model="checkedList" :min="1" :max="2">
    <ACheckbox value="a" label="A" />
    <ACheckbox value="b" label="B" />
    <ACheckbox value="c" label="C" />
  </ACheckboxGroup>
</template>
```

## API

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 绑定值 | `Array` | `-` |
| min | 最小可选数，`0` 表示不限制 | `number` | `-1` |
| max | 最大可选数，`0` 表示不限制 | `number` | `-1` |
| disabled | 是否禁用 | `boolean` | `false` |
| label-disabled | 是否禁用文本点击 | `boolean` | `false` |
| size | 大小，可选值为 `mini`、`small`、`normal`、`large` | `string` | `normal` |
| direction | 排列方向，可选值为 horizontal | `string` | `vertical` |

### Checkbox Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 绑定值 | `string \| Array \| object` | `-` |
| label | 选项的标签值 | `string \| number \| boolean \| object` | `-` |
| disabled | 是否禁用 | `boolean` | `false` |
| label-disabled | 是否禁用文本点击 | `boolean` | `false` |
| size | 大小，可选值为 `mini`、`small`、`normal`、`large` | `string` | `normal` |
| type | 选项类型，可选值为 `primary`、`success`、`info`、`warning`、`danger` | `string` | `primary` |

### CheckboxGroup Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 当绑定值变化时触发的事件 | `value: string \| Array \| object` |

### Checkbox Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 当绑定值变化时触发的事件 | `value: string \| Array \| object` |

### Checkbox Slots

| 名称 | 说明 |
| --- | --- |
| label | 自定义复选框的内容 |
| icon | 自定义图标类名 | `string` | - |
