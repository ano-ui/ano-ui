import type { ComponentObjectPropsOptions } from 'vue'
import { ColorProp, CustomClassProp, CustomStyleProp } from './useProps'

export const useBaseProps = (propOverrides?: Partial<ComponentObjectPropsOptions>) => {
  const props = {
    // custom class prop
    cc: CustomClassProp,
    // custom child class prop
    ccc: CustomClassProp,
    // custom style prop
    cs: CustomStyleProp,
    // custom child style prop
    ccs: CustomStyleProp,
    color: ColorProp,
  }

  // Add `defaults` property in `props` if it is provided via `defaults` argument
  if (propOverrides)
    Object.assign(props, propOverrides)

  return props
}
