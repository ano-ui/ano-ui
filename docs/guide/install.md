# 安装

## 安装依赖

::: code-group

  ```bash [pnpm]
  pnpm add ano-ui
  pnpm add -D unocss @iconify-json/tabler unocss-applet
  ```

  ```bash [yarn]
  yarn add ano-ui
  yarn add -D unocss @iconify-json/tabler unocss-applet
  ```

  ```bash [npm]
  npm install ano-ui
  npm install -D unocss @iconify-json/tabler unocss-applet
  ```

:::

## 配置 UnoCSS Applet

由于小程序不支持一些 CSS 语法，所以需要使用 [unocss-applet](https://github.com/unocss-applet/unocss-applet) 插件来转换。

::: details

```ts
// uno.config.ts
import type { Preset, SourceCodeTransformer } from 'unocss'
import { defineConfig } from 'unocss'

import { presetApplet, presetRemRpx, transformerApplet, transformerAttributify, } from 'unocss-applet'

const isApplet = process.env?.UNI_PLATFORM?.startsWith('mp-') ?? false

const presets: Preset[] = []
const transformers: SourceCodeTransformer[] = []

if (isApplet) {
  presets.push(presetApplet())
  presets.push(presetRemRpx())
  transformers.push(transformerAttributify({ ignoreAttributes: ['block'] }))
  transformers.push(transformerApplet())
}
else {
  presets.push(presetApplet())
  presets.push(presetAttributify())
  presets.push(presetRemRpx({ mode: 'rpx2rem' }))
}

export default defineConfig({
  presets: [
    // ...
    ...presets,
  ],
  transformers: [
    // ...
    ...transformers,
  ],
})
```

:::

## 配置 UnoCSS

将 UnoCSS 添加到 `vite.config.ts` 文件中：

```ts
import UnoCSS from 'unocss/vite'

export default {
  plugins: [
    UnoCSS(),
  ],
}
```

更新 `main.ts` 入口文件：

```ts
// main.ts
import 'virtual:uno.css'
```

在项目的根目录下创建 UnoCSS 配置文件 `uno.config.ts`，内容如下：

```ts
// uno.config.ts
import { defineConfig, presetIcons } from 'unocss'
import { presetAno } from 'ano-ui'

export default defineConfig({
  presets: [
    // ...
    presetAno(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
})
```

## 按需导入

像下面这样更新 `pages.json` 文件：

```json
// pages.json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^A(.*)": "ano-ui/components/A$1/A$1.vue"
    }
  }
}
```

或者使用 [@uni-helper/vite-plugin-uni-components](https://github.com/uni-helper/vite-plugin-uni-components) 自动导入组件。

```ts
// vite.config.ts
import { defineConfig } from 'vite'

import Components from '@uni-helper/vite-plugin-uni-components'
import { AnoResolver } from 'ano-ui'

// https://vitejs.dev/config/
export default defineConfig({
  // ...
  plugins: [
    // ...
    Components({
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
      resolvers: [AnoResolver()],
    }),
  ],
})
```

现在只需使用一个组件，它将按需自动导入。

```html
<template>
  <AButton>Button</AButton>
</template>
```
