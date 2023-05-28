---
title: Collapse 折叠面板
---

# Collapse 折叠面板

## 基础用法

通过 `v-model` 控制展开的面板列表，`activeNames` 为数组格式。

```html
<script setup lang="ts">
import { ref } from 'vue'
const activeNames = ref(['1'])
</script>

<template>
  <ACollapse v-model="activeNames">
    <ACollapseItem title="Hi" name="1">
      今天晚饭吃什么？
    </ACollapseItem>
    <ACollapseItem title="May be?" name="2">
      小龙虾
    </ACollapseItem>
  </ACollapse>
</template>
```

## 手风琴

通过 `accordion` 可以设置为手风琴模式，最多展开一个面板，此时 `activeName` 为字符串格式。

```html
<script setup lang="ts">
import { ref } from 'vue'
const activeName = ref('1')
</script>

<template>
  <ACollapse v-model="activeName" accordion>
    <ACollapseItem title="Hi" name="1">
      今天晚饭吃什么？
    </ACollapseItem>
    <ACollapseItem title="May be?" name="2">
      小龙虾
    </ACollapseItem>
  </ACollapse>
</template>
```

## 禁用状态

通过 `disabled` 可以禁用某个面板。

```html
<template>
  <ACollapse v-model="activeNames">
    <ACollapseItem title="Hi" name="1">
      今天晚饭吃什么？
    </ACollapseItem>
    <ACollapseItem title="May be?" name="2" disabled>
      小龙虾
    </ACollapseItem>
  </ACollapse>
</template>
```

## API

### Collapse Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 绑定值 | `string \| Array \| object` | `-` |
| accordion | 是否开启手风琴模式 | `boolean` | `false` |

### CollapseItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 唯一标识符，对应 activeNames | `string \| number` | `index` |
| title | 标题 | `string` | `-` |
| disabled | 是否禁用 | `boolean` | `false` |
| icon | 自定义图标类名 | `string` | - |
| label | 标题下方的描述性文字 | `string` | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 切换面板时触发 | `activeNames: string \| Array \| object` |

### CollapseItem Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义内容 |
| icon | 自定义图标类名 | `string` | - |
| title | 自定义左侧标题 |
| value | 自定义右侧内容 |
| label | 自定义描述信息 |
| right-icon | 自定义右侧图标 |
