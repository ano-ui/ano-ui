---
title: TabBar 标签栏
aside: false
---

# TabBar 标签栏

## 基础用法

`v-model` 默认绑定选中标签的索引值，通过修改 `v-model` 即可切换选中的标签。

```html
<script setup lang="ts">
import { ref } from 'vue'
const active = ref('home')
</script>

<template>
  <ATabBar v-model="active">
    <ATabBarItem name="home" icon="i-tabler-home">首页</ATabBarItem>
    <ATabBarItem name="discovery" icon="i-tabler-compass">发现</ATabBarItem>
    <ATabBarItem name="mine" icon="i-tabler-user">我的</ATabBarItem>
  </ATabBar>
</template>
```

## API

### TabBar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前选中标签的索引值 | `string` | `''` |

### TabBarItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标签名称 | `string` | `''` |
| icon | 自定义图标类名 | `string` | - |

### TabBar Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 切换标签时触发 | 当前选中标签的索引值 |

### TabBarItem Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击标签时触发 | 当前选中标签的索引值 |

### TabBarItem Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义内容 |
| icon | 自定义图标类名 | `string` | - |
