---
title: Switch 开关
---

# Switch 开关

## 基础用法

通过 `v-model` 绑定开关的状态。

```html
<template>
  <ASwitch v-model="checked" />
</template>
```

## 禁用状态

通过 `disabled` 属性禁用开关。

```html
<template>
  <ASwitch v-model="checked" disabled />
</template>
```

## 开关大小

通过 `size` 属性设置开关的大小，可选值为 `mini`、`small`、`normal`、`large`，默认为 `normal`。

```html
<template>
  <ASwitch v-model="checked" size="mini" />
  <ASwitch v-model="checked" size="small" />
  <ASwitch v-model="checked" size="normal" />
  <ASwitch v-model="checked" size="large" />
</template>
```

## 开关类型

通过 `type` 属性设置开关的选项类型，可选值为 `primary`、`success`、`info`、`warning`、`danger`，默认为 `primary`。

```html
<template>
  <ASwitch v-model="checked" type="primary" />
  <ASwitch v-model="checked" type="success" />
  <ASwitch v-model="checked" type="info" />
  <ASwitch v-model="checked" type="warning" />
  <ASwitch v-model="checked" type="danger" />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 绑定值 | `boolean \| number \| string` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| size | 开关尺寸，可选值为 `mini` `small` `normal` `large` | `string` | `normal` |
| type | 开关类型，可选值为 `primary` `success` `info` `warning` `danger` | `string` | `primary` |
| active-value | 打开时的文字描述 | `boolean \| number \| string` | `true` |
| inactive-value | 关闭时的文字描述 | `boolean \| number \| string` | `false` |
| icon | 自定义图标类名 | `string` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 开关状态发生变化时触发 | 开关状态值 |

### Slots

| 名称 | 说明 |
| --- | --- |
| icon | 自定义图标类名 | `string` | - |
| active | 自定义打开时的内容 |
| inactive | 自定义关闭时的内容 |
