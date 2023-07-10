import type { UserShortcuts } from 'unocss'
import type { Theme } from '@unocss/preset-mini'

export const shortcuts: UserShortcuts<Theme> = {
  'a-bg': 'bg-gray-100 dark:bg-black',
  'a-bg-2': 'bg-white dark:bg-[#1C1C1E]',
  'a-border': 'border-[#EBEDF0] dark:border-[#3A3A3C]',
  'a-active': 'bg-[#F2F3F5] dark:bg-[#3A3A3C]',
  'a-active-h5': 'active:bg-[#F2F3F5] active:dark:bg-[#3A3A3C]',
  'a-text-color': 'text-[#323233] dark:text-[#F5F5F5]',
  'a-text-color-2': 'text-[#969799] dark:text-[#707070]',
  'a-text-color-3': 'text-[#C8C9CC] dark:text-[#4D4D4D]',

  'a-text-mini': 'text-xs',
  'a-text-small': 'text-sm',
  'a-text-normal': 'text-base',
  'a-text-large': 'text-lg',

  'a-transition': 'transition-all duration-200',

  'a-solid': 'bg-context text-white',
  'a-outline': 'bg-transparent border border-solid border-context text-context',
  'a-ghost': 'bg-transparent border border-dashed border-context text-context',
  'a-light': 'bg-context text-context bg-op20',
  'a-text': 'bg-transparent text-context',

  'a-type-default': '!a-text-color border border-solid dark:!bg-transparent border-[#DCDEE0]',

  'a-hairline': 'relative after:content-[\'_\'] after:pointer-events-none after:absolute after:box-border after:top--50% after:right--50% after:bottom--50% after:left--50% after:a-border after:border-solid after:border-0 after:scale-50',
  'a-hairline-bottom': 'a-hairline after:border-b-1px',
}
