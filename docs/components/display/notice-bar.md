---
title: NoticeBar 通知栏
---
# NoticeBar 通知栏

## 基础用法

```html
<template>
  <ANoticeBar>通知栏内容</ANoticeBar>
</template>
```

## 通知栏类型

通过 `type` 属性设置通知栏类型。

```html
<template>
  <ANoticeBar type="primary">通知栏内容</ANoticeBar>
  <ANoticeBar type="success">通知栏内容</ANoticeBar>
  <ANoticeBar type="info">通知栏内容</ANoticeBar>
  <ANoticeBar type="warning">通知栏内容</ANoticeBar>
  <ANoticeBar type="danger">通知栏内容</ANoticeBar>
</template>
```

## 通知栏变体

通过 `variant` 属性设置通知栏变体。

```html
<template>
  <ANoticeBar variant="solid">Solid</ANoticeBar>
  <ANoticeBar type="success" variant="outline">Outline</ANoticeBar>
  <ANoticeBar type="info" variant="ghost">Ghost</ANoticeBar>
  <ANoticeBar type="warning" variant="light">Light</ANoticeBar>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为 `primary` `success` `info` `warning` `danger` | `string` | `primary` |
| variant | 变体，可选值为 `solid` `outline` `ghost` `light` | `string` | `solid` |
| icon | 自定义图标类名 | `string` | - |
| loop | 是否循环滚动 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义内容 |
| icon | 自定义图标内容 |
