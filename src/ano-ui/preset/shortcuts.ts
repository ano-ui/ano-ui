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

  'a-color-base': 'text-gray-700 dark:text-light-200',
  'a-color-base-second': 'text-gray-400 dark:text-gray-500/60',
  // 'a-border-base': 'border-gray-400/80',
  'a-border-200': 'border-gray-400/25',
  'a-border-300': 'border-gray-400/40',
  'a-transition': 'transition-all duration-200',

  'a-solid': 'bg-context text-white dark:bg-op80 dark:text-op80',
  'a-outline': 'bg-transparent border border-solid border-context text-context dark:border-op80 dark:text-op80',
  'a-ghost': 'bg-transparent border border-dashed border-context text-context dark:border-op80 dark:text-op80',
  'a-light': 'bg-context text-context bg-op20 dark:text-op80',
  'a-text': 'bg-transparent text-context dark:text-op80',

  'a-hairline': 'relative after:content-[\'_\'] after:pointer-events-none after:absolute after:box-border after:top--50% after:right--50% after:bottom--50% after:left--50% after:a-border-300 after:border-solid after:border-0 after:scale-50',
  'a-hairline-bottom': 'a-hairline after:border-b-1px',
}
