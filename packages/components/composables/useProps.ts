import type { PropType } from 'vue'

export const StringProp = {
  type: String as PropType<string>,
  default: '',
}

export const ccProp = StringProp

export type ColorType = 'primary' | 'success' | 'info' | 'warning' | 'danger'

export const colorProp = {
  type: String as PropType<ColorType>,
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

export const defaultTrueProp = {
  type: Boolean,
  default: true,
}

export const defaultFalseProp = {
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

export const showCloseProp = {
  type: Boolean,
  default: false,
}

export type InputType = 'text' | 'number' | 'digit' | 'password' | 'textarea'

export const InputTypeProp = {
  type: String as PropType<InputType>,
  default: 'text',
}
