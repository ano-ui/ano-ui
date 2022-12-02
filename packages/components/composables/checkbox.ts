import type { SizeType } from './useProps'

export const checkboxGroupContextKey = Symbol('checkboxGroupContextKey')

export type CheckboxValueType = string | number | boolean

export interface CheckboxGroupContext {
  isGroup: boolean
  groupValue: CheckboxValueType[]
  size: SizeType
  min: number
  max: number
  disabled: boolean
}
