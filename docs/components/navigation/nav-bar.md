---
title: NavBar 导航栏
aside: false
---

# NavBar 导航栏

## 基础用法

通过 `title` 属性设置导航栏标题。

```html
<template>
  <ANavBar title="标题" />
</template>
```

## 返回上级

在导航栏实现返回上级功能。

```html
<script setup lang="ts">
function onClickLeft() {
  const pages = getCurrentPages()
  if (pages.length > 1) {
    uni.navigateBack()
  }
  else {
    uni.redirectTo({
      url: '/',
    })
  }
}
</script>

<template>
  <ANavBar title="标题" left-text="返回" left-arrow @click-left="onClickLeft" />
</template>
```

## 右侧按钮

在导航栏右侧添加可点击的按钮。

```html
<script setup lang="ts">
function onClickRight() {
  console.log('点击右侧按钮')
}
</script>

<template>
  <ANavBar title="标题" right-text="按钮" @click-right="onClickRight" />
</template>
```

## 使用插槽

通过插槽自定义导航栏内容。

```html
<template>
  <ANavBar title="标题">
    <template #left>
      <AIcon name="i-tabler-home" />
    </template>
    <template #title>
      标题
    </template>
    <template #right>
      <AIcon name="i-tabler-compass" />
    </template>
  </ANavBar>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | `''` |
| left-text | 左侧文本 | `string` | `''` |
| right-text | 右侧文本 | `string` | `''` |
| left-arrow | 是否显示左侧箭头 | `boolean` | `false` |
| fixed | 是否固定在顶部 | `boolean` | `false` |
| border | 是否显示下边框 | `boolean` | `true` |
| height | 导航栏高度 | `string` | `''` |
| z-index | z-index 层级 | `number` | `1` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click-left | 点击左侧按钮时触发 | - |
| click-right | 点击右侧按钮时触发 | - |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义内容 |
| left | 自定义左侧内容 |
| title | 自定义标题内容 |
| right | 自定义右侧内容 |
