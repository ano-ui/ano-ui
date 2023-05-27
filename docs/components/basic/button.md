---
title: Button 按钮
aside: false
---

# 模板

## 按钮类型

按钮支持 `primary`、`success`、`info`、`warning`、`danger` 五种类型，默认为 `primary`。

```html
<AButton>主要按钮</AButton>
<AButton type="success">成功按钮</AButton>
<AButton type="info">信息按钮</AButton>
<AButton type="warning">警告按钮</AButton>
<AButton type="danger">危险按钮</AButton>
```

## 按钮大小

按钮支持 `mini`、`small`、`normal`、`large` 四种大小，默认为 `normal`。

```html
<AButton type="primary" size="mini">迷你按钮</AButton>
<AButton type="success" size="small">小型按钮</AButton>
<AButton type="info" size="normal">普通按钮</AButton>
<AButton type="warning" size="large">大型按钮</AButton>
```

## 按钮变体

按钮支持 `solid`、`outline`、`ghost`、`light`、`text` 五种变体，默认为 `solid`。

```html
<AButton variant="solid">实心按钮</AButton>
<AButton type="success" variant="outline">空心按钮</AButton>
<AButton type="info" variant="ghost">虚线按钮</AButton>
<AButton type="warning" variant="light">次要按钮</AButton>
<AButton type="danger" variant="text">文字按钮</AButton>
```

## 按钮状态

```html
<AButton loading>加载中</AButton>
<AButton type="success" disabled>禁用状态</AButton>
```

## 自定义

```html
<AButton icon="i-tabler-carrot" />
<AButton type="success" cc="rounded-none aspect-square">
  方
</AButton>
<AButton type="info" cc="rounded-full aspect-square">
  圆
</AButton>
<AButton type="warning">
  <template #icon>
    <i class="i-tabler-send" /> 插槽
  </template>
</AButton>
<AButton cc="bg-teal border-teal" open-type="getUserInfo" @click="getInfo">
  OpenType
</AButton>
<AButton :cc="['bg-gradient-to-r', 'from-indigo-500', 'to-pink-500']">
  背景渐变
</AButton>
<AButton type="danger" block>块级元素</AButton>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型，可选值为 `primary` `success` `info` `warning` `danger` |  `string` | `primary` |
| size | 按钮大小，可选值为 `mini` `small` `normal'` `large` | `string` | `normal` |
| variant | 按钮变体，可选值为 `solid` `outline` `ghost` `light` `text` | `string` | `solid` |
| icon | 左侧图标名称或图片链接 | `string` | `-` |
| disabled | 是否禁用按钮 | `boolean` | `false` |
| loading | 是否显示为加载状态 | `boolean` | `false` |
| block | 是否为块级元素 | `boolean` | `false` |
| openType | 开放能力，具体请看 uni-app 稳定关于 button 组件部分说明 | `string` | `-` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击按钮时触发 | `event: MouseEvent`|

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 按钮内容 |
| icon | 自定义图标 |
