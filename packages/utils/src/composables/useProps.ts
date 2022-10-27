import type { ComponentObjectPropsOptions, PropType } from 'vue'

export type ColorType = 'primary' | 'success' | 'info' | 'warning' | 'danger'

export type VariantType = 'solid' | 'outline' | 'ghost' | 'light' | 'text'

export type SizeType = 'xs' | 'sm' | 'md' | 'lg'

export const ColorProp = {
  type: String as PropType<ColorType>,
  validator: (value: string) => ['primary', 'success', 'info', 'warning', 'danger'].includes(value),
  default: 'primary',
}

export const VariantProp = {
  type: String as PropType<VariantType>,
  default: 'solid',
}

export const SizeProp = {
  type: String as PropType<SizeType>,
  validator: (value: string) => ['xs', 'sm', 'md', 'lg'].includes(value),
  default: 'md',
}

export const disabled = {
  type: Boolean,
  default: false,
}

export const readonly = {
  type: Boolean,
  default: false,
}

export const useBaseProps = (propOverrides?: Partial<ComponentObjectPropsOptions>) => {
  const props = {
    cc: { type: String },
    type: ColorProp,
    variant: VariantProp,
    size: SizeProp,
  }

  // Add `defaults` property in `props` if it is provided via `defaults` argument
  if (propOverrides)
    Object.assign(props, propOverrides)

  return props
}
