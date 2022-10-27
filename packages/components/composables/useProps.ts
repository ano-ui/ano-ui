import type { PropType } from 'vue'

export const StringProp = {
  type: String as PropType<string>,
  default: '',
}

export const NumberProp = {
  type: Number as PropType<number>,
  default: 0,
}

export const BooleanProp = {
  type: Boolean as PropType<boolean>,
  default: false,
}

export const BooleanTrueProp = {
  type: Boolean as PropType<boolean>,
  default: true,
}

export const ArrayProp = {
  type: Array as PropType<any[]>,
  default: () => [],
}

export const ClassType = [String, Object, Array] as PropType<unknown>

// custom class prop
export const CCProp = {
  type: ClassType,
  default: () => [],
}

// custom child class prop
export const CCCProp = {
  type: ClassType,
  default: () => [],
}

export const StyleType = [String, Object] as PropType<unknown>

// custom style prop
export const CSProp = {
  type: StyleType,
  default: () => ({}),
}

// custom child style prop
export const CCSProp = {
  type: StyleType,
  default: () => ({}),
}

export type ColorType = 'primary' | 'success' | 'info' | 'warning' | 'danger'

export const ColorProp = {
  type: String as PropType<ColorType>,
  validator: (value: string) => ['primary', 'success', 'info', 'warning', 'danger'].includes(value),
  default: 'primary',
}

export type VariantType = 'solid' | 'outline' | 'ghost' | 'light' | 'text'

export const VariantProp = {
  type: String as PropType<VariantType>,
  default: 'solid',
}

export type SizeType = 'xs' | 'sm' | 'md' | 'lg'

export const SizeProp = {
  type: String as PropType<SizeType>,
  validator: (value: string) => ['xs', 'sm', 'md', 'lg'].includes(value),
  default: 'md',
}

export type AlignType = 'start' | 'center' | 'end'

export const AlignProp = {
  type: String as PropType<AlignType>,
  validator: (value: string) => ['start', 'center', 'end'].includes(value),
  default: 'start',
}

export type InputType = 'text' | 'number' | 'digit' | 'password' | 'textarea'

export const InputTypeProp = {
  type: String as PropType<InputType>,
  default: 'text',
}
