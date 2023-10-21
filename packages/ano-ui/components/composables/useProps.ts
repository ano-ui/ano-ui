import type { PropType, StyleValue } from 'vue'

export type ClassType = string | object | Array<ClassType>
export const useCustomClassProp = {
  type: [String, Object, Array] as PropType<ClassType>,
  default: '',
}

export const useCustomStyleProp = {
  type: [String, Object, Array] as PropType<StyleValue>,
  default: '',
}

export type VariantType = 'solid' | 'outline' | 'ghost' | 'light' | 'text'
export const useVariantProp = {
  type: String as PropType<VariantType>,
  default: 'solid',
}

const sizeList = ['mini', 'small', 'normal', 'large'] as const
export type SizeType = typeof sizeList[number]
export const useSizeProp = {
  type: String as PropType<SizeType>,
  validator: (value: string) => sizeList.includes(value as SizeType),
  default: 'normal',
}

const typeList = ['default', 'primary', 'success', 'info', 'warning', 'danger'] as const
export type Type = typeof typeList[number]
export const useTypeProp = {
  type: String as PropType<Type>,
  validator: (value: string) =>
    typeList.includes(value as Type),
  default: 'default',
}

const directionList = ['vertical', 'horizontal'] as const
export type Direction = typeof directionList[number]
export const useDirectionProp = {
  type: String as PropType<Direction>,
  validator: (value: string) =>
    directionList.includes(value as Direction),
  default: 'vertical',
}

const positionList = ['top', 'bottom', 'left', 'right', 'center'] as const
export type PositionType = typeof positionList[number]
export const PositionProp = {
  type: String as PropType<PositionType>,
  validator: (value: string) => positionList.includes(value as PositionType),
  default: 'center',
}
