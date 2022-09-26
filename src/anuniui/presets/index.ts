import type { Preset } from 'unocss'

export function presetAnUni(): Preset {
  return {
    name: '@an-uni-ui/preset-theme-default',
    theme: {
      colors: {
        primary: '#a855f7',
        secondary: '#1ABCFE',
        success: '#0ACF83',
        warning: '#FF9F43',
        danger: '#FF5C5C',
        info: '#373e47',
        placeholder: '#dcdcdc',
      },
    },
  }
}
