---
title: Tag 标签
---

# Tag 标签

## 基础用法

标签支持 `primary`、`success`、`info`、`warning`、`danger` 五种类型，默认为 `primary`。

```html
<template>
  <ATag>默认标签</ATag>
  <ATag type="primary">主要标签</ATag>
  <ATag type="success">成功标签</ATag>
  <ATag type="info">信息标签</ATag>
  <ATag type="warning">警告标签</ATag>
  <ATag type="danger">危险标签</ATag>
</template>
```

## 标签大小

标签支持 `mini`、`small`、`normal`、`large` 四种大小，默认为 `normal`。

```html
<template>
  <ATag size="mini">迷你标签</ATag>
  <ATag size="small">小型标签</ATag>
  <ATag size="normal">普通标签</ATag>
  <ATag size="large">大型标签</ATag>
</template>
```

## 标签变体

标签支持 `solid`、`outline`、`ghost`、`light`、`text` 五种变体，默认为 `solid`。

```html
<template>
  <ATag variant="solid">实心标签</ATag>
  <ATag variant="outline">空心标签</ATag>
  <ATag variant="ghost">虚线标签</ATag>
  <ATag variant="light">次要标签</ATag>
  <ATag variant="text">文字标签</ATag>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为 `primary`、`success`、`info`、`warning`、`danger` | `string` | `primary` |
| size | 大小，可选值为 `mini`、`small`、`normal`、`large` | `string` | `normal` |
| variant | 变体，可选值为 `solid`、`outline`、`ghost`、`light`、`text` | `string` | `solid` |
| closable | 是否可关闭 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击标签时触发 | - |
| close | 关闭时触发 | - |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义内容 |
| icon | 自定义图标类名 | `string` | - |
