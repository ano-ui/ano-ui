import type { Rule, RuleContext } from 'unocss'
import type { Theme } from 'unocss/preset-mini'
import { parseColor } from '@unocss/preset-mini'

export default [
  [/^a-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
    const color = parseColor(body, theme)
    if (color?.cssColor?.type === 'rgb' && color.cssColor.components) {
      return {
        '--ano-c-context': `${color.cssColor.components.join(',')}`,
      }
    }
  }],
  ['p-safe', { padding: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)' }],
  ['pt-safe', { 'padding-top': 'env(safe-area-inset-top)' }],
  ['pb-safe', { 'padding-bottom': 'env(safe-area-inset-bottom)' }],
  ['pl-safe', { 'padding-left': 'env(safe-area-inset-left)' }],
  ['pr-safe', { 'padding-right': 'env(safe-area-inset-right)' }],
  ['m-safe', { margin: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)' }],
  ['mt-safe', { 'margin-top': 'env(safe-area-inset-top)' }],
  ['mb-safe', { 'margin-bottom': 'env(safe-area-inset-bottom)' }],
  ['ml-safe', { 'margin-left': 'env(safe-area-inset-left)' }],
  ['mr-safe', { 'margin-right': 'env(safe-area-inset-right)' }],
] as Rule<Theme>[]
