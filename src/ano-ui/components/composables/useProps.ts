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

export const useCustomClassProp = {
  type: [String, Object, Array] as PropType<ClassType>,
  default: '',
}

export const useCustomStyleProp = {
  type: [String, Object, Array] as PropType<StyleValue>,
  default: '',
}

export type Type = 'primary' | 'success' | 'info' | 'warning' | 'danger'

export const TypeProp = {
  type: String as PropType<Type>,
  validator: (value: string) =>
    ['primary', 'success', 'info', 'warning', 'danger'].includes(value),
  default: 'primary',
}

export type VariantType = 'solid' | 'outline' | 'ghost' | 'light' | 'text'

export const useVariantProp = {
  type: String as PropType<VariantType>,
  default: 'solid',
}

export type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const useSizeProp = {
  type: String as PropType<SizeType>,
  validator: (value: string) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value),
  default: 'lg',
}

export type AlignType = 'start' | 'center' | 'end'

export const AlignProp = {
  type: String as PropType<AlignType>,
  validator: (value: string) => ['start', 'center', 'end'].includes(value),
  default: 'center',
}

export type PositionType = 'top' | 'bottom' | 'left' | 'right' | 'center'

export const PositionProp = {
  type: String as PropType<PositionType>,
  validator: (value: string) =>
    ['top', 'bottom', 'left', 'right', 'center'].includes(value),
  default: 'center',
}
