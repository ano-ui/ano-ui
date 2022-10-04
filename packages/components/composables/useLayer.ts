import type { ComponentObjectPropsOptions } from 'vue'
import { themeProp, variantProp } from './useProps'

export const useBaseProps = (propOverrides?: Partial<ComponentObjectPropsOptions>) => {
  const props = {
    cc: { type: String },
    type: themeProp,
    variant: variantProp,
  }

  // Add `defaults` property in `props` if it is provided via `defaults` argument
  if (propOverrides)
    Object.assign(props, propOverrides)

  return props
}
