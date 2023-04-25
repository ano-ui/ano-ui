<p align="center">
<img src="https://github.com/ano-ui/ano-ui/raw/main/public/logo.svg" style="width:100px;" />
<h1 align="center">Ano-UI (WIP)</h1>
<p align="center">An UniApp UI components with UnoCSS.</p>
</p>
<p align="center">
<a href="https://www.npmjs.com/package/ano-ui"><img src="https://img.shields.io/npm/v/ano-ui?color=c95f8b&amp;label=" alt="NPM version"></a></p>

## Installation

```bash
pnpm add ano-ui
pnpm add -D unocss @iconify-json/tabler unocss-applet
```

## Usage

Custom UnoCSS config(`unocss.config.ts`):

```ts
import { defineConfig, presetIcons } from 'unocss'

// unocss-applet https://github.com/unocss-applet/unocss-applet
import { presetApplet, presetRemRpx, transformerApplet } from 'unocss-applet'
import { presetAno } from 'ano-ui'

export default defineConfig({
  presets: [
    presetApplet(),
    presetRemRpx(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetAno(),
  ],
  transformers: [
    transformerApplet(),
  ],
})
```

Update `pages.json` file like below:

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^A(.*)": "ano-ui/components/A$1/A$1.vue"
    }
  }
}
```

Or use [@uni-helper/vite-plugin-uni-components](https://github.com/uni-helper/vite-plugin-uni-components) to scan components automatically.

```ts
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

And then enjoy it. Just use a button component like this:

```html
<template>
  <AButton>Button</AButton>
</template>
```

## Acknowledgement

### Tools

- [UnoCSS](https://github.com/unocss/unocss)

### UI Frameworks

- [Anu](https://github.com/jd-solanki/anu)
- [Element Plus](https://github.com/element-plus/element-plus)
- [Onu UI](https://github.com/onu-ui/onu-ui)
- [uView](https://github.com/umicro/uView2.0)
- [Vant](https://github.com/youzan/vant)

## License

[MIT](https://github.com/ano-ui/ano-ui/blob/main/LICENSE) License &copy; 2022-PRESENT [Neil Lee](https://github.com/zguolee) and all contributors.
