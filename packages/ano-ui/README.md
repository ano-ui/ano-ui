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
pnpm add -D unocss @iconify-json/carbon unocss-applet
```

## Usage

Custom UnoCSS config(`unocss.config.ts`):

```ts
import { defineConfig, presetIcons } from 'unocss'
// unocss-applet https://github.com/unocss-applet/unocss-applet
import { presetApplet, presetRemToRpx, transformerApplet } from 'unocss-applet'
import { presetAno } from 'ano-ui'

// UniApp
const isApplet = process.env?.UNI_PLATFORM?.startsWith('mp-')

export default defineConfig({
  presets: [
    presetApplet({ enable: isApplet }),
    presetAttributify({ enable: isApplet }),
    presetRemToRpx({ enable: isApplet }),
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
    transformerApplet({ enable: isApplet }),
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

And then enjoy it. Just use a button component like this:

```html
<template>
  <AButton>Button</AButton>
</template>
```

## Preview

### WeChat

> Probably not the latest version.

<img src="./public/applet-code.png" style="width:120px;" />

### WeChat DevTools(Recommended)

You can see the preview by the following commands:

```bash
pnpm i
```

Run playground to see the result.

```bash
pnpm play:mp-weixin
```

Then import the project(`xx/ano-ui/playground/dev/mp-weixin`) into WeChat DevTools.

## Acknowledgement

- [anu](https://github.com/jd-solanki/anu)
- [Element Plus](https://github.com/element-plus/element-plus)
- [UnoCSS](https://github.com/unocss/unocss)
- [onu-ui](https://github.com/onu-ui/onu-ui)
- [tm-ui](https://gitee.com/LYTB/tmui-design)
- [uView](https://github.com/umicro/uView2.0)

## License

[MIT](https://github.com/ano-ui/ano-ui/blob/main/LICENSE) License &copy; 2022-PRESENT [Neil Lee](https://github.com/zguolee)
