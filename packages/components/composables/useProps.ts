import type { PropType, StyleValue } from 'vue'

export const StringProp = {
  type: String,
  default: '',
}

export const NumberProp = {
  type: Number,
  default: 0,
}

export const BooleanProp = {
  type: Boolean,
  default: false,
}

export const BooleanTrueProp = {
  type: Boolean,
  default: true,
}

export const ArrayProp = {
  type: Array,
  default: () => [],
}

export type ClassType = String | Object | Array<ClassType>

export const CustomClassProp = {
  type: [String, Object, Array] as PropType<ClassType>,
  default: '',
}

export const CustomStyleProp = {
  type: [String, Object, Array] as PropType<StyleValue>,
  default: '',
}

export type ColorType = 'primary' | 'success' | 'info' | 'warning' | 'danger'

export const ColorProp = {
  type: String as PropType<ColorType>,
  validator: (value: string) =>
    ['primary', 'success', 'info', 'warning', 'danger'].includes(value),
  default: 'primary',
}

export type VariantType = 'solid' | 'outline' | 'ghost' | 'light' | 'text'

export const VariantProp = {
  type: String as PropType<VariantType>,
  default: 'solid',
}

export type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const SizeProp = {
  type: String as PropType<SizeType>,
  validator: (value: string) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value),
  default: 'lg',
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
