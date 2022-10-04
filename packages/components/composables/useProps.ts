import type { PropType } from 'vue'

export type ThemeType = 'primary' | 'success' | 'info' | 'warning' | 'danger'

export const themeProp = {
  type: String as PropType<ThemeType>,
  validator: (value: string) => ['primary', 'success', 'info', 'warning', 'danger'].includes(value),
  default: 'primary',
}

export type VariantType = 'solid' | 'outline' | 'ghost' | 'light' | 'text'

export const variantProp = {
  type: String as PropType<VariantType>,
  default: 'solid',
}

export type SizeType = 'xs' | 'sm' | 'md' | 'lg'

export const sizeProp = {
  type: String as PropType<SizeType>,
  validator: (value: string) => ['xs', 'sm', 'md', 'lg'].includes(value),
  default: 'md',
}

export const disabledProp = {
  type: Boolean,
  default: false,
}

export const readonlyProp = {
  type: Boolean,
  default: false,
}

export const showTrueProp = {
  type: Boolean,
  default: true,
}

export const showFalseProp = {
  type: Boolean,
  default: false,
}

export const iconProp = {
  type: String,
  default: '',
}

export const iconOnlyProp = {
  type: Boolean,
  default: false,
}
