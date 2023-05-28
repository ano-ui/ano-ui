---
title: Radio 单选框
---

# Radio 单选框

## 基础用法

通过 `v-model` 绑定单选框的勾选状态。

```html
<template>
  <ARadio v-model="checked" label="主要" />
</template>
```

## 单选框大小

通过 `size` 属性设置单选框的大小，可选值为 `mini`、`small`、`normal`、`large`，默认为 `normal`。

```html
<template>
  <ARadio v-model="checked" label="迷你" size="mini" />
  <ARadio v-model="checked" label="小型" size="small" />
  <ARadio v-model="checked" label="普通" size="normal" />
  <ARadio v-model="checked" label="大型" size="large" />
</template>
```

## 禁用状态

通过 `disabled` 属性禁用单选框。

```html
<template>
  <ARadio v-model="checked" label="主要" disabled />
</template>
```

## 单选框类型

通过 `type` 属性设置单选框的选项类型，可选值为 `primary`、`success`、`info`、`warning`、`danger`。

```html
<template>
  <ARadio v-model="checked" label="主要" type="primary" />
  <ARadio v-model="checked" label="成功" type="success" />
  <ARadio v-model="checked" label="信息" type="info" />
  <ARadio v-model="checked" label="警告" type="warning" />
  <ARadio v-model="checked" label="危险" type="danger" />
</template>
```

## 单选框组

通过 `v-model` 绑定单选框组的勾选状态。

```html
<script setup lang="ts">
  import { ref } from 'vue'
  const checked = ref('1')
</script>

<template>
  <ARadioGroup v-model="checked">
    <ARadio label="1" />
    <ARadio label="2" />
    <ARadio label="3" />
  </ARadioGroup>
</template>
```

## API

### RadioGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前选中项的标识符 | `string \| number` | - |
| disabled | 是否禁用所有单选框 | `boolean` | `false` |

### Radio Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前选中项的标识符 | `string \| number` | - |
| label | 单选框的值 | `string \| number` | - |
| disabled | 是否禁用单选框 | `boolean` | `false` |
| size | 单选框的大小，可选值为 `mini`、`small`、`normal`、`large` | `string` | `normal` |
| type | 单选框的选项类型，可选值为 `primary`、`success`、`info`、`warning`、`danger` | `string` | `primary` |

### RadioGroup Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 当绑定值变化时触发的事件 | 当前组件的 value |

### Radio Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 当绑定值变化时触发的事件 | 当前组件的 value |

### Slots

| 名称 | 说明 |
| --- | --- |
| label | 自定义复选框的内容 |
| icon | 自定义复选框的图标 |
