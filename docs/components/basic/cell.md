---
title: Cell 单元格
aside: false
---

# Cell 单元格

## 基础用法

`Cell` 可以单独使用，也可以与 `CellGroup` 搭配使用，`CellGroup` 可以为 `Cell` 提供上下外边框。

```html
<template>
  <ACell title="单元格" value="内容" />
  <ACell value="无标题内容" />
  <ACell icon="i-tabler-carrot" title="单元格" value="内容" label="描述信息" />
</template>
```

### 卡片风格

通过 `CellGroup` 的 `inset` 属性，可以将单元格转换为圆角卡片风格。

```html
<template>
  <ACellGroup inset arrow divider>
    <ACell title="单元格" value="内容" />
    <ACell title="单元格" value="内容" />
    <ACell title="单元格" value="内容" />
  </ACellGroup>
</template>
```

## 自定义

```html
<template>
  <ACellGroup divider title="分组标题">
    <ACell icon="i-tabler-carrot" title="单元格" value="内容" label="描述信息" arrow />
    <ACell title="单元格">
      <template #icon>
        <i class="i-tabler-carrot" />
      </template>
      <template #value>
        <div>内容插槽</div>
      </template>
      <template #label>
        <div>描述信息插槽</div>
      </template>
      <template #right-icon>
        <i class="i-tabler-search" />
      </template>
    </ACell>
  </ACellGroup>
</template>
```

## API

### CellGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| title | 分组标题 | `string` | `-` |
| inset | 是否展示为圆角卡片风格 | `boolean_ | `false` |
| divider | 是否显示分割线 | `boolean` | `false` |

### CellProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 左侧标题 | `string` | `-` |
| value | 右侧内容 | `string` | `-` |
| label | 标题下方的描述信息 | `string` | `-` |
| icon | 自定义图标类名 | `string` | - |
| arrow | 是否显示右侧箭头并开启点击反馈 | `boolean` | `false` |
| center | 是否使内容垂直居中 | `boolean` | `false` |
| titleClass | 左侧标题额外类名 | `string \| Array \| object` | `-` |
| valueClass | 右侧内容额外类名 | `string \| Array \| object` | `-` |
| labelClass | 描述信息额外类名 | `string \| Array \| object` | `-` |

### Cell Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击时触发 | `event: MouseEvent`|

### CellGroup Slots

| 名称 | 说明 |
| --- | --- |
| default | 默认插槽 |

### Cell Slots

| 名称 | 说明 |
| --- | --- |
| default | 默认插槽 |
| icon | 自定义图标类名 | `string` | - |
| title | 自定义左侧标题 |
| value | 自定义右侧内容 |
| label | 自定义描述信息 |
| right-icon | 自定义右侧图标 |
