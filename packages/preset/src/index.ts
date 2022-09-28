import type { Preset } from 'unocss'

export function presetAno(): Preset {
  return {
    name: '@ano-uni/preset',
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
