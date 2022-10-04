import type { PropType } from 'vue'

export const ccProp = {
  type: String,
  default: '',
}

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

export type PositionType = 'top' | 'right' | 'bottom' | 'left'

export const positionProp = {
  type: String as PropType<PositionType>,
  validator: (value: string) => ['top', 'right', 'bottom', 'left'].includes(value),
  default: 'top',
}

export type alignType = 'start' | 'center' | 'end'

export const alignProp = {
  type: String as PropType<alignType>,
  validator: (value: string) => ['start', 'center', 'end'].includes(value),
  default: 'start',
}

export type NotifyPositionType = 'default' | 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right'

export const notifyPositionProp = {
  type: String as PropType<NotifyPositionType>,
  validator: (value: string) => ['default', 'top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'].includes(value),
  default: 'default',
}
