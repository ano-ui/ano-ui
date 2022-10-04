import type { ComponentObjectPropsOptions } from 'vue'
import { ccProp, themeProp, variantProp } from './useProps'

export const useBaseProps = (propOverrides?: Partial<ComponentObjectPropsOptions>) => {
  const props = {
    cc: ccProp,
    type: themeProp,
    variant: variantProp,
  }

  // Add `defaults` property in `props` if it is provided via `defaults` argument
  if (propOverrides)
    Object.assign(props, propOverrides)

  return props
}
