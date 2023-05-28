---
title: Badge 徽标
---

# Badge 徽标

## 基础用法

设置 `value` 属性后，会在子元素的右上角显示对应的徽标，也可以通过 `dot` 来显示点。

```html
<template>
  <ABadge value="99+">
    <div class="h-12 w-12 rounded-lg bg-gray3" />
  </ABadge>
  <ABadge dot>
    <div class="h-12 w-12 rounded-lg bg-gray3" />
  </ABadge>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 显示值 | `string \| number` | - |
| max | 最大值，超过最大值会显示 `{max}+`，仅在 `value` 为 `number` 时有效 | `number` | - |
| dot | 小圆点 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义内容 |
| value | 自定义显示值 |
