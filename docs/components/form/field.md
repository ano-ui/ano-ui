---
title: Field 输入框
---

# Field 输入框

## 基础用法

可以通过 `v-model` 双向绑定输入框的值，通过 `placeholder` 设置占位提示文字。

```html
<script setup lang="ts">
  import { ref } from 'vue'
  const value = ref('')
</script>

<template>
  <ACellGroup inset>
    <AField v-model="value" placeholder="请输入文本" />
  </ACellGroup>
</template>
```

## 自定义类型

根据 `type` 属性定义不同类型的输入框，默认值为 `text`。

```html
<script setup lang="ts">
  import { ref } from 'vue'
  const pwd = ref('')
</script>

<template>
  <ACellGroup inset divider>
    <AField label="文本" placeholder="请输入文本" />
    <AField label="数字" type="number" placeholder="请输入数字" />
    <AField label="小数" type="digit" placeholder="请输入小数" />
    <AField v-model="pwd" label="密码" type="password" placeholder="请输入密码" />
    <AField label="多行文本" type="textarea" show-clear placeholder="请输入多行文本" />
  </ACellGroup>
</template>
```

## 禁用状态

通过 `disabled` 属性禁用输入框。

```html
<script setup lang="ts">
  import { ref } from 'vue'
  const value = ref('')
</script>

<template>
  <ACellGroup inset>
    <AField v-model="value" placeholder="请输入文本" disabled />
  </ACellGroup>
</template>
```

## 显示字数统计

设置 `maxlength` 和 `show-word-limit` 属性后会在底部显示字数统计。

```html
<script setup lang="ts">
  import { ref } from 'vue'
  const value = ref('')
</script>

<template>
  <ACellGroup inset>
    <AField v-model="value" placeholder="请输入文本" maxlength="10" show-word-limit />
  </ACellGroup>
</template>
```

## 输入框内容对齐

通过 `input-align` 属性设置输入框内容的对齐方式，可选值为 `left`、`center`、`right`。

```html
<script setup lang="ts">
  import { ref } from 'vue'
  const value = ref('')
</script>

<template>
  <ACellGroup inset>
    <AField v-model="value" placeholder="请输入文本" input-align="left" />
    <AField v-model="value" placeholder="请输入文本" input-align="center" />
    <AField v-model="value" placeholder="请输入文本" input-align="right" />
  </ACellGroup>
</template>
```

## 输入框文本位置

通过 `label-align` 属性设置输入框文本的对齐方式，可选值为 `left`、`center`、`right`、`top`，默认为 `left`。

```html
<script setup lang="ts">
  import { ref } from 'vue'
  const value = ref('')
</script>

<template>
  <ACellGroup inset>
    <AField v-model="value" label="文本" placeholder="请输入文本" label-align="left" />
    <AField v-model="value" label="文本" placeholder="请输入文本" label-align="center" />
    <AField v-model="value" label="文本" placeholder="请输入文本" label-align="right" />
    <AField v-model="value" label="文本" placeholder="请输入文本" label-align="top" />
  </ACellGroup>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前输入的值 | `string \| number` | - |
| type | 类型，可选值为 `text`、`number`、`digit`、 `password`、 `textarea` | `string` | `text` |
<!-- | size | 大小，可选值为 `large`、`small` | `string` | - | -->
| label | 标题 | `string` | - |
| placeholder | 输入框占位提示文字 | `string` | - |
| maxlength | 最大输入长度，设置为 `-1` 的时候不限制最大长度 | `number \| string` | `-1` |
| show-word-limit | 是否显示字数统计，需要设置 `maxlength` 属性 | `boolean` | `false` |
| disabled | 是否禁用输入框 | `boolean` | `false` |
<!-- | readonly | 是否只读 | `boolean` | `false` | -->
| show-clear | 是否启用清除控件 | `boolean` | `false` |
| input-align | 输入框内容对齐方式，可选值为 `left`、`center`、`right` | `string` | `left` |
| label-align | 输入框文本对齐方式，可选值为 `left`、`center`、`right`、`top` | `string` | `left` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| focus | 输入框聚焦时触发 | `event: Event` |
| blur | 输入框失焦时触发 | `event: Event` |
| clear | 点击清除控件时触发 | `event: MouseEvent` |
| click | 点击输入框时触发 | `event: MouseEvent` |
| change | 输入框内容变化时触发 | `value: string \| number` |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义内容 |
| icon | 自定义输入框图标 |
